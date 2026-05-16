import fs from "node:fs/promises";
import path from "node:path";

const imageProfiles = {
  blog: {
    targetDir: "public/img/blog",
    width: 2000,
  },
  home: {
    targetDir: "public/img/home",
    width: 680,
  },
};

const referenceFiles = ["src/contents", "src/data/home/portfolio"];
const sourceImagePattern = /\.(jpg|jpeg|png)$/i;

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

async function convertToWebP({ targetDir, width }) {
  const conversions = [];
  const items = await fs.readdir(targetDir, { withFileTypes: true });

  for (const item of items) {
    const itemPath = path.join(targetDir, item.name);

    if (item.isDirectory()) {
      conversions.push(
        ...(await convertToWebP({ targetDir: itemPath, width })),
      );
    } else if (item.isFile() && sourceImagePattern.test(item.name)) {
      const outputPath = path.join(
        targetDir,
        `${path.parse(item.name).name}.webp`,
      );

      if (await Bun.file(outputPath).exists()) {
        throw new Error(
          `Cannot convert ${itemPath}: output already exists at ${outputPath}`,
        );
      }

      await Bun.file(itemPath)
        .image()
        .resize(width, undefined, { withoutEnlargement: true })
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

async function optimizeProfile(profileName) {
  const profile = imageProfiles[profileName];

  if (!profile) {
    throw new Error(
      `Unknown image optimization profile "${profileName}". Expected one of: ${Object.keys(imageProfiles).join(", ")}`,
    );
  }

  const conversions = await convertToWebP(profile);

  if (conversions.length === 0) {
    console.log(`No source images to optimize for ${profileName}.`);
    return;
  }

  await updateReferences(conversions);
}

const profiles = process.argv.slice(2);
const profilesToOptimize =
  profiles.length > 0 ? profiles : Object.keys(imageProfiles);

for (const profile of profilesToOptimize) {
  await optimizeProfile(profile);
}
