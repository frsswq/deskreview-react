export function getFrontmatter(markdown: string): {
  frontmatter: Record<string, string>;
  content: string;
} {
  const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/;
  const match = markdown.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, content: markdown }; // No frontmatter found
  }

  const frontmatterString = match[1];
  const content = markdown.slice(match[0].length).trim();

  // Parse the frontmatter (assuming it's in YAML format)
  const frontmatter: Record<string, string> = {};
  frontmatterString.split("\n").forEach((line: string) => {
    const [key, value] = line.split(":").map((part: string) => part.trim());
    if (key && value) {
      frontmatter[key] = value;
    }
  });

  return { frontmatter, content };
}
