import path from "node:path";
import fs from "node:fs/promises";

async function convertToWebP(dir) {
  try {
    const items = await fs.readdir(dir, { withFileTypes: true });

    for (const item of items) {
      const itemPath = path.join(dir, item.name);

      if (item.isDirectory()) {
        await convertToWebP(itemPath);
      } else if (item.isFile() && /\.(jpg|jpeg|png)$/i.test(item.name)) {
        const outputPath = path.join(dir, `${path.parse(item.name).name}.webp`);

        await Bun.file(itemPath)
          .image()
          .resize(680, undefined, { withoutEnlargement: true })
          .webp({ quality: 80 })
          .write(outputPath);

        console.log(`Converted ${item.name} to ${path.basename(outputPath)}`);

        await fs.unlink(itemPath);
        console.log(`Deleted original file: ${item.name}`);
      }
    }
  } catch (error) {
    console.error("Error converting images:", error);
  }
}

const targetDir = "public/img/home";

convertToWebP(targetDir);
