import path from "path";
import fs from "fs/promises";

interface RequestParams {
  projectId: string;
  region: string;
  resource: string;
}

async function getFileContent({
  projectId,
  region,
  resource,
}: RequestParams) {
  const fileName = `${resource}.json`;
  const folderPath = path.join(
    process.cwd(),
    "public",
    "data",
    projectId,
    "locales",
    region
  );
  const fullPath = path.join(folderPath, fileName);
  const fileContent = await fs.readFile(fullPath, "utf8");
  // console.log(fileContent);
  return JSON.parse(fileContent);
}

export default {
  getFileContent,
};
