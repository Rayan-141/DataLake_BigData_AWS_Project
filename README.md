<div align="center">

# 🌊 DataLake Big Data Analytics Cloud Portal

### A Full-Stack AWS Big Data Platform with Real-Time Dashboard, S3 Integration & DevOps Automation

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Render-46E3B7?style=for-the-badge)](https://datalake-aws-project.onrender.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql)](https://www.mysql.com/)
[![AWS](https://img.shields.io/badge/AWS-Cloud-FF9900?style=for-the-badge&logo=amazonaws)](https://aws.amazon.com/)
[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker)](https://www.docker.com/)
[![Terraform](https://img.shields.io/badge/Terraform-IaC-7B42BC?style=for-the-badge&logo=terraform)](https://www.terraform.io/)

</div>

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Architecture](#-architecture)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Database Schema](#-database-schema)
- [API Reference](#-api-reference)
- [Local Setup](#-local-setup)
- [Docker Setup](#-docker-setup)
- [AWS Deployment](#-aws-deployment)
- [Terraform Infrastructure](#-terraform-infrastructure)
- [Kubernetes Deployment](#-kubernetes-deployment)
- [Jenkins CI/CD Pipeline](#-jenkins-cicd-pipeline)
- [CloudWatch Monitoring](#-cloudwatch-monitoring)
- [Backup & Scripts](#-backup--scripts)
- [Environment Variables](#-environment-variables)
- [Security & IAM (RBAC)](#-security--iam-rbac)
- [Viva / Interview Q&A](#-viva--interview-qa)
- [Future Improvements](#-future-improvements)

---

## 🌟 Overview

**DataLake Analytics Cloud Portal** is a production-grade, full-stack big data analytics platform built on **AWS Cloud Infrastructure**. It enables organizations to:

- 📦 **Upload & manage datasets** directly to AWS S3
- 👥 **Manage users, departments, reports & tasks** through a live dashboard
- 📊 **Monitor infrastructure** (Docker, Jenkins, Kubernetes, Prometheus, Grafana) in real time
- 🔁 **Automate deployments** via Jenkins CI/CD pipelines and Kubernetes orchestration
- 🏗️ **Provision cloud infrastructure** using Terraform (Infrastructure as Code)
- 📈 **Track metrics** through AWS CloudWatch with CPU, memory, and disk monitoring

This project demonstrates a complete **enterprise-level cloud data engineering workflow** from data ingestion → storage → processing → visualization, all backed by AWS managed services.

---

## 🌐 Live Demo

> **🚀 Website Live Link:** [https://datalake-aws-project.onrender.com/](https://datalake-aws-project.onrender.com/)

**Default Login Credentials:**
| Field | Value |
|-------|-------|
| Username | `admin` |
| Password | `admin123` |

---

## 🏗️ Architecture

### High-Level AWS Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Internet / User                       │
└──────────────────────────┬──────────────────────────────────┘
                           │ HTTPS
                    ┌──────▼──────┐
                    │  Route 53   │  DNS (optional)
                    └──────┬──────┘
                           │
                    ┌──────▼──────┐
                    │   NGINX     │  Reverse Proxy / Load Balancer
                    └──────┬──────┘
                           │
              ┌────────────▼─────────────┐
              │      AWS EC2 Instance    │
              │   (t3.micro, us-east-1)  │
              │                          │
              │  ┌────────────────────┐  │
              │  │  Node.js Express   │  │  Port 3000
              │  │  (Backend + API)   │  │
              │  └────────┬───────────┘  │
              └───────────┼──────────────┘
                          │
           ┌──────────────┼──────────────────┐
           │              │                  │
    ┌──────▼──────┐ ┌─────▼──────┐  ┌───────▼──────┐
    │  AWS RDS    │ │  AWS S3    │  │  CloudWatch   │
    │  MySQL 8.0  │ │  Bucket    │  │  Monitoring   │
    │  (datalake) │ │  (Reports  │  │  CPU/Mem/Disk │
    └─────────────┘ │  Datasets) │  └──────────────┘
                    └────────────┘
```

### Architecture Diagram Links

- 🔗 [Architecture Diagram 1 (Mermaid)](https://mermaid.ai/d/3b3f2a37-0cfb-4de0-83a2-3f4ae8b5688d)
- 🔗 [Architecture Diagram 2 (Mermaid Live)](https://mermaid.live/edit#pako:eNrVWuty4jgWfhWVu2Y6XQtpzCUQkkmVsc3ADpAsJkn1NvtDGBE0MZZXlpPQt9qHmCeYR9sn2SMZG5tA72wNVLF0VQcdy0fSuXw650s-ay6bEq2pFYvFsS-o8EgTjTXj3kEWFriHHwn6979-Qy36oATI8LG3FNQNkemxaIpOnGUoyAIZ3J1TQVwRcfJurI19pXDmsWd3jrlAI2vsj_0ffkA__YmPUuDY5qh7PUC62phxc9PrmoaSGEOz0x3B49uhvYe1wmjywHEwl2t8HGuXU_qEQrH0yE9vZ8wXxZB-Is1yKXi5UMNnQh_motkolS4EeRFF7NEHv-kSXxB-scD8gfrFCROCLZq6fOntlREEHnWxoMzP2e_yPSx1Ndb-MfYRfKaUg1xOGrWkEaXMsPrdwcnOXem1jV3V_8CuqvGmpgvq01BwLBiPd7JjjTLMf63TZR7jzTfVeq12dg76egyWQFFI_Qd0TyaoxdlzSHh6xnfJkTrXzujkAAcaEn9K-CpcOywUsJN9nIs-EXQ77DXRJb2aQmp4kCtF_BwWA85-BYedMp-rpU9dtrh8T6-SI6cnbg-vByN7YB3CjW0Or8HyezhpZ9TvQa7)

---

## ✨ Features

### 🖥️ Dashboard
- **Real-time KPI Cards** — Total Users, Datasets, Storage (from S3), Reports
- **Live Activity Feed** — Recent uploads, logins, and system events
- **Infrastructure Status Panel** — Docker, Jenkins, Kubernetes, Prometheus, Grafana — all live
- **Website Monitoring** — Simulated live metrics (response time, uptime, requests/sec, error rate)

### 📁 Dataset Management
- Upload datasets (CSV, Excel, JSON, etc.) directly to **AWS S3**
- List all uploaded files with name, date, and S3 key
- **Download** files directly from S3 via the browser
- **Delete** files from both S3 and the database simultaneously

### 👥 User Management
- Create, list, and manage users with roles: `admin`, `manager`, `analyst`
- Role-based access control (RBAC) baked into the API

### 📋 Reports
- Create and list reports per department
- Upload reports directly to S3 with auto-generated keys

### ✅ Task Management
- Create tasks, assign to users, and track status: `open`, `in-progress`, `completed`

### 📊 Infrastructure Monitoring
- Live port-check based detection of running services
- CloudWatch integration for EC2 CPU, memory, and disk metrics

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | HTML5, CSS3 (Vanilla), JavaScript (ES6+) |
| **Backend** | Node.js 18, Express.js 4 |
| **Database** | MySQL 8.0 (Local / AWS RDS) |
| **File Storage** | AWS S3 (via `@aws-sdk/client-s3`) |
| **Containerization** | Docker, Docker Compose |
| **Infrastructure as Code** | Terraform (`~> 5.0` AWS Provider) |
| **Orchestration** | Kubernetes (Deployment + Service manifests) |
| **CI/CD** | Jenkins (Declarative Pipeline) |
| **Monitoring** | AWS CloudWatch Agent |
| **Logging** | Winston (structured JSON logs) |
| **File Uploads** | Multer + Multer-S3 |
| **Deployment (Live)** | Render.com (Docker-based) |

---

## 📁 Project Structure

```
DataLake_BigData_AWS_Project/
│
├── 📂 backend/                     # Node.js Express API server
│   ├── 📂 controllers/
│   │   └── uploadController.js     # Handles S3 file uploads via Multer
│   ├── 📂 db/
│   │   ├── connection.js           # MySQL2 connection pool
│   │   ├── init.js                 # Auto-creates tables on startup
│   │   └── schema.sql              # Raw SQL schema (manual use)
│   ├── 📂 logs/
│   │   └── logger.js               # Winston structured logger
│   ├── 📂 uploads/                 # Temp local file buffer (Multer)
│   ├── .dockerignore
│   ├── .env                        # Environment variables (gitignored)
│   ├── Dockerfile                  # Backend container definition
│   ├── package.json                # Node.js dependencies
│   ├── routes.js                   # All API route definitions
│   ├── s3.js                       # S3 client configuration
│   ├── server.js                   # App entry point
│   ├── test-s3.js                  # S3 connectivity test script
│   └── upload.js                   # Multer-S3 upload middleware
│
├── 📂 cloudwatch/
│   └── amazon-cloudwatch-agent.json  # CloudWatch Agent config (CPU/Mem/Disk)
│
├── 📂 frontend/                    # Static web interface
│   ├── app.js                      # All client-side JS logic
│   ├── index.html                  # Main single-page dashboard
│   └── styles.css                  # Dashboard styling
│
├── 📂 jenkins/
│   └── Jenkinsfile                 # CI/CD pipeline (Checkout → Build → Deploy)
│
├── 📂 k8s/                         # Kubernetes manifests
│   ├── deployment.yaml             # 2-replica pod deployment
│   └── service.yaml                # Service exposure (NodePort/LoadBalancer)
│
├── 📂 nginx/                       # NGINX reverse proxy config
│
├── 📂 s3/                          # S3 configuration notes
│
├── 📂 scripts/
│   ├── backup.sh                   # MySQL dump backup script
│   └── monitoring.sh               # System health monitoring script
│
├── 📂 terraform/                   # Infrastructure as Code
│   ├── main.tf                     # VPC, EC2, RDS, S3, Security Groups
│   ├── outputs.tf                  # Outputs (EC2 IP, RDS endpoint, etc.)
│   ├── variables.auto.tfvars       # Auto-loaded variable values
│   └── variables.tf                # Variable definitions
│
├── docker-compose.yml              # Local dev: MySQL + Backend containers
├── Dockerfile                      # Root-level Docker build (Render deploy)
├── .gitignore
└── README.md                       # This file
```

---

## 🗄️ Database Schema

The `datalake` MySQL database has **5 core tables** and **1 S3-linked table**:

```sql
-- Users: Roles → admin | manager | analyst
CREATE TABLE users (
  id    INT AUTO_INCREMENT PRIMARY KEY,
  name  VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  role  ENUM('admin', 'manager', 'analyst') DEFAULT 'analyst'
);

-- Departments
CREATE TABLE departments (
  id              INT AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(100) NOT NULL,
  manager         VARCHAR(100) NOT NULL
);

-- Datasets (metadata; files stored in S3)
CREATE TABLE datasets (
  id           INT AUTO_INCREMENT PRIMARY KEY,
  dataset_name VARCHAR(150) NOT NULL,
  department   VARCHAR(100) NOT NULL,
  size_mb      INT NOT NULL DEFAULT 0,
  status       ENUM('pending', 'approved', 'rejected') DEFAULT 'pending'
);

-- Uploaded Datasets (S3-linked file records)
CREATE TABLE uploaded_datasets (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  filename    VARCHAR(255) NOT NULL,
  s3_key      VARCHAR(500) NOT NULL,
  upload_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Reports
CREATE TABLE reports (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  report_name VARCHAR(150) NOT NULL,
  department  VARCHAR(100) NOT NULL,
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tasks
CREATE TABLE tasks (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  title       VARCHAR(150) NOT NULL,
  assigned_to VARCHAR(100) NOT NULL,
  status      ENUM('open', 'in-progress', 'completed') DEFAULT 'open'
);
```

---

## 📡 API Reference

### Base URL
```
Local:  http://localhost:3000/api
Live:   https://datalake-aws-project.onrender.com/api
```

### Dashboard & Health

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/summary` | Dashboard totals (users, datasets, storage from S3, reports) |
| `GET` | `/api/services` | Live status of Docker, Jenkins, Kubernetes, Prometheus, Grafana |
| `GET` | `/api/health` | Simple health check → `{ status: "UP" }` |

### Users

| Method | Endpoint | Body | Description |
|--------|----------|------|-------------|
| `GET` | `/api/users` | — | List all users |
| `POST` | `/api/users` | `{ name, email, role }` | Create a user |

### Departments

| Method | Endpoint | Body | Description |
|--------|----------|------|-------------|
| `GET` | `/api/departments` | — | List all departments |
| `POST` | `/api/departments` | `{ department_name, manager }` | Create a department |

### Datasets

| Method | Endpoint | Body | Description |
|--------|----------|------|-------------|
| `GET` | `/api/datasets` | — | List dataset metadata |
| `POST` | `/api/datasets` | `{ dataset_name, department, size_mb, status }` | Add dataset record |
| `PUT` | `/api/datasets/:id/status` | `{ status }` | Update status: `pending/approved/rejected` |
| `POST` | `/api/datasets/upload` | `multipart/form-data` (file) | Upload file to **AWS S3** |
| `GET` | `/api/datasets/list` | — | List all S3-uploaded files |
| `GET` | `/api/datasets/file/:id` | — | **Download** file directly from S3 |
| `DELETE` | `/api/datasets/:id` | — | **Delete** from S3 + database |

### Reports

| Method | Endpoint | Body | Description |
|--------|----------|------|-------------|
| `GET` | `/api/reports` | — | List all reports |
| `POST` | `/api/reports` | `{ report_name, department }` | Create a report record |
| `POST` | `/api/reports/upload` | `{ report_name, department, content }` | Upload report text to S3 |

### Tasks

| Method | Endpoint | Body | Description |
|--------|----------|------|-------------|
| `GET` | `/api/tasks` | — | List all tasks |
| `POST` | `/api/tasks` | `{ title, assigned_to, status }` | Create a task |
| `PUT` | `/api/tasks/:id/status` | `{ status }` | Update status: `open/in-progress/completed` |

---

## 🖥️ Local Setup

### Prerequisites

- [Node.js 18+](https://nodejs.org/) & npm
- [MySQL 8.0](https://www.mysql.com/) or Docker
- [Docker & Docker Compose](https://www.docker.com/)
- AWS account (for S3 features)

### Step 1 — Clone the Repository

```bash
git clone https://github.com/your-username/DataLake_BigData_AWS_Project.git
cd DataLake_BigData_AWS_Project
```

### Step 2 — Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 3 — Configure Environment Variables

Create `backend/.env`:

```env
# Database
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=datalake
DB_PORT=3306

# Server
PORT=3000

# AWS
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
S3_BUCKET_NAME=your-s3-bucket-name
```

### Step 4 — Initialize the Database

```bash
# With a local MySQL server
mysql -u root -p < backend/db/schema.sql
```

> The server also auto-initializes tables on startup via `backend/db/init.js`.

### Step 5 — Start the Server

```bash
cd backend
npm start
# OR for development with auto-reload:
npm run dev
```

Open in browser: **[http://localhost:3000](http://localhost:3000)**

---

## 🐳 Docker Setup

### Run with Docker Compose (Recommended for Local Dev)

```bash
# Build and start both MySQL + Backend containers
docker compose up --build
```

This starts:
| Service | Container | Port |
|---------|-----------|------|
| MySQL 8.0 | `mysql-container` | `3307` (host) → `3306` (container) |
| Node.js Backend | `datalake-backend-container` | `3002` (host) → `3000` (container) |

Open: **[http://localhost:3002](http://localhost:3002)**

### Build Backend Image Only

```bash
cd backend
docker build -t datalake-backend .
```

### Environment for Docker Compose

Use these values in `backend/.env` when running via Docker Compose:

```env
DB_HOST=mysql
DB_USER=root
DB_PASSWORD=root
DB_NAME=datalake
DB_PORT=3306
PORT=3000
```

---

## ☁️ AWS Deployment

This project is architected to map cleanly to the following AWS services:

| AWS Service | Role in Project |
|-------------|----------------|
| **EC2** (t3.micro) | Hosts the Node.js Express application |
| **RDS MySQL 8.0** | Managed relational database (`datalake` DB) |
| **S3** | Stores uploaded datasets, reports, and backups |
| **VPC + Subnets** | Network isolation (CIDR `10.0.0.0/16`) |
| **Security Groups** | Firewall: allows SSH (22), HTTP (80), HTTPS (443) |
| **IAM** | Role-based access for admin, manager, analyst |
| **CloudWatch** | Monitors CPU, memory, disk usage with 60s intervals |
| **Route 53** | Optional DNS management |

### Quick Manual Deploy to EC2

```bash
# SSH into EC2
ssh -i datalake-key.pem ec2-user@<EC2_PUBLIC_IP>

# Install Docker
sudo yum update -y && sudo yum install docker -y
sudo service docker start

# Run the app
docker pull your-dockerhub-user/datalake-backend:latest
docker run -d -p 3000:3000 --env-file .env your-dockerhub-user/datalake-backend:latest
```

---

## 🏗️ Terraform Infrastructure

Terraform provisions all AWS infrastructure from code.

### What Terraform Creates

| Resource | Details |
|----------|---------|
| `aws_vpc` | VPC with CIDR `10.0.0.0/16` |
| `aws_subnet` | Public subnet in first available AZ |
| `aws_security_group` | Ports 22, 80, 443 open |
| `aws_instance` | EC2 `t3.micro` with public IP |
| `aws_s3_bucket` | Private S3 bucket for reports |
| `aws_db_instance` | RDS MySQL `db.t3.micro`, 20GB storage |

### Deploy Infrastructure

```bash
cd terraform

# Initialize providers
terraform init

# Preview changes
terraform plan

# Apply (creates all AWS resources)
terraform apply

# Destroy all resources when done
terraform destroy
```

### Key Variables (`terraform/variables.tf`)

```hcl
variable "aws_region"     { default = "us-east-1" }
variable "instance_type"  { default = "t3.micro" }
variable "s3_bucket_name" { default = "datalake-analytics-reports-bucket-unique" }
variable "db_username"    { default = "datalakeadmin" }
variable "db_name"        { default = "datalake" }
```

---

## ☸️ Kubernetes Deployment

Kubernetes manifests provide scalable, production-ready pod orchestration.

### Deploy to a Cluster

```bash
# Apply deployment (2 replicas)
kubectl apply -f k8s/deployment.yaml

# Apply service (exposes the app)
kubectl apply -f k8s/service.yaml

# Check status
kubectl get pods
kubectl get services
```

### What the Manifests Define

**`k8s/deployment.yaml`** — Deploys 2 replicas of `datalake-app:latest` on port `3000` with env vars for DB connection.

**`k8s/service.yaml`** — Exposes the deployment as a Kubernetes Service.

---

## 🔁 Jenkins CI/CD Pipeline

The `jenkins/Jenkinsfile` defines a **5-stage declarative pipeline**:

```
Checkout → Install → Test → Build Docker Image → Deploy
```

| Stage | Action |
|-------|--------|
| **Checkout** | Pulls source code from SCM (GitHub) |
| **Install** | Runs `npm install` in the `backend/` directory |
| **Test** | Placeholder for unit/integration tests |
| **Build Docker Image** | Builds `datalake-app:latest` Docker image |
| **Deploy** | Placeholder for EC2 SSH deploy or `kubectl apply` |

### How to Use

1. Install Jenkins on your server or use a hosted Jenkins instance
2. Create a new Pipeline job
3. Point it to this repository's `jenkins/Jenkinsfile`
4. Configure SCM credentials
5. Trigger a build — Jenkins will execute all stages automatically

---

## 📊 CloudWatch Monitoring

The `cloudwatch/amazon-cloudwatch-agent.json` configures the **Amazon CloudWatch Agent** on the EC2 instance to collect:

| Metric | Interval |
|--------|----------|
| `cpu_usage_idle` | Every 60 seconds |
| `cpu_usage_iowait` | Every 60 seconds |
| `mem_used_percent` | Every 60 seconds |
| `disk used_percent` (on `/`) | Every 60 seconds |

### Install & Start CloudWatch Agent on EC2

```bash
# Download agent
wget https://s3.amazonaws.com/amazoncloudwatch-agent/amazon_linux/amd64/latest/amazon-cloudwatch-agent.rpm
sudo rpm -U ./amazon-cloudwatch-agent.rpm

# Configure with our file
sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl \
  -a fetch-config -m ec2 -s \
  -c file:/path/to/cloudwatch/amazon-cloudwatch-agent.json
```

---

## 💾 Backup & Scripts

### `scripts/backup.sh` — MySQL Database Backup

Dumps the `datalake` database to `/tmp/datalake_backups/` with a timestamp:

```bash
# Set environment variables and run
export DB_HOST=localhost DB_USER=root DB_PASSWORD=secret DB_NAME=datalake
bash scripts/backup.sh
```

Output: `/tmp/datalake_backups/datalake_backup_2026-06-21_12-00-00.sql`

### `scripts/monitoring.sh` — System Health Monitor

Runs system health checks and logs the results for alerting.

---

## 🔐 Environment Variables

Complete reference for all environment variables:

| Variable | Description | Example |
|----------|-------------|---------|
| `DB_HOST` | MySQL host | `localhost` or `db` (Docker) |
| `DB_USER` | MySQL username | `root` |
| `DB_PASSWORD` | MySQL password | `your_password` |
| `DB_NAME` | Database name | `datalake` |
| `DB_PORT` | MySQL port | `3306` |
| `PORT` | Express server port | `3000` |
| `AWS_REGION` | AWS region | `us-east-1` |
| `AWS_ACCESS_KEY_ID` | AWS access key | `AKIA...` |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key | `...` |
| `S3_BUCKET_NAME` | S3 bucket for uploads | `my-datalake-bucket` |
| `DOCKER_RUNNING` | Override Docker status check | `true` |
| `RENDER` | Auto-set by Render.com | `true` |

> ⚠️ **Never commit `.env` to Git.** The `.gitignore` already excludes it.

---

## 🛡️ Security & IAM (RBAC)

### Role-Based Access Control

The system implements **3 user roles** mapped to AWS IAM concepts:

| Role | Description | Typical AWS IAM Policy |
|------|-------------|----------------------|
| **Admin** | Full access — manage users, datasets, reports, tasks | `AdministratorAccess` |
| **Manager** | Can approve datasets, create reports | `PowerUserAccess` |
| **Analyst** | Read-only dashboard access, can upload datasets | `ReadOnlyAccess` + `S3:PutObject` |

### Security Best Practices Implemented

- ✅ VPC isolates resources from public internet
- ✅ Security Groups restrict inbound traffic (only ports 22, 80, 443)
- ✅ RDS is in a private subnet (not publicly accessible in production)
- ✅ S3 bucket ACL set to `private`
- ✅ Environment variables used for all secrets (never hardcoded)
- ✅ `.gitignore` excludes `.env`, PEM keys, and node_modules
- ✅ Winston structured logging for audit trails
- ✅ Input validation on all POST/PUT endpoints

---

## 🎓 Viva / Interview Q&A

**Q: Why use EC2 instead of Lambda for the backend?**
> EC2 gives persistent, always-on hosting ideal for an Express.js server that handles database connections, file uploads, and long-running processes. Lambda is better for stateless, event-driven functions.

**Q: Why MySQL/RDS instead of DynamoDB?**
> The data model (users, departments, reports, tasks) is highly relational with foreign key relationships. MySQL on RDS gives ACID compliance, SQL querying, and managed backups — perfect for structured analytics metadata.

**Q: How does S3 fit into a Data Lake architecture?**
> S3 is the backbone of AWS data lakes. Raw data files (CSV, JSON, Parquet) are stored in S3 at low cost with infinite scale. AWS services like Glue, Athena, and EMR can then query and process data directly from S3.

**Q: What is the role of Terraform in this project?**
> Terraform implements Infrastructure as Code (IaC). It provisions the entire AWS environment (VPC, EC2, RDS, S3, Security Groups) reproducibly. Any team member can run `terraform apply` and get an identical infrastructure.

**Q: How does Docker help in this project?**
> Docker containers ensure the Node.js app runs identically in development, testing, and production — eliminating "works on my machine" problems. Docker Compose orchestrates the multi-container local dev environment (app + MySQL).

**Q: Why Jenkins for CI/CD?**
> Jenkins automates the pipeline: code push → install dependencies → run tests → build Docker image → deploy to EC2. This removes manual deployment steps and ensures every push is tested and built consistently.

**Q: How does CloudWatch monitor the application?**
> The CloudWatch Agent runs on the EC2 instance and ships CPU, memory, and disk usage metrics to AWS CloudWatch every 60 seconds. Alarms can be configured to trigger SNS notifications or Auto Scaling actions.

**Q: What is RBAC and how is it implemented?**
> Role-Based Access Control (RBAC) assigns permissions based on user roles (admin, manager, analyst). In this project, it's implemented at the database level (role column in users table) and can be enforced at the API layer via middleware.

**Q: Why use Kubernetes in addition to Docker Compose?**
> Docker Compose is for local development. Kubernetes provides production-grade features: auto-healing (restarts crashed pods), horizontal scaling (2+ replicas), rolling deployments (zero downtime), and load balancing across pods.

**Q: How does the S3 storage metric work on the dashboard?**
> The `/api/summary` endpoint calls `ListObjectsV2Command` on the S3 bucket, iterates over all objects, sums their `Size` fields in bytes, and returns the total. The frontend converts bytes to MB/GB for display.

---

## 🔮 Future Improvements

- [ ] Add JWT authentication with session management
- [ ] Add NGINX reverse proxy with SSL termination (Let's Encrypt)
- [ ] Implement AWS Glue + Athena for serverless SQL querying on S3 data
- [ ] Add Amazon EMR for Apache Spark big data processing
- [ ] Ship application logs from Winston to CloudWatch Logs
- [ ] Add CloudWatch Alarms with SNS email/SMS notifications
- [ ] Implement S3 lifecycle rules (move old files to Glacier)
- [ ] Add automated Jest unit tests for API routes
- [ ] Complete the Jenkins Deploy stage with real EC2 SSH or `kubectl` commands
- [ ] Add Prometheus + Grafana for custom dashboards
- [ ] Implement database migrations with a tool like Flyway or Liquibase
- [ ] Add frontend forms for all CRUD workflows (departments, tasks)
- [ ] Enable S3 bucket versioning for dataset history

---

## 👨‍💻 Author

**Rayan**
- 🌐 Live Project: [https://datalake-aws-project.onrender.com/](https://datalake-aws-project.onrender.com/)
- 📁 Repository: DataLake Big Data AWS Project

---

<div align="center">

**Built with ❤️ using Node.js · MySQL · AWS · Docker · Terraform · Kubernetes · Jenkins**

</div>
