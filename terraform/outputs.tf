output "app_server_public_ip" {
  description = "Public IP of the EC2 app server"
  value       = aws_instance.app_server.public_ip
}

output "s3_bucket_name" {
  description = "S3 bucket created for reports"
  value       = aws_s3_bucket.reports_bucket.bucket
}

output "db_endpoint" {
  description = "MySQL database endpoint"
  value       = aws_db_instance.mysql.endpoint
}
