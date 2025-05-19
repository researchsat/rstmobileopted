#!/bin/bash

# Make sure nginx is properly configured
mkdir -p /etc/nginx/conf.d

# Create a symbolic link to enable our site
ln -sf /etc/nginx/conf.d/default.conf /etc/nginx/sites-enabled/default

# Set proper permissions for the web root
chown -R www-data:www-data /var/www/html
chmod -R 755 /var/www/html

# Ensure assets directory has proper permissions
if [ -d "/var/www/html/assets" ]; then
    find /var/www/html/assets -type f -exec chmod 644 {} \;
    find /var/www/html/assets -type d -exec chmod 755 {} \;
fi

# Create a symbolic link from /var/www/html/src to /var/www/html
# This is to fix path issues with image references
mkdir -p /var/www/html/src
ln -sf /var/www/html/assets /var/www/html/src/assets

# Ensure the hubbletelescope.png is accessible
if [ -f "/var/www/html/src/assets/images/features/hubbletelescope.png" ]; then
    echo "Hubble telescope image exists"
else
    echo "Creating directory for Hubble telescope image"
    mkdir -p /var/www/html/src/assets/images/features
    if [ -f "/app/src/assets/images/features/hubbletelescope.png" ]; then
        echo "Copying Hubble telescope image from build"
        cp /app/src/assets/images/features/hubbletelescope.png /var/www/html/src/assets/images/features/
    fi
fi

# Check if nginx config is valid
nginx -t

# Start nginx
nginx -g "daemon off;"
