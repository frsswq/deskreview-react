import sharp from "sharp";
import path from "path";
import fs from "fs/promises";

async function convertToWebP(inputDir, outputDir) {
  try {
    await fs.mkdir(outputDir, { recursive: true });

    const files = await fs.readdir(inputDir);
    const imageFiles = files.filter((file) =>
      /\.(jpg|jpeg|png|gif)$/i.test(file)
    );

    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, `${path.parse(file).name}.webp`);

      await sharp(inputPath)
        .resize(680, null)
        .webp({ quality: 80 })
        .toFile(outputPath);
    }
  } catch (error) {
    console.error(error);
  }
}

const inputDir = "public/img/unoptimized";
const outputDir = "public/img/home/work";

convertToWebP(inputDir, outputDir);
