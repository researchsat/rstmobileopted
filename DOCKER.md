# Docker Deployment Guide with Ubuntu

This guide explains how to build and deploy the ResearchSat website using Docker with Ubuntu as the base OS.

## Prerequisites

- Docker and Docker Compose installed on your development machine
- Docker and Docker Compose installed on your Ubuntu VPS
- SSH access to your VPS

## About This Setup

This deployment uses:
- Ubuntu 22.04 as the base OS for the production container
- Nginx as the web server
- Multi-stage build process to optimize the final image size

## Local Development with Docker

To build and run the application locally:

```bash
# Build the Docker image
docker-compose build

# Run the container
docker-compose up
```

The application will be available at http://localhost:80.

## Building for Production

When building for a different CPU architecture (e.g., building on Mac M1 for an AMD64 VPS):

```bash
# Build for AMD64 architecture
docker build --platform=linux/amd64 -t researchsat-website:latest .
```

## Deploying to VPS

### Manual Deployment

1. Build the Docker image for AMD64 architecture:
   ```bash
   docker build --platform=linux/amd64 -t researchsat-website:latest .
   ```

2. Save the Docker image to a tar file:
   ```bash
   docker save researchsat-website:latest | gzip > researchsat-website.tar.gz
   ```

3. Copy the Docker image and configuration files to your VPS:
   ```bash
   scp researchsat-website.tar.gz docker-compose.yml nginx.conf start.sh username@your-vps-ip:/opt/researchsat/
   ```

4. SSH into your VPS and load the Docker image:
   ```bash
   ssh username@your-vps-ip
   cd /opt/researchsat
   gunzip -c researchsat-website.tar.gz | docker load
   ```

5. Start the container using Docker Compose:
   ```bash
   docker-compose up -d
   ```

6. Verify the container is running:
   ```bash
   docker-compose ps
   ```

### Automated Deployment

Use the provided deployment script:

1. Edit the `deploy.sh` script to update the VPS username, IP address, and remote directory.

2. Run the deployment script:
   ```bash
   ./deploy.sh
   ```

## Troubleshooting

- If you encounter permission issues, make sure the deployment script is executable:
  ```bash
  chmod +x deploy.sh
  ```

- If the Docker image is too large, you can further optimize the Dockerfile by removing unnecessary packages.

- If you need to check the logs on the VPS:
  ```bash
  docker-compose logs -f
  ```

- To access the container shell for debugging:
  ```bash
  docker-compose exec web bash
  ```

- If Nginx fails to start, check the configuration:
  ```bash
  docker-compose exec web nginx -t
  ```
