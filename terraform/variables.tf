variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

variable "aws_ami" {
  description = "AMI ID for EC2 instance"
  type        = string
  default     = "ami-0c02fb55956c7d316"
}

variable "instance_type" {
  description = "EC2 instance type"
  type        = string
  default     = "t3.micro"
}

variable "s3_bucket_name" {
  description = "S3 bucket name for reports"
  type        = string
  default     = "datalake-analytics-reports-bucket-unique"
}

variable "db_username" {
  description = "Database username"
  type        = string
  default     = "datalakeadmin"
}

variable "db_password" {
  description = "Database password"
  type        = string
  default     = "DatalakePass123!"
}

variable "db_name" {
  description = "Database name"
  type        = string
  default     = "datalake"
}
