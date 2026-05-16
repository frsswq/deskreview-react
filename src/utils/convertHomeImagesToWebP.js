import path from "node:path";
import fs from "node:fs/promises";

const targetDir = "public/img/home";
const referenceFiles = ["src/contents", "src/data/home/portfolio"];

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function toPublicPath(filePath) {
  return filePath
    .replace(/^public/, "")
    .split(path.sep)
    .join("/");
}

async function collectFiles(dir, extensions) {
  const files = [];
  const items = await fs.readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const itemPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      files.push(...(await collectFiles(itemPath, extensions)));
    } else if (
      item.isFile() &&
      extensions.some((extension) => item.name.endsWith(extension))
    ) {
      files.push(itemPath);
    }
  }

  return files;
}

async function updateReferences(conversions) {
  if (conversions.length === 0) return;

  const files = (
    await Promise.all(
      referenceFiles.map((dir) => collectFiles(dir, [".md", ".json"])),
    )
  ).flat();

  for (const file of files) {
    let content = await fs.readFile(file, "utf8");
    const originalContent = content;

    for (const { inputPath, outputPath } of conversions) {
      const replacements = new Map([
        [
          inputPath.split(path.sep).join("/"),
          outputPath.split(path.sep).join("/"),
        ],
        [toPublicPath(inputPath), toPublicPath(outputPath)],
        [
          encodeURI(toPublicPath(inputPath)),
          encodeURI(toPublicPath(outputPath)),
        ],
      ]);

      for (const [from, to] of replacements) {
        content = content.replace(new RegExp(escapeRegExp(from), "g"), to);
      }
    }

    if (content !== originalContent) {
      await fs.writeFile(file, content);
      console.log(`Updated image references in ${file}`);
    }
  }
}

async function convertToWebP(dir) {
  const conversions = [];
  const items = await fs.readdir(dir, { withFileTypes: true });

  for (const item of items) {
    const itemPath = path.join(dir, item.name);

    if (item.isDirectory()) {
      conversions.push(...(await convertToWebP(itemPath)));
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

      conversions.push({ inputPath: itemPath, outputPath });
    }
  }

  return conversions;
}

const conversions = await convertToWebP(targetDir);
await updateReferences(conversions);
