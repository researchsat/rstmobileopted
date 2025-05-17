/**
 * Script to convert images to WebP format
 * 
 * This script finds all JPG, JPEG, and PNG images in the src/assets/images directory
 * and converts them to WebP format while preserving the original files.
 * 
 * It also creates responsive versions of the images at different sizes.
 * 
 * Usage:
 * node scripts/convert-to-webp.js
 * 
 * Requirements:
 * - sharp: npm install sharp
 * - glob: npm install glob
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { glob } from 'glob';
import sharp from 'sharp';

// Get the directory name
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configuration
const config = {
  // Source directory for images
  sourceDir: path.join(__dirname, '../src/assets/images'),
  // Quality of WebP images (0-100)
  quality: 80,
  // Sizes for responsive images
  sizes: [320, 640, 960, 1280, 1920],
  // File extensions to convert
  extensions: ['jpg', 'jpeg', 'png'],
};

/**
 * Convert an image to WebP format
 * @param {string} imagePath - Path to the image
 * @returns {Promise<void>}
 */
async function convertToWebP(imagePath) {
  try {
    const outputPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    
    // Skip if WebP version already exists
    try {
      await fs.access(outputPath);
      console.log(`WebP version already exists: ${outputPath}`);
      return;
    } catch (error) {
      // File doesn't exist, continue with conversion
    }
    
    // Convert to WebP
    await sharp(imagePath)
      .webp({ quality: config.quality })
      .toFile(outputPath);
    
    console.log(`Converted: ${imagePath} -> ${outputPath}`);
  } catch (error) {
    console.error(`Error converting ${imagePath}:`, error);
  }
}

/**
 * Create responsive versions of an image
 * @param {string} imagePath - Path to the image
 * @returns {Promise<void>}
 */
async function createResponsiveImages(imagePath) {
  try {
    const ext = path.extname(imagePath).toLowerCase();
    const basePath = imagePath.slice(0, -ext.length);
    
    // Get image metadata
    const metadata = await sharp(imagePath).metadata();
    
    // Create responsive versions for both original format and WebP
    for (const size of config.sizes) {
      // Skip if the requested size is larger than the original
      if (size > metadata.width) continue;
      
      // Calculate height to maintain aspect ratio
      const height = Math.round((size / metadata.width) * metadata.height);
      
      // Create responsive version in original format
      const originalOutputPath = `${basePath}-${size}${ext}`;
      
      // Skip if file already exists
      try {
        await fs.access(originalOutputPath);
        console.log(`Responsive image already exists: ${originalOutputPath}`);
      } catch (error) {
        // File doesn't exist, create it
        await sharp(imagePath)
          .resize(size, height)
          .toFile(originalOutputPath);
        
        console.log(`Created responsive image: ${originalOutputPath}`);
      }
      
      // Create responsive version in WebP format
      const webpOutputPath = `${basePath}-${size}.webp`;
      
      // Skip if file already exists
      try {
        await fs.access(webpOutputPath);
        console.log(`Responsive WebP already exists: ${webpOutputPath}`);
      } catch (error) {
        // File doesn't exist, create it
        await sharp(imagePath)
          .resize(size, height)
          .webp({ quality: config.quality })
          .toFile(webpOutputPath);
        
        console.log(`Created responsive WebP: ${webpOutputPath}`);
      }
    }
  } catch (error) {
    console.error(`Error creating responsive images for ${imagePath}:`, error);
  }
}

/**
 * Main function
 */
async function main() {
  try {
    // Create a pattern for matching image files
    const pattern = `${config.sourceDir}/**/*.{${config.extensions.join(',')}}`;
    
    // Find all matching image files
    const files = await glob(pattern);
    
    console.log(`Found ${files.length} images to process`);
    
    // Process each file
    for (const file of files) {
      await convertToWebP(file);
      await createResponsiveImages(file);
    }
    
    console.log('Image conversion complete!');
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

// Run the script
main();
