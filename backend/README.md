# Backend Setup for DataLake Analytics Cloud Portal

This folder contains the Node.js backend and API server.

## Files

- `server.js` - starts the Express application.
- `routes.js` - defines REST API endpoints for users, departments, datasets, reports, and tasks.
- `package.json` - project dependencies and scripts.
- `Dockerfile` - builds the backend image.
- `db/schema.sql` - MySQL database schema.
- `.env.example` - sample environment variables.

## Install dependencies

```bash
cd /Users/apple/Desktop/DataLake_BigData_AWS_Project/backend
npm install
```

## Create `.env`

Create `backend/.env` using values from `.env.example`.

## Start locally

```bash
npm start
```

## API endpoints

- `GET /api/summary` - Analytics summary metrics
- `GET /api/users` - List users
- `POST /api/users` - Create user
- `GET /api/departments` - List departments
- `POST /api/departments` - Create department
- `GET /api/datasets` - List datasets
- `POST /api/datasets` - Create dataset
- `GET /api/reports` - List reports
- `POST /api/reports` - Create report
- `GET /api/tasks` - List tasks
- `POST /api/tasks` - Create task

## Docker commands

Build:

```bash
docker build -t datalake-app .
```

Run:

```bash
docker run -p 3000:3000 --env-file .env datalake-app
```

## Notes for AWS deployment

- Use the same `Dockerfile` to package the app for EC2 or ECR.
- Use Amazon RDS for MySQL and update `.env` with the RDS endpoint.
- Use security group rules for port `3000` if exposing directly, or use Nginx reverse proxy on port `80`.
