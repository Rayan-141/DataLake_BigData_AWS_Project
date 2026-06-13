const express = require('express');
const mysql = require('mysql2/promise');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const router = express.Router();

const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'datalake',
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
};

const s3BucketName = process.env.S3_BUCKET_NAME || '';
const s3Client = new S3Client({ region: process.env.AWS_REGION || 'us-east-1' });

async function getConnection() {
  const conn = await mysql.createConnection(dbConfig);
  return conn;
}

router.get('/summary', async (req, res) => {
  try {
    const conn = await getConnection();
    const [users] = await conn.query('SELECT COUNT(*) AS totalUsers FROM users');
    const [datasets] = await conn.query('SELECT COUNT(*) AS totalDatasets, SUM(size_mb) AS totalStorage FROM datasets');
    const [reports] = await conn.query('SELECT COUNT(*) AS totalReports FROM reports');
    const [active] = await conn.query("SELECT COUNT(*) AS activeUsers FROM users WHERE role <> 'analyst'");
    conn.end();

    res.json({
      totalUsers: users[0].totalUsers || 0,
      totalDatasets: datasets[0].totalDatasets || 0,
      totalStorage: datasets[0].totalStorage || 0,
      totalReports: reports[0].totalReports || 0,
      activeUsers: active[0].activeUsers || 0,
    });
  } catch (error) {
    console.error('Summary error:', error.message);
    res.status(500).json({ error: 'Unable to load summary' });
  }
});

router.get('/users', async (req, res) => {
  try {
    const conn = await getConnection();
    const [rows] = await conn.query('SELECT id, name, email, role FROM users');
    conn.end();
    res.json(rows);
  } catch (error) {
    console.error('Users error:', error.message);
    res.status(500).json({ error: 'Unable to load users' });
  }
});

router.post('/users', async (req, res) => {
  const { name, email, role } = req.body;
  if (!name || !email || !role) {
    return res.status(400).json({ error: 'name, email and role are required' });
  }
  try {
    const conn = await getConnection();
    await conn.query('INSERT INTO users (name, email, role) VALUES (?, ?, ?)', [name, email, role]);
    conn.end();
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    console.error('Create user error:', error.message);
    res.status(500).json({ error: 'Unable to create user' });
  }
});

router.get('/departments', async (req, res) => {
  try {
    const conn = await getConnection();
    const [rows] = await conn.query('SELECT id, department_name AS name, manager FROM departments');
    conn.end();
    res.json(rows);
  } catch (error) {
    console.error('Departments error:', error.message);
    res.status(500).json({ error: 'Unable to load departments' });
  }
});

router.post('/departments', async (req, res) => {
  const { department_name, manager } = req.body;
  if (!department_name || !manager) {
    return res.status(400).json({ error: 'department_name and manager are required' });
  }
  try {
    const conn = await getConnection();
    await conn.query('INSERT INTO departments (department_name, manager) VALUES (?, ?)', [department_name, manager]);
    conn.end();
    res.status(201).json({ message: 'Department created' });
  } catch (error) {
    console.error('Create department error:', error.message);
    res.status(500).json({ error: 'Unable to create department' });
  }
});

router.get('/datasets', async (req, res) => {
  try {
    const conn = await getConnection();
    const [rows] = await conn.query('SELECT id, dataset_name AS name, department, size_mb AS size, status FROM datasets');
    conn.end();
    res.json(rows);
  } catch (error) {
    console.error('Datasets error:', error.message);
    res.status(500).json({ error: 'Unable to load datasets' });
  }
});

router.post('/datasets', async (req, res) => {
  const { dataset_name, department, size_mb, status } = req.body;
  if (!dataset_name || !department || size_mb == null || !status) {
    return res.status(400).json({ error: 'dataset_name, department, size_mb and status required' });
  }
  try {
    const conn = await getConnection();
    await conn.query('INSERT INTO datasets (dataset_name, department, size_mb, status) VALUES (?, ?, ?, ?)', [dataset_name, department, size_mb, status]);
    conn.end();
    res.status(201).json({ message: 'Dataset added' });
  } catch (error) {
    console.error('Create dataset error:', error.message);
    res.status(500).json({ error: 'Unable to add dataset' });
  }
});

