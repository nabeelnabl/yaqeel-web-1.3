const sharp = require('sharp');

async function generatePerfectScreenMask() {
  const { data: frameData, info } = await sharp('public/assets/iphone-frame.webp')
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height } = info; // 389 x 800
  const maskBuf = Buffer.alloc(width * height * 4, 0);

  // For each y from 13 to 786:
  // Find where outer phone chassis starts, then where inner bezel drops below 220
  // (extending 2px under the solid opaque bezel ensures zero gap and zero leak)
  for (let y = 13; y <= 786; y++) {
    let left = -1;
    let right = -1;

    let insideBezel = false;
    for (let x = 0; x < width / 2; x++) {
      const a = frameData[(y * width + x) * 4 + 3];
      if (!insideBezel && a > 80) {
        insideBezel = true;
      } else if (insideBezel && a < 220) {
        left = x;
        break;
      }
    }

    insideBezel = false;
    for (let x = width - 1; x >= width / 2; x--) {
      const a = frameData[(y * width + x) * 4 + 3];
      if (!insideBezel && a > 80) {
        insideBezel = true;
      } else if (insideBezel && a < 220) {
        right = x;
        break;
      }
    }

    if (left !== -1 && right !== -1) {
      for (let x = left; x <= right; x++) {
        const idx = (y * width + x) * 4;
        maskBuf[idx] = 255;
        maskBuf[idx + 1] = 255;
        maskBuf[idx + 2] = 255;
        maskBuf[idx + 3] = 255;
      }
    }
  }

  // Save clean, unblurred public/assets/screen-mask.png
  await sharp(maskBuf, { raw: { width, height, channels: 4 } })
    .png()
    .toFile('public/assets/screen-mask.png');

  console.log('Successfully generated public/assets/screen-mask.png');
}

generatePerfectScreenMask().catch(console.error);
