const db = require("./connection");
const logger = require("../logs/logger");

async function initializeDatabase() {
  logger.info("Initializing database tables...");
  try {
    // 1. Create uploaded_datasets table if not exists
    await db.execute(`
      CREATE TABLE IF NOT EXISTS uploaded_datasets (
        id INT AUTO_INCREMENT PRIMARY KEY,
        filename VARCHAR(255) NOT NULL,
        s3_key VARCHAR(500) NOT NULL,
        size_bytes INT DEFAULT 0,
        upload_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Migration helper: check columns and rename file_name to filename if present
    try {
      const [columns] = await db.execute("DESCRIBE uploaded_datasets");
      const hasFileName = columns.some(c => c.Field === 'file_name');
      if (hasFileName) {
        logger.info("Migrating: Renaming file_name column to filename...");
        await db.execute("ALTER TABLE uploaded_datasets CHANGE COLUMN file_name filename VARCHAR(255) NOT NULL");
      }
    } catch (err) {
      logger.error("Migration check for file_name failed: " + err.message);
    }

    // Ensure size_bytes column exists (migration helper)
    try {
      await db.execute("SELECT size_bytes FROM uploaded_datasets LIMIT 1");
    } catch (colErr) {
      logger.info("Adding size_bytes column to uploaded_datasets...");
      await db.execute("ALTER TABLE uploaded_datasets ADD COLUMN size_bytes INT DEFAULT 0");
    }

    // 2. Create users table if not exists
    await db.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        role ENUM('admin', 'manager', 'analyst') DEFAULT 'analyst'
      )
    `);

    // 3. Create departments table if not exists
    await db.execute(`
      CREATE TABLE IF NOT EXISTS departments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        department_name VARCHAR(100) NOT NULL,
        manager VARCHAR(100) NOT NULL
      )
    `);

    // 4. Create datasets table if not exists
    await db.execute(`
      CREATE TABLE IF NOT EXISTS datasets (
        id INT AUTO_INCREMENT PRIMARY KEY,
        dataset_name VARCHAR(150) NOT NULL,
        department VARCHAR(100) NOT NULL,
        size_mb INT NOT NULL DEFAULT 0,
        status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending'
      )
    `);

    // 5. Create reports table if not exists
    await db.execute(`
      CREATE TABLE IF NOT EXISTS reports (
        id INT AUTO_INCREMENT PRIMARY KEY,
        report_name VARCHAR(150) NOT NULL,
        department VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 6. Create tasks table if not exists
    await db.execute(`
      CREATE TABLE IF NOT EXISTS tasks (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(150) NOT NULL,
        assigned_to VARCHAR(100) NOT NULL,
        status ENUM('open', 'in-progress', 'completed') DEFAULT 'open'
      )
    `);

    logger.info("Database initialization completed successfully.");
  } catch (error) {
    logger.error("Database initialization failed: " + error.message);
    console.error("Database initialization error:", error);
  }
}

module.exports = initializeDatabase;
