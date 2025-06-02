const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, '..', 'src-tauri', 'icons');

// Create icons directory if it doesn't exist
if (!fs.existsSync(ICONS_DIR)) {
  fs.mkdirSync(ICONS_DIR, { recursive: true });
}

const SOURCE_LOGO = path.join(__dirname, '..', 'src-tauri', 'icons', 'logo.png');

// Generate different size PNGs
const sizes = [
  { size: 32, name: '32x32.png' },
  { size: 128, name: '128x128.png' },
  { size: 256, name: '128x128@2x.png' },
];

async function generateIcons() {
  // Generate PNG icons
  for (const { size, name } of sizes) {
    await sharp(SOURCE_LOGO)
      .resize(size, size)
      .png()
      .toFile(path.join(ICONS_DIR, name));
  }

  // Generate Windows ICO
  await sharp(SOURCE_LOGO)
    .resize(256, 256)
    .toFormat('ico')
    .toFile(path.join(ICONS_DIR, 'icon.ico'));

  console.log('Icons generated successfully!');
}

generateIcons().catch(console.error);
