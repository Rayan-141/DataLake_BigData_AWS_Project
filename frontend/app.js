const pageTitle = document.getElementById('pageTitle');
const pages = Array.from(document.querySelectorAll('.page'));
const navLinks = Array.from(document.querySelectorAll('.nav-link'));
const loginPage = document.getElementById('loginPage');
const dashboardPage = document.getElementById('dashboardPage');
const monitoringPage = document.getElementById('monitoringPage');
const reportsPage = document.getElementById('reportsPage');
const usersPage = document.getElementById('usersPage');
const backupPage = document.getElementById('backupPage');
const logoutBtn = document.getElementById('logoutBtn');
const loginForm = document.getElementById('loginForm');
const sidebar = document.getElementById('sidebar');
const topBar = document.getElementById('topBar');
const mainContent = document.getElementById('mainContent');

const summaryElements = {
  kpiUsers: document.getElementById('kpiUsers'),
  kpiDatasets: document.getElementById('kpiDatasets'),
  kpiReports: document.getElementById('kpiReports'),
  kpiStorage: document.getElementById('kpiStorage'),
};

const output = document.getElementById('data-output');
const currentUserName = document.getElementById('currentUserName');
const userRoleBadge = document.getElementById('userRoleBadge');
const dockerStatus = document.getElementById('dockerStatus');
const jenkinsStatus = document.getElementById('jenkinsStatus');
const k8sStatus = document.getElementById('k8sStatus');
const prometheusStatus = document.getElementById('prometheusStatus');
const grafanaStatus = document.getElementById('grafanaStatus');
const activeUsersText = document.getElementById('kpiUsers');
const datasetsText = document.getElementById('kpiDatasets');
const reportsText = document.getElementById('kpiReports');
const storageText = document.getElementById('kpiStorage');
const brandMark = document.getElementById('brandMark');

let activeUser = null;
let activeRole = null;
let activityLog = JSON.parse(localStorage.getItem('activityLog') || '[]');
const roleLabels = {
  admin: 'Admin',
  manager: 'Manager',
  employee: 'Employee',
};

function saveActivity() {
  localStorage.setItem('activityLog', JSON.stringify(activityLog));
}

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function updateUserHeader() {
  if (currentUserName) {
    currentUserName.textContent = activeUser ? activeUser.charAt(0).toUpperCase() + activeUser.slice(1) : 'Guest';
  }
  if (userRoleBadge) {
    userRoleBadge.textContent = activeRole ? roleLabels[activeRole] : 'Visitor';
  }
  // Update the small brand mark at the top-left to reflect the logged-in role (Admin/Manager/Employee)
  try {
    if (brandMark) {
      if (activeRole) {
        // show short role label (Admin, Manager, Employee)
        const shortRole = activeRole.charAt(0).toUpperCase() + activeRole.slice(1);
        brandMark.textContent = shortRole;
      } else if (activeUser) {
        // fallback to first letter of username
        brandMark.textContent = activeUser.charAt(0).toUpperCase();
      } else {
        brandMark.textContent = 'DL';
      }
    }
  } catch (e) {
    console.error('brandMark update failed', e);
  }
}

async function loadServices() {
  try {
    const data = await fetchJson('/api/services');
    dockerStatus.textContent = data.docker;
    jenkinsStatus.textContent = data.jenkins;
    k8sStatus.textContent = data.kubernetes;
    prometheusStatus.textContent = data.prometheus;
    grafanaStatus.textContent = data.grafana;
  } catch (error) {
    dockerStatus.textContent = 'Not Running';
    jenkinsStatus.textContent = 'Not Running';
    k8sStatus.textContent = 'Not Running';
    prometheusStatus.textContent = 'Not Running';
    grafanaStatus.textContent = 'Not Running';
    console.error('Failed to load service status', error);
  }
}

function addActivity(action, status) {
  if (!activeUser || !activeRole) return;
  const record = {
    activity: action,
    user: activeUser,
    role: activeRole,
    status,
    time: formatTime(new Date()),
    date: new Date().toLocaleDateString(),
  };
  activityLog.unshift(record);
  if (activityLog.length > 20) activityLog.pop();
  saveActivity();
  renderActivity();
}

function renderActivity() {
  const tableBody = document.getElementById('recentActivityBody');
  if (!tableBody) return;
  if (!activeUser) {
    tableBody.innerHTML = '<tr><td colspan="4">Sign in to see your recent activity.</td></tr>';
    return;
  }
  // map to include original indexes so we can remove entries
  const userEvents = activityLog.map((entry, idx) => ({ entry, idx })).filter(item => item.entry.user === activeUser);
  if (userEvents.length === 0) {
    tableBody.innerHTML = '<tr><td colspan="5">No activity recorded yet for this account.</td></tr>';
    return;
  }

  tableBody.innerHTML = userEvents.slice(0, 12).map(item => {
    const entry = item.entry;
    const idx = item.idx;
    return `
    <tr>
      <td>${entry.activity}</td>
      <td>${entry.user}</td>
      <td>${entry.status}</td>
      <td>${entry.date} ${entry.time}</td>
      <td><button class="small-button" onclick="removeActivity(${idx})">Remove</button></td>
    </tr>
  `;
  }).join('');
}