router.put('/datasets/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const validStatuses = ['pending', 'approved', 'rejected'];
  if (!status || !validStatuses.includes(status)) {
    return res.status(400).json({ error: 'Valid status is required' });
  }
  try {
    const conn = await getConnection();
    await conn.query('UPDATE datasets SET status = ? WHERE id = ?', [status, id]);
    conn.end();
    res.json({ message: 'Dataset status updated' });
  } catch (error) {
    console.error('Update dataset status error:', error.message);
    res.status(500).json({ error: 'Unable to update dataset status' });
  }
});

router.get('/reports', async (req, res) => {
  try {
    const conn = await getConnection();
    const [rows] = await conn.query('SELECT id, report_name AS name, department, created_at FROM reports ORDER BY created_at DESC LIMIT 50');
    conn.end();
    res.json(rows);
  } catch (error) {
    console.error('Reports error:', error.message);
    res.status(500).json({ error: 'Unable to load reports' });
  }
});

router.post('/reports', async (req, res) => {
  const { report_name, department } = req.body;
  if (!report_name || !department) {
    return res.status(400).json({ error: 'report_name and department are required' });
  }
  try {
    const conn = await getConnection();
    await conn.query('INSERT INTO reports (report_name, department) VALUES (?, ?)', [report_name, department]);
    conn.end();
    res.status(201).json({ message: 'Report created' });
  } catch (error) {
    console.error('Create report error:', error.message);
    res.status(500).json({ error: 'Unable to create report' });
  }
});

router.post('/reports/upload', async (req, res) => {
  const { report_name, department, content } = req.body;
  if (!report_name || !department) {
    return res.status(400).json({ error: 'report_name and department are required' });
  }
  if (!s3BucketName) {
    return res.status(500).json({ error: 'S3 bucket is not configured' });
  }
  try {
    const key = `reports/${Date.now()}_${report_name.replace(/\s+/g, '_')}.txt`;
    const body = content || `Report: ${report_name}\nDepartment: ${department}\nCreated: ${new Date().toISOString()}`;
    await s3Client.send(new PutObjectCommand({
      Bucket: s3BucketName,
      Key: key,
      Body: body,
      ContentType: 'text/plain',
    }));

    const conn = await getConnection();
    await conn.query('INSERT INTO reports (report_name, department) VALUES (?, ?)', [report_name, department]);
    conn.end();

    res.status(201).json({ message: 'Report uploaded to S3', key });
  } catch (error) {
    console.error('Upload report error:', error.message);
    res.status(500).json({ error: 'Unable to upload report to S3' });
  }
});

router.get('/tasks', async (req, res) => {
  try {
    const conn = await getConnection();
    const [rows] = await conn.query('SELECT id, title, assigned_to, status FROM tasks ORDER BY id DESC LIMIT 50');
    conn.end();
    res.json(rows);
  } catch (error) {
    console.error('Tasks error:', error.message);
    res.status(500).json({ error: 'Unable to load tasks' });
  }
});

router.post('/tasks', async (req, res) => {
  const { title, assigned_to, status } = req.body;
  if (!title || !assigned_to || !status) {
    return res.status(400).json({ error: 'title, assigned_to and status are required' });
  }
  try {
    const conn = await getConnection();
    await conn.query('INSERT INTO tasks (title, assigned_to, status) VALUES (?, ?, ?)', [title, assigned_to, status]);
    conn.end();
    res.status(201).json({ message: 'Task created' });
  } catch (error) {
    console.error('Create task error:', error.message);
    res.status(500).json({ error: 'Unable to create task' });
  }
});

router.put('/tasks/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const validStatuses = ['open', 'in-progress', 'completed'];
  if (!status || !validStatuses.includes(status)) {
    return res.status(400).json({ error: 'Valid status is required' });
  }
  try {
    const conn = await getConnection();
    await conn.query('UPDATE tasks SET status = ? WHERE id = ?', [status, id]);
    conn.end();
    res.json({ message: 'Task status updated' });
  } catch (error) {
    console.error('Update task status error:', error.message);
    res.status(500).json({ error: 'Unable to update task status' });
  }
});

module.exports = router;
