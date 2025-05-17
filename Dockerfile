# Build stage
FROM node:20 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM ubuntu:22.04 AS production

# Avoid prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# Install nginx and other dependencies
RUN apt-get update && \
    apt-get install -y nginx curl && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Remove default nginx config
RUN rm -rf /etc/nginx/sites-enabled/default

# Copy built assets from the build stage
COPY --from=build /app/dist /var/www/html

# Copy custom nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy startup script
COPY ./start.sh /start.sh
RUN chmod +x /start.sh

# Expose port 80
EXPOSE 80

# Start nginx using our startup script
CMD ["/start.sh"]
