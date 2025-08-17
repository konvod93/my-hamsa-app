const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const indexPath = path.join(distDir, 'index.html');
const fallbackPath = path.join(distDir, '200.html');

// 1. Генерация 200.html

if (fs.existsSync(indexPath)) {
  fs.copyFileSync(indexPath, fallbackPath);
  console.log('🪄 200.html created successfully');
} else {
  console.error('❌ index.html not found. Build first!');
  process.exit(1);
}

// 2. Генерируем tonconnect-manifest.json
const manifest = {
  url: 'https://hamsa-work.surge.sh',
  name: 'Hamsa Work',
  iconUrl: 'https://hamsa-work.surge.sh/icon.png',
  termsUrl: 'https://hamsa-work.surge.sh/terms.html',
  privacyPolicyUrl: 'https://hamsa-work.surge.sh/privacy.html',
};

const manifestPath = path.join(distDir, 'tonconnect-manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
console.log('🔮 Manifest conjured into dist/');

