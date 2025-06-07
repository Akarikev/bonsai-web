import fs from "fs";
import path from "path";
import sharp from "sharp";

const sizes = {
  "favicon-16x16.png": 16,
  "favicon-32x32.png": 32,
  "apple-touch-icon.png": 180,
  "android-chrome-192x192.png": 192,
  "android-chrome-512x512.png": 512,
};

async function generateFavicon() {
  try {
    // Create a simple SVG string directly instead of using renderToString
    const svgString = `
      <svg width="512" height="512" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 1s-2 2-2 4c0 1 1 2 2 2s2-1 2-2c0-2-2-4-2-4z" fill="#059669"/>
        <rect x="7.5" y="7" width="1" height="4" fill="#059669" rx="0.5"/>
        <rect x="5" y="11" width="6" height="1.5" fill="#059669" rx="0.5"/>
        <circle cx="6" cy="3" r="0.8" fill="#10b981" opacity="0.8"/>
        <circle cx="10" cy="3" r="0.8" fill="#10b981" opacity="0.8"/>
      </svg>
    `;

    // Create a buffer from the SVG
    const svgBuffer = Buffer.from(svgString);

    // Ensure public directory exists
    const publicDir = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Generate PNG files for each size
    for (const [filename, size] of Object.entries(sizes)) {
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(path.join(publicDir, filename));
      console.log(`Generated ${filename}`);
    }

    // Generate favicon.ico
    await sharp(svgBuffer)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicDir, "favicon.ico"));

    console.log("Generated favicon.ico");

    // Generate Open Graph image
    const ogSvg = `
      <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Background gradient -->
        <rect width="1200" height="630" fill="url(#gradient)" />
        
        <!-- Logo -->
        <g transform="translate(100, 215) scale(12)">
          <path d="M8 1s-2 2-2 4c0 1 1 2 2 2s2-1 2-2c0-2-2-4-2-4z" fill="#ffffff"/>
          <rect x="7.5" y="7" width="1" height="4" fill="#ffffff" rx="0.5"/>
          <rect x="5" y="11" width="6" height="1.5" fill="#ffffff" rx="0.5"/>
          <circle cx="6" cy="3" r="0.8" fill="#ffffff" opacity="0.8"/>
          <circle cx="10" cy="3" r="0.8" fill="#ffffff" opacity="0.8"/>
        </g>

        <!-- Text -->
        <text x="100" y="400" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="bold" fill="#ffffff">
          Bonsai
        </text>
        <text x="100" y="480" font-family="system-ui, -apple-system, sans-serif" font-size="32" fill="#ffffff" opacity="0.8">
          Flexible State Management for React
        </text>

        <!-- Gradient definition -->
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#059669"/>
            <stop offset="100%" stop-color="#10b981"/>
          </linearGradient>
        </defs>
      </svg>
    `;

    // Generate og.jpg
    await sharp(Buffer.from(ogSvg))
      .jpeg({
        quality: 90,
        chromaSubsampling: "4:4:4",
      })
      .toFile(path.join(publicDir, "og.jpg"));

    console.log("Generated og.jpg");

    // Generate docs-og.jpg
    const docsOgSvg = `
      <svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- Background gradient -->
        <rect width="1200" height="630" fill="url(#gradient)" />
        
        <!-- Logo -->
        <g transform="translate(100, 215) scale(12)">
          <path d="M8 1s-2 2-2 4c0 1 1 2 2 2s2-1 2-2c0-2-2-4-2-4z" fill="#ffffff"/>
          <rect x="7.5" y="7" width="1" height="4" fill="#ffffff" rx="0.5"/>
          <rect x="5" y="11" width="6" height="1.5" fill="#ffffff" rx="0.5"/>
          <circle cx="6" cy="3" r="0.8" fill="#ffffff" opacity="0.8"/>
          <circle cx="10" cy="3" r="0.8" fill="#ffffff" opacity="0.8"/>
        </g>

        <!-- Text -->
        <text x="100" y="400" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="bold" fill="#ffffff">
          Bonsai Docs
        </text>
        <text x="100" y="480" font-family="system-ui, -apple-system, sans-serif" font-size="32" fill="#ffffff" opacity="0.8">
          Learn State Management the Bonsai Way
        </text>

        <!-- Documentation Icon -->
        <g transform="translate(900, 315) scale(8)">
          <path d="M4 0C1.79 0 0 1.79 0 4v8c0 2.21 1.79 4 4 4h8c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4H4zm0 2h8c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2zm1 2v2h6V4H5zm0 3v2h6V7H5zm0 3v2h4v-2H5z" fill="#ffffff" opacity="0.8"/>
        </g>

        <!-- Gradient definition -->
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#059669"/>
            <stop offset="100%" stop-color="#10b981"/>
          </linearGradient>
        </defs>
      </svg>
    `;

    // Generate docs-og.jpg
    await sharp(Buffer.from(docsOgSvg))
      .jpeg({
        quality: 90,
        chromaSubsampling: "4:4:4",
      })
      .toFile(path.join(publicDir, "docs-og-image.png"));

    console.log("Generated docs-og-image.png");
  } catch (error) {
    console.error("Error generating favicon:", error);
    process.exit(1);
  }
}

generateFavicon().catch(console.error);