function removeActivity(globalIndex) {
  if (typeof globalIndex !== 'number') return;
  // confirm before deleting
  if (!confirm('Remove this activity?')) return;
  activityLog.splice(globalIndex, 1);
  saveActivity();
  renderActivity();
}

async function fetchJson(path, options = {}) {
  const response = await fetch(path, options);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Request failed');
  }
  return response.json();
}

function formatStorage(value) {
  if (value == null || Number.isNaN(Number(value))) {
    return '0 MB';
  }
  const sizeMb = Number(value);
  if (sizeMb >= 1024) {
    const sizeGb = sizeMb / 1024;
    return `${sizeGb.toFixed(1)} GB`;
  }
  return `${sizeMb} MB`;
}

async function loadSummary() {
  try {
    const data = await fetchJson('/api/summary');
    summaryElements.kpiUsers.textContent = data.totalUsers ?? summaryElements.kpiUsers.textContent;
    summaryElements.kpiDatasets.textContent = data.totalDatasets ?? summaryElements.kpiDatasets.textContent;
    summaryElements.kpiReports.textContent = data.totalReports ?? summaryElements.kpiReports.textContent;
    summaryElements.kpiStorage.textContent = formatStorage(data.totalStorage);
  } catch (error) {
    console.error(error);
  }
}

function renderTable(title, rows) {
  if (!rows || rows.length === 0) {
    return `<div><strong>${title}</strong><p>No records found.</p></div>`;
  }
  const headers = Object.keys(rows[0]);
  const tableRows = rows.map(row => {
    const cells = headers.map(key => `<td>${row[key] ?? ''}</td>`).join('');
    return `<tr>${cells}</tr>`;
  }).join('');
  return `
    <div>
      <h3>${title}</h3>
      <table class="table">
        <thead><tr>${headers.map(key => `<th>${key}</th>`).join('')}</tr></thead>
        <tbody>${tableRows}</tbody>
      </table>
    </div>
  `;
}

async function loadUsers() {
  try {
    const users = await fetchJson('/api/users');
    output.innerHTML = renderTable('Users', users);
  } catch (error) {
    output.innerHTML = `<p class="error">${error.message}</p>`;
  }
}

async function loadDepartments() {
  try {
    const departments = await fetchJson('/api/departments');
    output.innerHTML = renderTable('Departments', departments);
  } catch (error) {
    output.innerHTML = `<p class="error">${error.message}</p>`;
  }
}

async function loadDatasets() {
  try {
    const datasets = await fetchJson('/api/datasets');
    output.innerHTML = renderTable('Datasets', datasets);
  } catch (error) {
    output.innerHTML = `<p class="error">${error.message}</p>`;
  }
}

function attachForm(formId, endpoint, method = 'POST') {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const formData = new FormData(form);
    const body = Object.fromEntries(formData.entries());
    let url = `/api/${endpoint}`;
    if (endpoint.includes(':id')) {
      url = `/api/${endpoint.replace(':id', body.id)}`;
      delete body.id;
    }
    try {
      await fetchJson(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      form.reset();
      loadSummary();
      output.innerHTML = `<p>${formId} action completed successfully.</p>`;
    } catch (error) {
      output.innerHTML = `<p class="error">${error.message}</p>`;
    }
  });
}

function showPage(pageId, title) {
  pages.forEach(page => page.classList.remove('active'));
  navLinks.forEach(link => link.classList.remove('active'));
  const page = document.getElementById(pageId);
  if (page) page.classList.add('active');
  pageTitle.textContent = title;
  const activeLink = navLinks.find(link => link.dataset.page === pageId.replace('Page', ''));
  if (activeLink) activeLink.classList.add('active');
  if (pageId === 'dashboardPage') {
    topBar.classList.add('hidden');
  } else {
    topBar.classList.remove('hidden');
  }
}

function setAuthenticated(authenticated) {
  try {
    console.debug('setAuthenticated ->', authenticated);
    if (authenticated) {
      if (sidebar && sidebar.classList) sidebar.classList.remove('hidden');
      if (topBar && topBar.classList) topBar.classList.remove('hidden');
      if (mainContent && mainContent.classList) mainContent.classList.remove('login-mode');
      try { showPage('dashboardPage', 'Dashboard'); } catch (e) { console.error('showPage failed', e); }
      try { updateUserHeader(); } catch (e) { console.error('updateUserHeader failed', e); }
      try { loadSummary(); } catch (e) { console.error('loadSummary failed', e); }
      try { loadServices(); } catch (e) { console.error('loadServices failed', e); }
      try { renderActivity(); } catch (e) { console.error('renderActivity failed', e); }
    } else {
      if (sidebar && sidebar.classList) sidebar.classList.add('hidden');
      if (topBar && topBar.classList) topBar.classList.add('hidden');
      if (mainContent && mainContent.classList) mainContent.classList.add('login-mode');
      try { showPage('loginPage', 'Login'); } catch (e) { console.error('showPage failed', e); }
      try { updateUserHeader(); } catch (e) { console.error('updateUserHeader failed', e); }
      try { renderActivity(); } catch (e) { console.error('renderActivity failed', e); }
    }
  } catch (err) {
    console.error('setAuthenticated top-level error', err);
  }
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const page = `${link.dataset.page}Page`;
    showPage(page, link.textContent);
  });
});

