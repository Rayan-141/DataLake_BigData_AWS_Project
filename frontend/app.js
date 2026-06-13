const summaryElements = {
  totalUsers: document.getElementById('totalUsers'),
  totalDatasets: document.getElementById('totalDatasets'),
  totalStorage: document.getElementById('totalStorage'),
  totalReports: document.getElementById('totalReports'),
  activeUsers: document.getElementById('activeUsers'),
};

const output = document.getElementById('data-output');

async function fetchJson(path, options = {}) {
  const response = await fetch(path, options);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || 'Request failed');
  }
  return response.json();
}

async function loadSummary() {
  try {
    const data = await fetchJson('/api/summary');
    summaryElements.totalUsers.textContent = data.totalUsers;
    summaryElements.totalDatasets.textContent = data.totalDatasets;
    summaryElements.totalStorage.textContent = data.totalStorage;
    summaryElements.totalReports.textContent = data.totalReports;
    summaryElements.activeUsers.textContent = data.activeUsers;
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

document.getElementById('loadUsersBtn').addEventListener('click', loadUsers);
document.getElementById('loadDepartmentsBtn').addEventListener('click', loadDepartments);
document.getElementById('loadDatasetsBtn').addEventListener('click', loadDatasets);
attachForm('userForm', 'users');
attachForm('datasetForm', 'datasets');
attachForm('reportForm', 'reports');
attachForm('uploadReportForm', 'reports/upload');
attachForm('datasetStatusForm', 'datasets/:id/status', 'PUT');
attachForm('taskForm', 'tasks');

loadSummary();
