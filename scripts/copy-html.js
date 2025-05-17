import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// HTML files to copy
const htmlFiles = [
  'about.html',
  'missions.html',
  'payloads.html',
  'privacy-policy.html',
  'terms-conditions.html',
  'emailSign.html'
];

// Root directory
const rootDir = path.resolve(__dirname, '..');
const parentDir = path.resolve(rootDir, '..');

// Create scripts directory if it doesn't exist
if (!fs.existsSync(path.join(rootDir, 'scripts'))) {
  fs.mkdirSync(path.join(rootDir, 'scripts'));
}

// Copy HTML files
htmlFiles.forEach(file => {
  const sourcePath = path.join(parentDir, file);
  const destPath = path.join(rootDir, file);

  if (fs.existsSync(sourcePath)) {
    // Read the HTML file
    const content = fs.readFileSync(sourcePath, 'utf8');

    // Create a simple HTML file that redirects to the React route
    const fileName = file.replace('.html', '');
    // Use hash-based routing to avoid redirect loops
    const routePath = fileName === 'privacy-policy' ? '/#/privacy-policy' :
                      fileName === 'terms-conditions' ? '/#/terms-conditions' :
                      `/#/${fileName}`;

    const redirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Redirecting...</title>
  <meta http-equiv="refresh" content="0;url=${routePath}">
  <script>
    window.location.href = "${routePath}";
  </script>
</head>
<body>
  <p>Redirecting to <a href="${routePath}">${routePath}</a>...</p>
</body>
</html>`;

    // Write the redirect HTML file
    fs.writeFileSync(destPath, redirectHtml);
    console.log(`Created redirect for ${file}`);
  } else {
    console.warn(`Source file ${sourcePath} not found`);
  }
});

console.log('HTML files processed successfully');
