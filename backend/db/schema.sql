-- Database schema for DataLake Analytics Cloud Portal
CREATE DATABASE IF NOT EXISTS datalake;
USE datalake;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  role ENUM('admin', 'manager', 'analyst') DEFAULT 'analyst'
);

CREATE TABLE IF NOT EXISTS departments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(100) NOT NULL,
  manager VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS datasets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  dataset_name VARCHAR(150) NOT NULL,
  department VARCHAR(100) NOT NULL,
  size_mb INT NOT NULL DEFAULT 0,
  status ENUM('pending', 'approved', 'rejected') DEFAULT 'pending'
);

CREATE TABLE IF NOT EXISTS reports (
  id INT AUTO_INCREMENT PRIMARY KEY,
  report_name VARCHAR(150) NOT NULL,
  department VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  assigned_to VARCHAR(100) NOT NULL,
  status ENUM('open', 'in-progress', 'completed') DEFAULT 'open'
);
