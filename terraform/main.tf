terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

resource "aws_vpc" "datalake_vpc" {
  cidr_block = "10.0.0.0/16"
  tags = { Name = "datalake-vpc" }
}

resource "aws_subnet" "public" {
  vpc_id            = aws_vpc.datalake_vpc.id
  cidr_block        = "10.0.1.0/24"
  availability_zone = data.aws_availability_zones.available.names[0]
  map_public_ip_on_launch = true
  tags = { Name = "datalake-public-subnet" }
}

resource "aws_security_group" "web_sg" {
  name        = "datalake-web-sg"
  description = "Allow SSH and HTTP access"
  vpc_id      = aws_vpc.datalake_vpc.id

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTPS"
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = { Name = "datalake-web-sg" }
}

resource "aws_instance" "app_server" {
  ami                         = var.aws_ami
  instance_type               = var.instance_type
  subnet_id                   = aws_subnet.public.id
  vpc_security_group_ids      = [aws_security_group.web_sg.id]
  associate_public_ip_address = true
  tags = { Name = "datalake-app-server" }
}

resource "aws_s3_bucket" "reports_bucket" {
  bucket = var.s3_bucket_name
  acl    = "private"
  tags = { Name = "datalake-reports-bucket" }
}

resource "aws_db_subnet_group" "db_subnet" {
  name       = "datalake-db-subnet"
  subnet_ids = [aws_subnet.public.id]
  tags = { Name = "datalake-db-subnet" }
}

resource "aws_db_instance" "mysql" {
  identifier              = "datalake-mysql-db"
  engine                  = "mysql"
  instance_class          = "db.t3.micro"
  allocated_storage       = 20
  username                = var.db_username
  password                = var.db_password
  db_name                 = var.db_name
  db_subnet_group_name    = aws_db_subnet_group.db_subnet.name
  skip_final_snapshot     = true
  publicly_accessible     = true
  vpc_security_group_ids  = [aws_security_group.web_sg.id]
  tags = { Name = "datalake-mysql" }
}

data "aws_availability_zones" "available" {}
