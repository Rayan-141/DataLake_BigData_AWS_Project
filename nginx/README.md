# NGINX Reverse Proxy Example for DataLake Analytics Cloud Portal

This notes file describes a simple NGINX setup to proxy incoming HTTP traffic from port 80 to the Node.js app on port 3000.

## Why use NGINX?

- Provides a public web server on port `80`
- Can act as a reverse proxy to the backend
- Can serve static files and improve security
- Useful for AWS EC2 deployment with public access

## Example NGINX configuration

```nginx
server {
  listen 80;
  server_name _;

  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```

## Deploying on EC2

1. Install NGINX:
   ```bash
   sudo apt update
   sudo apt install nginx -y
   ```
2. Create or update `/etc/nginx/sites-available/default`
3. Test NGINX config:
   ```bash
   sudo nginx -t
   ```
4. Restart NGINX:
   ```bash
   sudo systemctl restart nginx
   ```

## Benefits for the project

- Realistic AWS web deployment setup
- Easier to explain public-facing app flow
- Supports HTTP traffic securely through EC2
