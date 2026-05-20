const fs = require('fs');
const path = require('path');

const root = process.cwd();
const dest = path.join(root, 'www');
if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

const files = ['index.html','manifest.json','service-worker.js','package.json'];
files.forEach(f => {
  const src = path.join(root, f);
  if (fs.existsSync(src)) fs.copyFileSync(src, path.join(dest, f));
});

const iconsSrc = path.join(root, 'icons');
const iconsDest = path.join(dest, 'icons');
if (fs.existsSync(iconsSrc)) {
  if (!fs.existsSync(iconsDest)) fs.mkdirSync(iconsDest, { recursive: true });
  fs.readdirSync(iconsSrc).forEach(file => fs.copyFileSync(path.join(iconsSrc, file), path.join(iconsDest, file)));
}

console.log('Prepared www/');
