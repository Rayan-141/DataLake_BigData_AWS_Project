# AWS Monitoring Notes for DataLake Analytics Cloud Portal

## CloudWatch components

- CloudWatch Metrics
  - CPUUtilization
  - NetworkIn
  - NetworkOut
  - DiskReadOps / DiskWriteOps
  - Memory usage via CloudWatch Agent
- CloudWatch Logs
  - Application logs from Node.js
  - System logs from EC2
- CloudWatch Alarms
  - Trigger when CPU > 80%
  - Trigger when memory usage high
  - Trigger when disk usage > 90%

## Why CloudWatch?

- Provides visibility into AWS resource health.
- Helps identify performance issues quickly.
- Supports alarms, dashboards, and notifications.

## Deployment approach

1. Install CloudWatch Agent on EC2.
2. Configure `amazon-cloudwatch-agent.json` to collect CPU, memory, disk.
3. Enable CloudWatch Logs for the Node.js app.
4. Create dashboards showing CPU, memory, and disk metrics.
5. Create alarms for critical thresholds.

## Example CloudWatch alarm use cases

- `CPUUtilization > 80% for 5 minutes`
- `MemoryUtilization > 75% for 5 minutes`
- `DiskSpaceUtilization > 90%`

## AWS narrative for viva

- "I used CloudWatch to monitor the EC2 application server and database performance."
- "CloudWatch Alarms notify the team before service issues become critical."
- "This is important for production readiness and operational monitoring."
