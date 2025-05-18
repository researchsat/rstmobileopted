import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to create directory if it doesn't exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

// Function to copy a file
function copyFile(sourcePath, destPath) {
  try {
    const content = fs.readFileSync(sourcePath);
    fs.writeFileSync(destPath, content);
    console.log(`Copied: ${sourcePath} -> ${destPath}`);
  } catch (error) {
    console.error(`Error copying file ${sourcePath}: ${error.message}`);
  }
}

// Function to copy all files from a directory
function copyDirectory(sourceDir, destDir) {
  ensureDirectoryExists(destDir);

  const files = fs.readdirSync(sourceDir);

  files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const destPath = path.join(destDir, file);

    if (fs.statSync(sourcePath).isDirectory()) {
      copyDirectory(sourcePath, destPath);
    } else {
      copyFile(sourcePath, destPath);
    }
  });
}

// Main function to copy assets
function copyAssets() {
  const srcDir = 'src';
  const distDir = 'dist';

  // List of directories to copy
  const dirsToCopy = [
    'assets/images/features',
    'assets/images/background',
    'assets/images/benefits',
    'assets/images/partnerships'
  ];

  // Copy each directory
  dirsToCopy.forEach(dir => {
    const sourceDir = path.join(srcDir, dir);
    const destDir = path.join(distDir, srcDir, dir);

    if (fs.existsSync(sourceDir)) {
      copyDirectory(sourceDir, destDir);
    } else {
      console.warn(`Source directory does not exist: ${sourceDir}`);
    }
  });

  console.log('Asset copying completed!');
}

// Execute the copy function
copyAssets();

// Export the function for potential reuse
export default copyAssets;
