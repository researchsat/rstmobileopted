#!/bin/bash

# Exit on error
set -e

# Configuration
IMAGE_NAME="researchsat-website"
IMAGE_TAG="latest"
REMOTE_USER="root"
REMOTE_HOST="194.238.16.55"
REMOTE_DIR="/opt/researchsat"

# Prompt for password
read -sp "Enter SSH password for ${REMOTE_USER}@${REMOTE_HOST}: " SSH_PASSWORD
echo

# Check if sshpass is installed
if ! command -v sshpass &> /dev/null; then
    echo "sshpass is not installed. Please install it first."
    echo "On macOS: brew install hudochenkov/sshpass/sshpass"
    echo "On Ubuntu: apt-get install sshpass"
    exit 1
fi

# Build the Docker image for AMD64 architecture (Ubuntu VPS)
echo "Building Docker image for AMD64 architecture..."
docker build --platform=linux/amd64 -t ${IMAGE_NAME}:${IMAGE_TAG} .

# Save the Docker image to a tar file
echo "Saving Docker image to a tar file..."
docker save ${IMAGE_NAME}:${IMAGE_TAG} | gzip > ${IMAGE_NAME}.tar.gz

# Create the remote directory if it doesn't exist
echo "Creating remote directory..."
sshpass -p "$SSH_PASSWORD" ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} "mkdir -p ${REMOTE_DIR}"

# Copy the Docker image and configuration files to the VPS
echo "Copying files to VPS..."
sshpass -p "$SSH_PASSWORD" scp -o StrictHostKeyChecking=no ${IMAGE_NAME}.tar.gz docker-compose.yml nginx.conf start.sh ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DIR}/

# Check if Docker is installed on the remote server
echo "Checking if Docker is installed on the remote server..."
if ! sshpass -p "$SSH_PASSWORD" ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} "command -v docker &> /dev/null"; then
    echo "Docker is not installed on the remote server. Installing Docker..."
    sshpass -p "$SSH_PASSWORD" ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} "apt-get update && apt-get install -y docker.io docker-compose"
    sshpass -p "$SSH_PASSWORD" ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} "systemctl enable docker && systemctl start docker"
fi

# Load the Docker image on the VPS and start the container
echo "Loading Docker image and starting container on VPS..."
sshpass -p "$SSH_PASSWORD" ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} "cd ${REMOTE_DIR} && \
    gunzip -c ${IMAGE_NAME}.tar.gz | docker load && \
    docker-compose down && \
    docker-compose up -d"

# Check if the container is running
echo "Checking container status..."
sshpass -p "$SSH_PASSWORD" ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} "cd ${REMOTE_DIR} && \
    docker-compose ps"

# Clean up local tar file
echo "Cleaning up local tar file..."
rm ${IMAGE_NAME}.tar.gz

echo "Deployment completed successfully!"
echo "Your website should now be accessible at http://${REMOTE_HOST}"
