# Terraform Setup for DataLake Analytics Cloud Portal

This folder contains starter Terraform configuration for AWS.

## Files

- `main.tf` - AWS resources: VPC, subnet, security group, EC2 instance, S3 bucket, RDS MySQL.
- `variables.tf` - input variables such as region, AMI, bucket name, and DB credentials.
- `outputs.tf` - outputs for EC2 public IP, S3 bucket name, and DB endpoint.

## Usage

1. Install Terraform.
2. Open folder:
   ```bash
   cd /Users/apple/Desktop/DataLake_BigData_AWS_Project/terraform
   ```
3. Initialize:
   ```bash
   terraform init
   ```
4. Preview:
   ```bash
   terraform plan
   ```
5. Apply:
   ```bash
   terraform apply
   ```

## Notes

- Replace `var.aws_ami` with a valid regional Amazon Linux 2 AMI if needed.
- Use unique bucket names for S3.
- Use secure DB credentials in production.
- For AWS exam/viva, explain that Terraform is Infrastructure as Code (IaC).
