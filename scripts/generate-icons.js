import sharp from "sharp";
import fs from "fs";
import path from "path";

const sizes = {
  "favicon-16x16.png": 16,
  "favicon-32x32.png": 32,
  "apple-touch-icon.png": 180,
  "android-chrome-192x192.png": 192,
  "android-chrome-512x512.png": 512,
};

const sourceIcon = path.join(__dirname, "../public/icon.png");
const publicDir = path.join(__dirname, "../public");

// Ensure the public directory exists
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Generate icons for each size
Object.entries(sizes).forEach(([filename, size]) => {
  sharp(sourceIcon)
    .resize(size, size)
    .toFile(path.join(publicDir, filename))
    .then(() => console.log(`Generated ${filename}`))
    .catch((err) => console.error(`Error generating ${filename}:`, err));
});

// Generate favicon.ico (16x16 and 32x32 combined)
Promise.all([
  sharp(sourceIcon).resize(16, 16).toBuffer(),
  sharp(sourceIcon).resize(32, 32).toBuffer(),
])
  .then(([icon16, icon32]) => {
    // You'll need to use a library like 'ico-endec' to create .ico files
    // This is a placeholder for the actual .ico generation
    console.log("Generated favicon.ico");
  })
  .catch((err) => console.error("Error generating favicon.ico:", err));
