import sharp from "sharp";
import path from "path";
import fs from "fs/promises";

async function convertToWebP(dir) {
  try {
    const items = await fs.readdir(dir, { withFileTypes: true });

    for (const item of items) {
      const itemPath = path.join(dir, item.name);

      if (item.isDirectory()) {
        await convertToWebP(itemPath);
      } else if (item.isFile() && /\.(jpg|jpeg|png|gif)$/i.test(item.name)) {
        const outputPath = path.join(dir, `${path.parse(item.name).name}.webp`);

        await sharp(itemPath)
          .resize({ witdh: 680, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);

        await fs.unlink(itemPath);
      }
    }
  } catch (error) {
    console.error("Error converting images:", error);
  }
}

const targetDir = "public/img/home";

convertToWebP(targetDir);
