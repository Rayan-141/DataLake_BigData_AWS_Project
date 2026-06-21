<div align="center">

<!-- FAVICON / LOGO -->
<img src="https://raw.githubusercontent.com/Rayan-141/DataLake_BigData_AWS_Project/main/frontend/favicon.svg" alt="DataLake Cloud Platform Logo" width="100" height="100"/>

<br/>

# DataLake Big Data Analytics Cloud Portal

### A Full-Stack AWS Big Data Platform with Real-Time Dashboard, S3 Integration & DevOps Automation

<br/>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Render-46E3B7?style=for-the-badge)](https://datalake-aws-project.onrender.com/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![AWS](https://img.shields.io/badge/AWS-Cloud-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)](https://aws.amazon.com/)
[![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![Terraform](https://img.shields.io/badge/Terraform-IaC-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)](https://www.terraform.io/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Orchestration-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)](https://kubernetes.io/)
[![Jenkins](https://img.shields.io/badge/Jenkins-CI%2FCD-D24939?style=for-the-badge&logo=jenkins&logoColor=white)](https://www.jenkins.io/)

<br/>

---

**Author:** Rayan Rawat &nbsp;·&nbsp; **Roll No:** 150096724141 &nbsp;·&nbsp; **Cohort:** Mark Zuckerberg

**Subject:** AWS &nbsp;·&nbsp; **GitHub:** [Rayan-141](https://github.com/Rayan-141) &nbsp;·&nbsp; **Live Link:** [datalake-aws-project.onrender.com](https://datalake-aws-project.onrender.com/)

---

</div>

## 📖 Table of Contents

- [Problem Statement](#-problem-statement)
- [Existing System & Problems](#-existing-system--problems)
- [Proposed Solution](#-proposed-solution)
- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Architecture Diagram](#-architecture-diagram)
- [AWS Services Used](#-aws-services-used)
- [Problem → Solution Flow](#-problem--solution-flow)
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
- [Limitations](#-limitations)
- [Conclusion](#-conclusion)

---

## ❗ Problem Statement

> **Industry:** Big Data & Analytics Platform  
> **Case Study:** 114 — DataLake Big Data Analytics Cloud

The **DataLake Big Data Analytics Cloud** project addresses the critical challenges faced by organizations that still manage datasets using **traditional local systems**.

The existing system relies on:
- 🗂️ Local file storage (prone to data loss)
- 📊 Manual data management via spreadsheets
- 🚫 No centralized dashboard or monitoring
- 🔓 Weak security with no cloud access control

Organizations require a **centralized cloud platform** that provides secure file storage, centralized data management, infrastructure monitoring, user access control, alerts, and a web-based dashboard accessible from **anywhere in the world**.

---

## 🔴 Existing System & Problems

### How the Old System Worked

| Area | Problem |
|------|---------|
| **File Storage** | Files stored on local computers — lost if the computer crashes |
| **Dashboard** | No centralized dashboard — administrators cannot manage everything from one place |
| **Monitoring** | CPU, Memory, Disk, and Network usage cannot be monitored |
| **Alerts** | No alert system — administrators are not notified when server resources spike |
| **Security** | Limited security — no centralized user and permission management |
| **Dataset Management** | Uploading, downloading, and managing datasets is manual and difficult |
| **Accessibility** | Application cannot be accessed remotely |
| **Deployment** | Deploying the application requires manual setup on every machine |
| **Database** | Local database with no centralized cloud storage |
| **Data Sharing** | Done manually without version control |

---

## ✅ Proposed Solution

The proposed solution is to build a **centralized DataLake Big Data Analytics Cloud Platform** using AWS services and a web-based dashboard. The platform securely stores datasets, monitors infrastructure, manages users, and provides centralized access through a live cloud application.

### Solution Highlights

| AWS Service / Tool | Role |
|--------------------|------|
| **Amazon S3** | Secure cloud storage for uploaded datasets |
| **AWS IAM** | Secure access and permission management |
| **MySQL** | Centralized database for users, reports, and dataset metadata |
| **Amazon CloudWatch** | Infrastructure monitoring (CPU, Memory, Disk, Network) |
| **CloudWatch Alarms** | Detects high resource usage and generates alerts |
| **Amazon SNS** | Sends alert notifications to administrators |
| **Docker** | Containerized application deployment |
| **GitHub** | Source code management and version control |
| **Render** | Live cloud hosting for the web application |
| **Web Dashboard** | Centralized management for datasets, monitoring, reports, users, and infrastructure |

### Before vs After

| Previously (Existing System) | Now (Proposed Solution) |
|------------------------------|------------------------|
| Files stored on local desktops | Files are securely stored in **Amazon S3** |
| Application depended on a single local system | Application hosted on **cloud server (EC2 / Render)** |
| No centralized dashboard | **Web Dashboard** manages datasets and monitoring from one place |
| No monitoring of server resources | **CloudWatch** monitors CPU, Memory, Disk, and Network usage |
| No alert system | **CloudWatch Alarms** generate alerts for resource issues |
| Admins not notified about problems | **Amazon SNS** sends alert notifications to administrators |
| No secure cloud access | **AWS IAM** provides secure user access and permissions |
| Dataset info difficult to manage | **MySQL Database** stores dataset details and application data |
| Manual and time-consuming deployment | **Docker** simplifies application deployment |
| Cannot be accessed remotely | **Render** hosts the app with a live public URL |

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

## 🏗️ Architecture Diagram

<div align="center">

![AWS DataLake Architecture](https://raw.githubusercontent.com/Rayan-141/DataLake_BigData_AWS_Project/main/AWS%20DataLake%20Big%20Data-2026-06-21-071156.png)

</div>

### Interactive Mermaid Diagrams

- 🔗 [Architecture Diagram 1 (Mermaid)](https://mermaid.ai/d/3b3f2a37-0cfb-4de0-83a2-3f4ae8b5688d)
- 🔗 [Architecture Diagram 2 (Mermaid Live)](https://mermaid.live/edit#pako:eNrVWuty4jgWfhWVu2Y6XQtpzCUQkkmVsc3ADpAsJkn1NvtDGBE0MZZXlpPQt9qHmCeYR9sn2SMZG5tA72wNVLF0VQcdy0fSuXw650s-ay6bEq2pFYvFsS-o8EgTjTXj3kEWFriHHwn6979-Qy36oATI8LG3FNQNkemxaIpOnGUoyAIZ3J1TQVwRcfJurI19pXDmsWd3jrlAI2vsj_0ffkA__YmPUuDY5qh7PUC62phxc9PrmoaSGEOz0x3B49uhvYe1wmjywHEwl2t8HGuXU_qEQrH0yE9vZ8wXxZB-Is1yKXi5UMNnQh_motkolS4EeRFF7NEHv-kSXxB-scD8gfrFCROCLZq6fOntlREEHnWxoMzP2e_yPSx1Ndb-MfYRfKaUg1xOGrWkEaXMsPrdwcnOXem1jV3V_8CuqvGmpgvq01BwLBiPd7JjjTLMf63TZR7jzTfVeq12dg76egyWQFFI_Qd0TyaoxdlzSHh6xnfJkTrXzujkAAcaEn9K-CpcOywUsJN9nIs-EXQ77DXRJb2aQmp4kCtF_BwWA85-BYedMp-rpU9dtrh8T6-SI6cnbg-vByN7YB3CjW0Or8HyezhpZ9TvQa7)

### Text Architecture Overview

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
                    │   NGINX     │  Reverse Proxy (Port 80 → 3000)
                    └──────┬──────┘
                           │
              ┌────────────▼─────────────┐
              │      AWS EC2 Instance    │
              │   (t3.micro, us-east-1)  │
              │   Elastic IP: 44.208.74  │
              │  ┌────────────────────┐  │
              │  │  Node.js Express   │  │  Port 3000
              │  │  (Backend + API)   │  │
              │  └────────┬───────────┘  │
              └───────────┼──────────────┘
                          │
           ┌──────────────┼───────────────────┐
           │              │                   │
    ┌──────▼──────┐ ┌─────▼──────┐  ┌────────▼──────┐
    │  MySQL RDS  │ │  AWS S3    │  │  CloudWatch    │
    │  (datalake) │ │  Bucket    │  │  + Alarms      │
    │  Users      │ │  Datasets  │  │  CPU/Mem/Disk  │
    │  Reports    │ │  Reports   │  │       │        │
    │  Tasks      │ │  Backups   │  │  ┌────▼────┐   │
    └─────────────┘ └────────────┘  │  │  SNS    │   │
                                    │  │ Alerts  │   │
                                    │  └─────────┘   │
                                    └────────────────┘
```

---

## ☁️ AWS Services Used

### 1. Amazon EC2 (Elastic Compute Cloud)
- **Why Used?** To host the application on a cloud server
- **Where Used?** Backend server
- **Purpose:** Runs the Node.js application in the cloud instead of a local machine

### 2. Amazon S3 (Simple Storage Service)
- **Why Used?** To store uploaded datasets securely
- **Where Used?** Dataset Upload section
- **Purpose:** Keeps files safe, scalable, and easily accessible from anywhere

### 3. AWS IAM (Identity & Access Management)
- **Why Used?** To secure AWS resources
- **Where Used?** AWS Account-level access control
- **Purpose:** Controls who can access AWS services and what actions they can perform

### 4. Amazon CloudWatch
- **Why Used?** To monitor infrastructure health
- **Where Used?** Monitoring Dashboard
- **Purpose:** Shows server metrics including CPU Usage, Memory Usage, Disk Usage, Network Usage

### 5. Amazon CloudWatch Alarms
- **Why Used?** To detect abnormal resource usage and trigger alerts
- **Where Used?** Monitoring & Alerting System
- **Purpose:** Displays alerts when CPU, Memory, Disk, or Network usage becomes high

### 6. Amazon SNS (Simple Notification Service)
- **Why Used?** To send alert notifications to administrators
- **Where Used?** Alert Notification System
- **Purpose:** Delivers Email Notifications, SMS Notifications, and Administrator Alerts

---

## 🔄 Problem → Solution Flow

```
  Local File Storage        ──►   Amazon S3 Storage
  No Monitoring             ──►   CloudWatch Monitoring
  No Alerts                 ──►   CloudWatch Alarms
  No Notifications          ──►   Amazon SNS
  No Secure Access          ──►   AWS IAM
  No Central Dashboard      ──►   Web Dashboard
  Manual Deployment         ──►   Docker + Render
  Scattered Data            ──►   MySQL Database
```

---

## ✨ Features

### 🖥️ Dashboard
- **Real-time KPI Cards** — Total Users, Datasets, Storage (live from S3), Reports
- **Live Activity Feed** — Recent uploads, logins, and system events
- **Infrastructure Status Panel** — Docker, Jenkins, Kubernetes, Prometheus, Grafana — all live
- **Website Monitoring** — Dynamic live metrics (response time, uptime, requests/sec, error rate)

### 📁 Dataset Management
- Upload datasets (CSV, Excel, JSON, etc.) directly to **AWS S3**
- List all uploaded files with filename, upload date, and S3 key
- **Download** files directly from S3 via the browser
- **Delete** files from both S3 and the database simultaneously

### 👥 User Management
- Create, list, and manage users with roles: `admin`, `manager`, `analyst`
- Role-based access control (RBAC) baked into the API

### 📋 Reports
- Create and list reports per department
- Upload reports directly to S3 with auto-generated timestamped keys

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
| **Notifications** | Amazon SNS |
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
├── 📄 AWS DataLake Big Data-2026-06-21-071156.png   # Architecture Diagram
├── 📄 DataLake Big Data Analytics Cloud Infrastructure Documentation - Rayan.pdf
├── 📄 DataLake Big Data Analytics Cloud Infrastructure Documentation - Rayan.docx
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
| `GET` | `/api/summary` | Dashboard totals (users, datasets, live S3 storage, reports) |
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
git clone https://github.com/Rayan-141/DataLake_BigData_AWS_Project.git
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
| **SNS** | Sends email/SMS alert notifications |
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

**`k8s/deployment.yaml`** — Deploys **2 replicas** of `datalake-app:latest` on port `3000` with environment variables for DB connection.

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

## ⚠️ Limitations

- Uses **MySQL** instead of Amazon RDS (for local dev)
- **CloudWatch metrics** are simulated for demonstration purposes
- **CloudWatch Alarms** and **Amazon SNS** are implemented as project concepts, not full real-time integration
- Does not include **Auto Scaling** or a **Load Balancer**
- Supports a **single-region deployment** only
- Advanced enterprise security features are not implemented

---



## 📝 Conclusion

The **DataLake Big Data Analytics Cloud** project provides a **secure and centralized cloud platform** for managing datasets at scale. It uses:

- **Amazon S3** for scalable, secure file storage
- **AWS IAM** for role-based security
- **CloudWatch** for infrastructure monitoring
- **CloudWatch Alarms and Amazon SNS** for alerting concepts
- **Docker and Render** for containerized, live deployment
- **MySQL** for centralized structured data management

The project successfully improves **data storage, monitoring, security, and accessibility** compared to the existing local system, while providing a strong foundation for future cloud enhancements with services like AWS Glue, Athena, EMR, and Auto Scaling.

---

<div align="center">

---

**Author:** Rayan Rawat &nbsp;·&nbsp; **Roll No:** 150096724141 &nbsp;·&nbsp; **Cohort:** Mark Zuckerberg

**Subject:** AWS &nbsp;·&nbsp; **GitHub:** [Rayan-141](https://github.com/Rayan-141) &nbsp;·&nbsp; **Live:** [datalake-aws-project.onrender.com](https://datalake-aws-project.onrender.com/)


</div>
