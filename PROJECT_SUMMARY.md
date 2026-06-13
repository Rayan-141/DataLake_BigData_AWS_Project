# Project Summary: DataLake Analytics Cloud Portal

## Project goal
Build a simple AWS-focused cloud portal for DataLake Analytics that demonstrates:
- Web application deployment
- Database-backed reporting
- Role-based user management
- Monitoring and logging
- Infrastructure automation
- AWS cloud concepts

## Core features

- Admin dashboard
- Dataset management
- Department management
- Report management
- Task and workflow tracking
- Analytics summary metrics

## AWS services covered

- EC2: application hosting
- RDS/MySQL: relational database
- S3: report and backup storage
- VPC: network isolation
- Security Groups: inbound/outbound access control
- IAM: role and policy discussion
- CloudWatch: monitoring and alarms
- Route53 (optional): DNS

## DevOps components

- Dockerfile for containerization
- docker-compose for local stack
- Jenkins pipeline for CI/CD
- Terraform for infrastructure as code
- Kubernetes manifests for container orchestration
- Backup and monitoring shell scripts

## Database schema

- `users`: store user name, email, role
- `departments`: store department and manager
- `datasets`: store dataset name, department, size, status
- `reports`: store report name, department, timestamp
- `tasks`: store task title, assignee, status

## How to run locally

1. Install dependencies in `backend`
2. Create `backend/.env`
3. Initialize MySQL schema using `backend/db/schema.sql`
4. Start the backend with `npm start`
5. Open `http://localhost:3000`

## Why this project is strong for Case Study 114

- Directly matches DataLake Analytics Cloud requirements
- Uses AWS services for compute, storage, networking, monitoring
- Simple yet functional app with analytics dashboards
- Includes DevOps automation artifacts
- Easy to explain and present

## Viva points

- Explain the EC2 + NGINX + Node.js application flow
- Explain the RDS/MySQL backend and why relational DB is used
- Explain S3 usage for report and backup storage
- Explain CloudWatch metrics and alarms
- Explain Terraform benefits and repeatable infrastructure
- Explain Jenkins as CI/CD automation
- Explain Docker as a container packaging solution
- Explain basic RBAC and user role permissions
