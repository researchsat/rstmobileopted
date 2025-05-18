# Build stage
FROM node:20 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

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

# Create necessary directories for SVG files
RUN mkdir -p /var/www/html/src/assets/images/features \
    /var/www/html/src/assets/images/background \
    /var/www/html/src/assets/images/benefits \
    /var/www/html/src/assets/images/partnerships

# Copy SVG files from source to ensure they're available
COPY --from=build /app/src/assets/images/features/objects.svg /var/www/html/src/assets/images/features/
COPY --from=build /app/src/assets/images/features/objects0.svg /var/www/html/src/assets/images/features/
COPY --from=build /app/src/assets/images/features/objects1.svg /var/www/html/src/assets/images/features/
COPY --from=build /app/src/assets/images/features/objects2.svg /var/www/html/src/assets/images/features/
COPY --from=build /app/src/assets/images/features/bolt.svg /var/www/html/src/assets/images/features/
COPY --from=build /app/src/assets/images/background/checkedbg.svg /var/www/html/src/assets/images/background/
COPY --from=build /app/src/assets/images/benefits/mask-group0.svg /var/www/html/src/assets/images/benefits/
COPY --from=build /app/src/assets/images/partnerships/diagonal-arrow1.svg /var/www/html/src/assets/images/partnerships/
COPY --from=build /app/src/assets/images/partnerships/diagonal-arrow2.svg /var/www/html/src/assets/images/partnerships/

# Copy other missing image files
RUN mkdir -p /var/www/html/src/assets/images/partnerships /var/www/html/src/assets/images/features
# Use shell commands to copy files that might not exist
RUN if [ -f /app/src/assets/images/partnerships/mission_3.jpg ]; then \
    cp /app/src/assets/images/partnerships/mission_3.jpg /var/www/html/src/assets/images/partnerships/; \
    fi
RUN if [ -f /app/src/assets/images/partnerships/unsplash-s-3-h-qu-5-yjg1.png ]; then \
    cp /app/src/assets/images/partnerships/unsplash-s-3-h-qu-5-yjg1.png /var/www/html/src/assets/images/partnerships/; \
    fi
RUN if [ -f /app/src/assets/images/features/image-18690.png ]; then \
    cp /app/src/assets/images/features/image-18690.png /var/www/html/src/assets/images/features/; \
    fi

# Copy custom nginx config
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy startup script
COPY ./start.sh /start.sh
RUN chmod +x /start.sh

# Expose port 80
EXPOSE 80

# Start nginx using our startup script
CMD ["/start.sh"]
