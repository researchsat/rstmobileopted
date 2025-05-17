#!/usr/bin/env node

/**
 * This script removes source map references from CSS files that don't have corresponding map files.
 * This prevents warnings during development with Vite.
 */

import { promises as fs, existsSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// List of files to check and fix
const filesToFix = [
  {
    path: path.resolve(process.cwd(), 'node_modules/magnific-popup/dist/magnific-popup.css'),
    sourceMapReference: '/*# sourceMappingURL=magnific-popup.css.map */'
  }
  // Add more files here if needed
];

console.log('Fixing source map references...');

/**
 * Main function to fix source map references
 */
async function main() {
  for (const file of filesToFix) {
    try {
      if (existsSync(file.path)) {
        let content = readFileSync(file.path, 'utf8');

        if (content.includes(file.sourceMapReference)) {
          content = content.replace(file.sourceMapReference, '');
          writeFileSync(file.path, content);
          console.log(`✅ Fixed: ${file.path}`);
        } else {
          console.log(`ℹ️ Already fixed: ${file.path}`);
        }
      } else {
        console.log(`⚠️ File not found: ${file.path}`);
      }
    } catch (error) {
      console.error(`❌ Error fixing ${file.path}:`, error.message);
    }
  }

  console.log('Done fixing source map references.');
}

// Run the script
main();
