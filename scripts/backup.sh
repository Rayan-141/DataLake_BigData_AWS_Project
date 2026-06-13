#!/bin/bash

# Simple MySQL backup script for DataLake Analytics Cloud Portal
BACKUP_DIR="/tmp/datalake_backups"
DATE=$(date +"%Y-%m-%d_%H-%M-%S")

mkdir -p "$BACKUP_DIR"

mysqldump -h "$DB_HOST" -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" > "$BACKUP_DIR/datalake_backup_$DATE.sql"

if [ $? -eq 0 ]; then
  echo "Backup completed: $BACKUP_DIR/datalake_backup_$DATE.sql"
else
  echo "Backup failed"
  exit 1
fi
