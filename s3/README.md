# AWS S3 Usage Notes for DataLake Analytics Cloud Portal

## Purpose

Use Amazon S3 to store report files, exports, screenshots, and backup artifacts.

## Why S3?

- Durable object storage
- Easy to integrate with AWS apps
- Good for storing reports and analytics assets
- Supports cost-effective backup and archive

## How to use in the project

- Create the S3 bucket in Terraform: `aws_s3_bucket.reports_bucket`
- Use the bucket for saving exported reports or CSV downloads
- Use AWS CLI or SDK to upload files from EC2

## Example AWS CLI commands

```bash
aws s3 cp report.csv s3://datalake-analytics-reports-bucket-unique/reports/
aws s3 ls s3://datalake-analytics-reports-bucket-unique/reports/
```

## Project explanation

In this portal, S3 is a storage backend for report files and backups. It demonstrates AWS storage service usage and helps separate database data from file storage.
