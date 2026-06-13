# Final Next Steps: Complete the Project Quickly

This is your final execution plan. Do these steps in order and finish the project fast.

## Step 1: Local app setup

You already have Node, npm, MySQL, Docker, and Git.

1. Open terminal in the project folder.
2. Go to backend:
   ```bash
   cd backend
   ```
3. Copy `.env.example` to `.env`.
4. Start MySQL and run schema:
   ```sql
   SOURCE backend/db/schema.sql;
   ```
5. Install dependencies:
   ```bash
   npm install
   ```
6. Start the backend:
   ```bash
   npm start
   ```
7. Open `http://localhost:3000` in your browser.

If everything works, continue.

## Step 2: Dockerize the app

1. From the project root run:
   ```bash
   docker build -t datalake-app ./backend
   ```
2. Run the container:
   ```bash
   docker run -p 3000:3000 --env-file backend/.env datalake-app
   ```
3. Confirm the app opens at `http://localhost:3000`.

If Docker works, continue.

## Step 3: Push code to GitHub

1. Initialize repo (if not done):
   ```bash
   git init
   git add .
   git commit -m "Initial DataLake Analytics Cloud Portal"
   ```
2. Create a GitHub repository.
3. Push code to GitHub:
   ```bash
   git remote add origin <repo-url>
   git branch -M main
   git push -u origin main
   ```

Now your source code is safe and ready for CI/CD.

## Step 4: Provision AWS infrastructure with Terraform

1. Go to Terraform folder:
   ```bash
   cd terraform
   ```
2. Initialize Terraform:
   ```bash
   terraform init
   ```
3. Review `variables.tf` and `variables.auto.tfvars`.
4. Apply Terraform:
   ```bash
   terraform apply
   ```
5. Save the output values: EC2 IP, S3 bucket, DB endpoint.

Now your AWS resources are created.

## Step 5: Deploy the app on EC2

1. SSH into EC2 with your key.
2. Install Docker or Node.js on the instance.
3. Clone the GitHub repo to EC2.
4. Create `.env` on EC2 and fill in RDS endpoint and S3 bucket name.
5. Start the app on EC2:
   - Node.js option:
     ```bash
     cd backend
     npm install
     npm start
     ```
   - Docker option:
     ```bash
     cd backend
     docker build -t datalake-app .
     docker run -p 3000:3000 --env-file .env datalake-app
     ```
6. Open the app using the EC2 public IP.

This makes your app live on AWS.

## Step 6: Configure CloudWatch monitoring

1. Install CloudWatch agent on EC2.
2. Upload `cloudwatch/amazon-cloudwatch-agent.json`.
3. Start the CloudWatch agent.
4. Create CloudWatch dashboard with CPU, memory, disk.
5. Create alarms for high CPU, memory, and disk.

This covers monitoring requirements.

## Step 7: Add backup automation and Linux tasks

1. Copy `scripts/backup.sh` and `scripts/monitoring.sh` to EC2.
2. Make them executable:
   ```bash
   chmod +x scripts/backup.sh scripts/monitoring.sh
   ```
3. Run backup once:
   ```bash
   ./scripts/backup.sh
   ```
4. Add daily cron job:
   ```bash
   crontab -e
   ```
   Add:
   ```cron
   0 2 * * * /home/ec2-user/datalake/scripts/backup.sh
   ```
5. Run monitoring script:
   ```bash
   ./scripts/monitoring.sh
   ```

Now you have automation and Linux admin proof.

## Step 8: Set up Jenkins CI/CD

1. Install Jenkins or use an existing Jenkins.
2. Add your GitHub repo to Jenkins.
3. Create a pipeline job using `jenkins/Jenkinsfile`.
4. Run the pipeline.
5. Confirm stages:
   - checkout
   - install dependencies
   - build Docker image
   - deploy placeholder

This shows CI/CD automation.

## Step 9: Optional Kubernetes deployment (only if time remains)

1. Apply manifests:
   ```bash
   kubectl apply -f k8s/deployment.yaml
   kubectl apply -f k8s/service.yaml
   ```
2. Verify pods and service.

If you do this, mention it as an optional container orchestration step.

## Step 10: Finalize documentation and submission

1. Create architecture diagram from `ARCHITECTURE_DIAGRAM.md`.
2. Use notes from `PROJECT_SUMMARY.md`, `AWS_MONITORING_NOTES.md`, and `RBAC_NOTES.md`.
3. Save screenshots:
   - app UI
   - Terraform apply
   - EC2 running
   - CloudWatch dashboard
   - Jenkins pipeline
4. Update `README.md` if needed.

## Final order to complete fast

1. Local app
2. Docker
3. GitHub
4. Terraform
5. EC2 deployment
6. CloudWatch
7. Backup automation
8. Jenkins
9. (Optional) Kubernetes
10. Documentation

## Quick command list

```bash
cd backend
npm install
npm start

docker build -t datalake-app ./backend

docker run -p 3000:3000 --env-file backend/.env datalake-app

git add .
git commit -m "Initial project"
git push origin main

cd terraform
terraform init
terraform apply
```

Follow these steps exactly. Do one step fully, then move to the next. This is the final plan.