logoutBtn.addEventListener('click', () => {
  if (activeUser && activeRole) {
    addActivity('Logout', 'Success');
  }
  setAuthenticated(false);
  activeUser = null;
  activeRole = null;
  updateUserHeader();
});

const loginRoleSelect = document.getElementById('loginRole');
if (loginRoleSelect) {
  loginRoleSelect.addEventListener('change', (e) => {
    const role = e.target.value;
    const usernameInput = document.getElementById('loginUsername');
    const passwordInput = document.getElementById('loginPassword');
    
    if (role === 'admin') {
      if (usernameInput) { usernameInput.value = ''; usernameInput.placeholder = 'admin'; }
      if (passwordInput) { passwordInput.value = ''; passwordInput.placeholder = 'admin123'; }
    } else if (role === 'manager') {
      if (usernameInput) { usernameInput.value = ''; usernameInput.placeholder = 'manager'; }
      if (passwordInput) { passwordInput.value = ''; passwordInput.placeholder = 'manager123'; }
    } else if (role === 'employee') {
      if (usernameInput) { usernameInput.value = ''; usernameInput.placeholder = 'employee'; }
      if (passwordInput) { passwordInput.value = ''; passwordInput.placeholder = 'employee123'; }
    } else {
      if (usernameInput) { usernameInput.value = ''; usernameInput.placeholder = 'Enter username'; }
      if (passwordInput) { passwordInput.value = ''; passwordInput.placeholder = 'Enter password'; }
    }
  });
}

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  try {
    const username = (document.getElementById('loginUsername')?.value || '').trim();
    const password = (document.getElementById('loginPassword')?.value || '').trim();
    const role = (document.getElementById('loginRole')?.value || '').trim();

    if (!username || !password) {
      alert('Please enter username and password.');
      return;
    }
    if (!role) {
      alert('Please select a role.');
      return;
    }

    const validUsers = {
      admin: 'admin123',
      manager: 'manager123',
      employee: 'employee123',
    };

    // Debug info for development - will not break in production
    console.debug('Attempt login', { username, role });

    if (validUsers[username] === password) {
      activeUser = username;
      activeRole = role;
      try {
        updateUserHeader();
      } catch (err) {
        console.error('updateUserHeader failed', err);
      }
      // call setAuthenticated and addActivity in guarded blocks so we surface where failures happen
      try {
        setAuthenticated(true);
      } catch (err) {
        console.error('setAuthenticated failed', err);
        alert('Login partial success: UI initialization failed. Check console.');
        return;
      }
      try {
        addActivity('Login', 'Success');
      } catch (err) {
        console.error('addActivity failed', err);
      }
      return;
    }

    alert('Invalid login. Use admin/admin123, manager/manager123, or employee/employee123.');
  } catch (err) {
    console.error('Login handler error', err);
    alert('An error occurred during login. Check console for details.');
  }
});

attachForm('userForm', 'users');
attachForm('datasetForm', 'datasets');
attachForm('reportForm', 'reports');
attachForm('uploadReportForm', 'reports/upload');
attachForm('datasetStatusForm', 'datasets/:id/status', 'PUT');
attachForm('taskStatusForm', 'tasks/:id/status', 'PUT');

const loadDatasetsBtn = document.getElementById('loadDatasetsBtn');
const s3DatasetsBody = document.getElementById('s3DatasetsBody');

if (loadDatasetsBtn && s3DatasetsBody) {
  loadDatasetsBtn.addEventListener('click', async () => {
    try {
      s3DatasetsBody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: #64748b;">Loading...</td></tr>`;
      const rows = await fetchJson('/api/datasets/list');
      if (rows && rows.length > 0) {
        s3DatasetsBody.innerHTML = rows.map(r => `
          <tr>
            <td>${r.id}</td>
            <td>${r.file_name}</td>
            <td>${new Date(r.upload_time).toLocaleString()}</td>
          </tr>
        `).join('');
      } else {
        s3DatasetsBody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: #64748b;">No datasets found in S3.</td></tr>`;
      }
    } catch (err) {
      console.error(err);
      s3DatasetsBody.innerHTML = `<tr><td colspan="3" style="text-align: center; color: red;">Failed to load datasets.</td></tr>`;
    }
  });
}
attachForm('taskForm', 'tasks');

// Default page when logged in
showPage('loginPage', 'Login');
