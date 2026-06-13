# DataLake Big Data AWS Project

DataLake Analytics Cloud Portal is a simple AWS-focused full-stack project for demonstrating a cloud-based big data analytics platform. It includes a Node.js backend, MySQL database schema, static dashboard frontend, Docker setup, Terraform starter infrastructure, Kubernetes manifests, Jenkins pipeline, monitoring notes, and backup scripts.

## Features

- Analytics dashboard for users, datasets, reports, and storage summary
- User, department, dataset, report, and task management APIs
- MySQL schema for core portal data
- Optional S3 report upload route
- Static HTML, CSS, and JavaScript frontend
- Docker and Docker Compose local environment
- Terraform starter files for AWS infrastructure
- Kubernetes deployment and service manifests
- Jenkins pipeline and shell scripts for DevOps workflows
- Notes for RBAC, infrastructure, CloudWatch, and viva preparation

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MySQL
- Cloud: AWS EC2, RDS, S3, VPC, IAM, CloudWatch
- DevOps: Docker, Docker Compose, Terraform, Kubernetes, Jenkins

## Project Structure

```text
.
|-- backend/
|   |-- db/schema.sql
|   |-- Dockerfile
|   |-- package.json
|   |-- routes.js
|   `-- server.js
|-- cloudwatch/
|   `-- amazon-cloudwatch-agent.json
|-- frontend/
|   |-- app.js
|   |-- index.html
|   `-- styles.css
|-- jenkins/
|   `-- Jenkinsfile
|-- k8s/
|   |-- deployment.yaml
|   `-- service.yaml
|-- scripts/
|   |-- backup.sh
|   `-- monitoring.sh
|-- terraform/
|   |-- main.tf
|   |-- outputs.tf
|   |-- variables.auto.tfvars
|   `-- variables.tf
|-- docker-compose.yml
`-- README.md
```

## Prerequisites

- Node.js and npm
- MySQL 8.0 or Docker
- Docker and Docker Compose
- Terraform, if deploying infrastructure
- AWS account and configured credentials, if using AWS services

## Local Setup

### 1. Install backend dependencies

```bash
cd backend
npm install
```

### 2. Create environment file

Create `backend/.env`:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=password
DB_NAME=datalake
DB_PORT=3306
PORT=3000
AWS_REGION=us-east-1
S3_BUCKET_NAME=
```

For Docker Compose, use these database values instead:

```bash
DB_HOST=db
DB_USER=datalakeadmin
DB_PASSWORD=DatalakePass123!
DB_NAME=datalake
DB_PORT=3306
PORT=3000
AWS_REGION=us-east-1
S3_BUCKET_NAME=
```

### 3. Initialize the database

With a local MySQL server:

```bash
mysql -u root -p < backend/db/schema.sql
```

### 4. Start the backend

```bash
cd backend
npm start
```

The portal will be available at:

```text
http://localhost:3000
```

The backend serves the frontend from the `frontend/` folder and exposes API routes under `/api`.

## Run With Docker Compose

```bash
docker compose up --build
```

This starts:

- `app`: Node.js Express application on port `3000`
- `db`: MySQL 8.0 database on port `3306`

Open:

```text
http://localhost:3000
```

If the database is empty, load the schema into the running MySQL container before using the dashboard.

## API Endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/summary` | Dashboard totals |
| GET | `/api/users` | List users |
| POST | `/api/users` | Create user |
| GET | `/api/departments` | List departments |
| POST | `/api/departments` | Create department |
| GET | `/api/datasets` | List datasets |
| POST | `/api/datasets` | Add dataset |
| PUT | `/api/datasets/:id/status` | Update dataset status |
| GET | `/api/reports` | List reports |
| POST | `/api/reports` | Create report |
| POST | `/api/reports/upload` | Upload report content to S3 |
| GET | `/api/tasks` | List tasks |
| POST | `/api/tasks` | Create task |
| PUT | `/api/tasks/:id/status` | Update task status |

## AWS Deployment Notes

This project is designed to map cleanly to AWS services:

- EC2 hosts the Node.js application
- RDS MySQL stores application data
- S3 stores generated reports, backups, or uploaded files
- VPC and Security Groups isolate the network
- IAM controls access for administrators, managers, and analysts
- CloudWatch monitors CPU, memory, logs, and alarms
- Route 53 can optionally provide DNS

See the supporting files for more detail:

- `terraform/README.md`
- `INFRASTRUCTURE_NOTES.md`
- `AWS_MONITORING_NOTES.md`
- `RBAC_NOTES.md`
- `ARCHITECTURE_DIAGRAM.md`

## DevOps Components

- `backend/Dockerfile`: containerizes the backend application
- `docker-compose.yml`: runs the app and MySQL locally
- `jenkins/Jenkinsfile`: CI/CD pipeline starter
- `k8s/deployment.yaml`: Kubernetes application deployment
- `k8s/service.yaml`: Kubernetes service exposure
- `scripts/backup.sh`: backup helper script
- `scripts/monitoring.sh`: monitoring helper script

## Viva Points

- Explain why EC2 is used to host the application layer.
- Explain why RDS/MySQL is suitable for structured portal data.
- Explain how S3 can store reports, backups, and exported files.
- Explain how VPC and Security Groups protect the deployment.
- Explain IAM roles and RBAC for admin, manager, and analyst access.
- Explain CloudWatch monitoring and alarm use cases.
- Explain how Docker improves packaging and deployment.
- Explain how Terraform makes AWS infrastructure repeatable.
- Explain how Jenkins and Kubernetes support DevOps automation.

## Future Improvements

- Add authentication and session handling
- Add frontend forms for every API workflow
- Add database migrations and seed data
- Add automated tests for API routes
- Add production NGINX reverse proxy configuration
- Add complete S3 file upload UI
- Add CloudWatch log shipping from the Node.js app
