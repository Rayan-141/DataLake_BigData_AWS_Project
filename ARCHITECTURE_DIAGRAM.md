# Architecture Diagram Outline for DataLake Analytics Cloud Portal

Use this outline to create the final architecture diagram.

## Components

1. Users
   - Admin
   - Manager
   - Analyst
2. Internet
3. AWS Route53 (optional)
4. EC2 instance / NGINX
5. Node.js App
6. MySQL Database (RDS)
7. S3 Bucket
8. VPC / Subnet / Security Groups
9. CloudWatch Monitoring
10. Jenkins (CI/CD)
11. Docker & Kubernetes (optional)

## Flow

- Users access the portal via browser.
- Request enters through public IP or Route53.
- NGINX reverse proxy forwards requests to Node.js backend.
- Node.js app reads/writes app data from MySQL.
- Reports and backups are stored to S3.
- CloudWatch collects EC2 metrics and logs.
- Terraform deploys infrastructure.
- Jenkins automates build and deploy.
- Kubernetes provides container orchestration if used.

## Diagram notes

- Show VPC boundaries and public subnet.
- Label Security Group allowing SSH, HTTP, HTTPS.
- Show RDS instance inside the same VPC.
- Show S3 outside VPC as storage service.
- Show CloudWatch as monitoring service.
- Show Jenkins as external CI/CD tool.
