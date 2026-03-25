import path from "path";
import fs from "fs/promises";

async function getFileContent(
  region: string,
  fileName: string
) {
  const filePath = path.join(
    process.cwd(),
    "src",
    "locales",
    region
  );
  const fullPath = path.join(filePath, fileName);
  const fileContent = await fs.readFile(fullPath, "utf8");
  console.log(fileContent);
  return JSON.parse(fileContent);
}

export default {
  getFileContent,
};
