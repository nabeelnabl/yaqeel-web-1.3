const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generate() {
  const src = path.join(__dirname, '../public/assets/logo.png');

  // 1. Generate 48x48 (Google's exact recommended base)
  const buf48 = await sharp(src).resize(48, 48).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/favicon-48x48.png'), buf48);
  console.log('Created favicon-48x48.png');

  // 2. Generate 96x96 (Google 2x multiple)
  const buf96 = await sharp(src).resize(96, 96).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/favicon-96x96.png'), buf96);
  console.log('Created favicon-96x96.png');

  // 3. Generate 192x192 (PWA / Android / Google high-res)
  const buf192 = await sharp(src).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/favicon-192x192.png'), buf192);
  console.log('Created favicon-192x192.png');

  // 4. Generate Apple Touch Icon 180x180
  const buf180 = await sharp(src).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/apple-touch-icon.png'), buf180);
  console.log('Created apple-touch-icon.png');

  // 5. Generate 32x32 for standard desktop browsers
  const buf32 = await sharp(src).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(__dirname, '../public/favicon-32x32.png'), buf32);

  // 6. Generate multi-resolution favicon.ico containing 16x16, 32x32, 48x48
  const buf16 = await sharp(src).resize(16, 16).png().toBuffer();

  const images = [
    { width: 16, height: 16, buf: buf16 },
    { width: 32, height: 32, buf: buf32 },
    { width: 48, height: 48, buf: buf48 },
  ];

  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + (dirEntrySize * images.length);

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type 1 = ICO
  header.writeUInt16LE(images.length, 4); // Number of images

  const entries = [];
  for (const img of images) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(img.width, 0);
    entry.writeUInt8(img.height, 1);
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(img.buf.length, 8); // Image size in bytes
    entry.writeUInt32LE(offset, 12); // Image data offset
    entries.push(entry);
    offset += img.buf.length;
  }

  const icoBuffer = Buffer.concat([header, ...entries, ...images.map(img => img.buf)]);
  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icoBuffer);
  console.log('Created favicon.ico with 16x16, 32x32, 48x48!');
}

generate().catch(err => {
  console.error(err);
  process.exit(1);
});
