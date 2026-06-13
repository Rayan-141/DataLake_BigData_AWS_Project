#!/bin/bash

# Simple Linux monitoring script for DataLake Analytics Cloud Portal
DATE=$(date +"%Y-%m-%d_%H:%M:%S")
CPU=$(top -bn1 | grep "Cpu(s)" | awk '{print $2 + $4}')
MEMORY=$(free -m | awk 'NR==2{printf "%s/%sMB (%.2f%%)", $3,$2,$3*100/$2 }')
DISK=$(df -h / | awk 'NR==2 {print $3 "/" $2 " (" $5 ")"}')

cat <<EOF
Monitoring snapshot: $DATE
CPU usage: $CPU%
Memory usage: $MEMORY
Disk usage: $DISK
EOF
