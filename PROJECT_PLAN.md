# Project Plan: DataLake Analytics Cloud Portal

## Phase 1: Design

- Define project scope: AWS-focused DataLake Analytics portal
- Finalize features: users, departments, datasets, reports, tasks, monitoring
- Choose tech stack: Node.js backend, MySQL, simple HTML/CSS frontend
- Prepare architecture diagram and AWS service mapping

## Phase 2: Development

- Build backend APIs in `backend/`
- Build frontend dashboard in `frontend/`
- Build MySQL schema in `backend/db/schema.sql`
- Create Dockerfile for app container
- Add local docker-compose for quick testing

## Phase 3: Infrastructure

- Create Terraform config for VPC, EC2, S3, MySQL RDS
- Add security group rules for SSH, HTTP, HTTPS
- Add CloudWatch agent config for monitoring
- Add NGINX notes for reverse proxy flow

## Phase 4: DevOps

- Add Jenkins pipeline in `jenkins/Jenkinsfile`
- Add Kubernetes manifests in `k8s/`
- Add backup and monitoring shell scripts in `scripts/`
- Add S3 storage notes in `s3/`

## Phase 5: Documentation

- Add README files for backend and terraform
- Add architecture, monitoring, RBAC notes
- Add project summary and plan
- Prepare viva notes for AWS and project features

## Phase 6: Deployment and Testing

- Run local app and test API endpoints
- Build Docker image and test container
- Use Terraform to provision AWS resources (if AWS account available)
- Configure CloudWatch metrics and alarms
- Demonstrate backup script and monitoring script
- Prepare screenshots and deployment flow notes

## Key deliverables

- Working web portal
- Source code repository
- Dockerfile and Docker image
- Terraform infrastructure scripts
- Jenkins CI/CD pipeline sample
- Kubernetes deployment files
- Monitoring and logging notes
- Backup automation script
- Architecture and deployment documentation
- Viva preparation notes
