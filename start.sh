#!/bin/bash

# Make sure nginx is properly configured
mkdir -p /etc/nginx/conf.d

# Create a symbolic link to enable our site
ln -sf /etc/nginx/conf.d/default.conf /etc/nginx/sites-enabled/default

# Check if nginx config is valid
nginx -t

# Start nginx
nginx -g "daemon off;"
