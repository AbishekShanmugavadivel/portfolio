import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.resolve('public');
const iconsDir = path.resolve('public/icons');
const sourceFavicon = path.resolve('public/favicon.png');

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

async function generateIcons() {
  console.log('Generating PWA Icons with AS Branding...');

  // Standard 192x192 icon
  await sharp(sourceFavicon)
    .resize(192, 192, { fit: 'contain', background: { r: 11, g: 19, b: 43, alpha: 1 } })
    .toFile(path.join(iconsDir, 'icon-192x192.png'));

  // Standard 512x512 icon
  await sharp(sourceFavicon)
    .resize(512, 512, { fit: 'contain', background: { r: 11, g: 19, b: 43, alpha: 1 } })
    .toFile(path.join(iconsDir, 'icon-512x512.png'));

  // Maskable 192x192 (safe area padding 80% inner scale)
  const inner192 = await sharp(sourceFavicon)
    .resize(150, 150, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: 192,
      height: 192,
      channels: 4,
      background: { r: 11, g: 19, b: 43, alpha: 1 }
    }
  })
    .composite([{ input: inner192, top: 21, left: 21 }])
    .toFile(path.join(iconsDir, 'icon-192x192-maskable.png'));

  // Maskable 512x512 (safe area padding 80% inner scale)
  const inner512 = await sharp(sourceFavicon)
    .resize(400, 400, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: { r: 11, g: 19, b: 43, alpha: 1 }
    }
  })
    .composite([{ input: inner512, top: 56, left: 56 }])
    .toFile(path.join(iconsDir, 'icon-512x512-maskable.png'));

  // Apple touch icon 180x180
  await sharp(sourceFavicon)
    .resize(180, 180, { fit: 'contain', background: { r: 11, g: 19, b: 43, alpha: 1 } })
    .toFile(path.join(publicDir, 'apple-touch-icon.png'));

  console.log('PWA icons successfully generated!');
}

generateIcons().catch(err => {
  console.error('Error generating icons:', err);
  process.exit(1);
});
