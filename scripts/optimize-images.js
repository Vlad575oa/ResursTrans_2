/**
 * IMAGE OPTIMIZATION SCRIPT
 * 
 * Converts images to WebP/AVIF formats and generates srcset
 * Run: node scripts/optimize-images.js
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if sharp is installed
let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('Installing sharp package...');
  execSync('npm install sharp', { stdio: 'inherit' });
  sharp = require('sharp');
}

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

// Image formats to generate
const OUTPUT_FORMATS = ['webp', 'avif'];

// Responsive sizes for srcset
const RESPONSIVE_SIZES = [
  { width: 320, suffix: '-320' },
  { width: 640, suffix: '-640' },
  { width: 768, suffix: '-768' },
  { width: 1024, suffix: '-1024' },
  { width: 1280, suffix: '-1280' },
  { width: 1920, suffix: '-1920' },
];

async function optimizeImage(inputPath, outputPath, format, quality = 85) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Skip if image is smaller than minimum size
    if (metadata.width < 320) {
      console.log(`Skipping ${inputPath} - too small (${metadata.width}px)`);
      return;
    }

    // Generate responsive versions
    for (const size of RESPONSIVE_SIZES) {
      if (metadata.width >= size.width) {
        const resizedPath = outputPath.replace(
          `.${format}`,
          `${size.suffix}.${format}`
        );
        
        await image
          .resize(size.width, null, { withoutEnlargement: true })
          [format]({ quality })
          .toFile(resizedPath);
        
        console.log(`Created ${resizedPath}`);
      }
    }

    // Generate full-size version
    await image[format]({ quality }).toFile(outputPath);
    console.log(`Created ${outputPath}`);
    
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error.message);
  }
}

async function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await processDirectory(filePath);
      continue;
    }
    
    // Skip already optimized files
    if (file.endsWith('.webp') || file.endsWith('.avif')) {
      continue;
    }
    
    // Process image files
    if (/\.(jpg|jpeg|png|gif)$/i.test(file)) {
      const baseName = path.basename(file, path.extname(file));
      const dirName = path.dirname(filePath);
      
      for (const format of OUTPUT_FORMATS) {
        const outputPath = path.join(dirName, `${baseName}.${format}`);
        console.log(`\nProcessing ${filePath} → ${format.toUpperCase()}`);
        await optimizeImage(filePath, outputPath, format);
      }
    }
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  
  if (!fs.existsSync(IMAGES_DIR)) {
    console.error('Images directory not found:', IMAGES_DIR);
    process.exit(1);
  }
  
  await processDirectory(IMAGES_DIR);
  
  console.log('\n✅ Image optimization complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Update Image components to use new formats');
  console.log('2. Add srcset attributes for responsive images');
  console.log('3. Test with Lighthouse');
}

main().catch(console.error);
