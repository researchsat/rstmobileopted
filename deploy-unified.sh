#!/bin/bash

# Exit on error
set -e

# Configuration
IMAGE_NAME="researchsat-website"
IMAGE_TAG="latest"
REMOTE_USER="root"           # VPS username
REMOTE_HOST="194.238.16.55"  # VPS IP address
REMOTE_DIR="/opt/researchsat" # Directory on the VPS to store the Docker files

# Function to display usage information
function show_usage {
  echo "Usage: $0 [OPTIONS]"
  echo "Deploy the ResearchSat website to a remote server."
  echo ""
  echo "Options:"
  echo "  -p, --password    Use password authentication (requires sshpass)"
  echo "  -k, --key         Use SSH key authentication (default)"
  echo "  -h, --help        Display this help message"
  echo ""
  echo "Examples:"
  echo "  $0 --key          Deploy using SSH key authentication"
  echo "  $0 --password     Deploy using password authentication"
}

# Parse command line arguments
AUTH_METHOD="key"

while [[ $# -gt 0 ]]; do
  case "$1" in
    -p|--password)
      AUTH_METHOD="password"
      shift
      ;;
    -k|--key)
      AUTH_METHOD="key"
      shift
      ;;
    -h|--help)
      show_usage
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      show_usage
      exit 1
      ;;
  esac
done

# If using password authentication, check for sshpass and prompt for password
if [ "$AUTH_METHOD" = "password" ]; then
  # Check if sshpass is installed
  if ! command -v sshpass &> /dev/null; then
    echo "sshpass is not installed. Please install it first."
    echo "On macOS: brew install hudochenkov/sshpass/sshpass"
    echo "On Ubuntu: apt-get install sshpass"
    exit 1
  fi
  
  # Prompt for password
  read -sp "Enter SSH password for ${REMOTE_USER}@${REMOTE_HOST}: " SSH_PASSWORD
  echo
fi

# Build the Docker image for AMD64 architecture (Ubuntu VPS)
echo "Building Docker image for AMD64 architecture..."
docker build --platform=linux/amd64 -t ${IMAGE_NAME}:${IMAGE_TAG} .

# Save the Docker image to a tar file
echo "Saving Docker image to a tar file..."
docker save ${IMAGE_NAME}:${IMAGE_TAG} | gzip > ${IMAGE_NAME}.tar.gz

# Create the remote directory if it doesn't exist
echo "Creating remote directory..."
if [ "$AUTH_METHOD" = "password" ]; then
  sshpass -p "$SSH_PASSWORD" ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} "mkdir -p ${REMOTE_DIR}"
else
  ssh ${REMOTE_USER}@${REMOTE_HOST} "mkdir -p ${REMOTE_DIR}"
fi

# Copy the Docker image and configuration files to the VPS
echo "Copying files to VPS..."
if [ "$AUTH_METHOD" = "password" ]; then
  sshpass -p "$SSH_PASSWORD" scp -o StrictHostKeyChecking=no ${IMAGE_NAME}.tar.gz docker-compose.yml nginx.conf start.sh ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DIR}/
else
  scp ${IMAGE_NAME}.tar.gz docker-compose.yml nginx.conf start.sh ${REMOTE_USER}@${REMOTE_HOST}:${REMOTE_DIR}/
fi

# Check if Docker is installed on the remote server (only for password auth)
if [ "$AUTH_METHOD" = "password" ]; then
  echo "Checking if Docker is installed on the remote server..."
  if ! sshpass -p "$SSH_PASSWORD" ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} "command -v docker &> /dev/null"; then
    echo "Docker is not installed on the remote server. Installing Docker..."
    sshpass -p "$SSH_PASSWORD" ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} "apt-get update && apt-get install -y docker.io docker-compose"
    sshpass -p "$SSH_PASSWORD" ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} "systemctl enable docker && systemctl start docker"
  fi
fi

# Load the Docker image on the VPS and start the container
echo "Loading Docker image and starting container on VPS..."
if [ "$AUTH_METHOD" = "password" ]; then
  sshpass -p "$SSH_PASSWORD" ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} "cd ${REMOTE_DIR} && \
    gunzip -c ${IMAGE_NAME}.tar.gz | docker load && \
    docker-compose down && \
    docker-compose up -d"
else
  ssh ${REMOTE_USER}@${REMOTE_HOST} "cd ${REMOTE_DIR} && \
    gunzip -c ${IMAGE_NAME}.tar.gz | docker load && \
    docker-compose down && \
    docker-compose up -d"
fi

# Check if the container is running
echo "Checking container status..."
if [ "$AUTH_METHOD" = "password" ]; then
  sshpass -p "$SSH_PASSWORD" ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} "cd ${REMOTE_DIR} && \
    docker-compose ps"
else
  ssh ${REMOTE_USER}@${REMOTE_HOST} "cd ${REMOTE_DIR} && \
    docker-compose ps"
fi

# Clean up local tar file
echo "Cleaning up local tar file..."
rm ${IMAGE_NAME}.tar.gz

echo "Deployment completed successfully!"
echo "Your website should now be accessible at http://${REMOTE_HOST}"
