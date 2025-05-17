#!/bin/bash

# Exit on error
set -e

# Configuration
IMAGE_NAME="researchsat-website"
IMAGE_TAG="latest"
REMOTE_USER="root"           # VPS username
REMOTE_HOST="194.238.16.55"  # VPS IP address
REMOTE_DIR="/opt/researchsat" # Directory on the VPS to store the Docker files

# Build the Docker image for AMD64 architecture (Ubuntu VPS)
echo "Building Docker image for AMD64 architecture..."
docker build --platform=linux/amd64 -t ${IMAGE_NAME}:${IMAGE_TAG} .

# Save the Docker image to a tar file
echo "Saving Docker image to a tar file..."
docker save ${IMAGE_NAME}:${IMAGE_TAG} | gzip > ${IMAGE_NAME}.tar.gz

# Create the remote directory if it doesn't exist
echo "Creating remote directory..."
ssh ${REMOTE_USER}@${REMOTE_HOST} "mkdir -p ${REMOTE_DIR}"

# Copy the Docker image and configuration files to the VPS
echo "Copying files to VPS..."
scp ${IMAGE_NAME}.tar.gz docker-compose.yml nginx.conf start.sh ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DIR}/

# Load the Docker image on the VPS and start the container
echo "Loading Docker image and starting container on VPS..."
ssh ${REMOTE_USER}@${REMOTE_HOST} "cd ${REMOTE_DIR} && \
    gunzip -c ${IMAGE_NAME}.tar.gz | docker load && \
    docker-compose down && \
    docker-compose up -d"

# Check if the container is running
echo "Checking container status..."
ssh ${REMOTE_USER}@${REMOTE_HOST} "cd ${REMOTE_DIR} && \
    docker-compose ps"

# Clean up local tar file
echo "Cleaning up local tar file..."
rm ${IMAGE_NAME}.tar.gz

echo "Deployment completed successfully!"
