const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const indexPath = path.join(distDir, 'index.html');
const fallbackPath = path.join(distDir, '200.html');

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, fallbackPath);
  console.log('🪄 200.html created successfully');
} else {
  console.error('❌ index.html not found. Build first!');
  process.exit(1);
}