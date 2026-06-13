# AWS Infrastructure Notes for DataLake Analytics Cloud Portal

## Goal
Deploy a simple AWS-first application architecture that demonstrates:

- EC2 compute
- MySQL / RDS database
- S3 storage
- VPC networking
- Security groups
- CloudWatch monitoring
- Docker deployment
- Terraform infrastructure automation
- Jenkins CI/CD flow
- Kubernetes container orchestration (optional)

## AWS architecture overview

1. User requests enter via public IP or load balancer.
2. EC2 instance runs Node.js backend and serves frontend.
3. MySQL database runs in RDS (or EC2) and stores application data.
4. S3 bucket stores reports, exports, and backups.
5. Security Group opens SSH/HTTP/HTTPS.
6. CloudWatch collects metrics and logs from EC2.

## Terraform files

- `terraform/main.tf` defines VPC, subnet, security group, EC2 instance, S3 bucket, and MySQL DB instance.
- `terraform/variables.tf` defines reusable AWS settings.
- `terraform/outputs.tf` returns EC2 IP, S3 bucket name, and DB endpoint.

## Jenkins pipeline

- `jenkins/Jenkinsfile` checks out repo, installs dependencies, builds Docker image, and includes a deploy placeholder.
- Use Jenkins to automate build and deploy tasks.

## Kubernetes manifests

- `k8s/deployment.yaml` deploys two replicas of the app container.
- `k8s/service.yaml` exposes the deployment using a LoadBalancer.

## What to explain in viva

- Why VPC: isolate the network and control traffic.
- Why Security Group: allow only required ports.
- Why EC2: application runtime.
- Why RDS/MySQL: managed database for app data.
- Why S3: object storage for reports and backups.
- Why CloudWatch: monitor CPU, memory, and logs.
- Why Terraform: repeatable infrastructure.
- Why Jenkins: CI/CD automation.
- Why Kubernetes: scaling and self-healing.

## Commands for AWS infrastructure tasks

- `terraform init` - initialize provider plugins.
- `terraform plan` - preview infrastructure changes.
- `terraform apply` - create AWS resources.
- `docker build -t datalake-app ./backend` - build app image.
- `docker run -p 3000:3000 --env-file backend/.env datalake-app` - run locally.
- `kubectl apply -f k8s/deployment.yaml` - deploy container to Kubernetes.
- `kubectl apply -f k8s/service.yaml` - expose Kubernetes service.

## Notes on AWS-only priority

Keep most implementation on AWS first.
Use GCP only when asked or for an additional comparison example.
For evaluation, present AWS architecture as the main cloud platform.

## Simple deployment plan

1. Build and test app locally.
2. Dockerize backend.
3. Provision AWS infrastructure with Terraform.
4. Deploy app on EC2 / container.
5. Add monitoring and backup scripts.
6. Prepare architecture and viva notes.
