#!/bin/bash

# Create necessary directories
mkdir -p src/assets/images
mkdir -p src/assets/webfonts

# Copy images
cp -r ../images/* src/assets/images/

# Copy webfonts
cp -r ../webfonts/* src/assets/webfonts/

echo "Assets copied successfully!"
