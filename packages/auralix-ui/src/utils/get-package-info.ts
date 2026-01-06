import path from "path";
import fs from "fs-extra";

export async function getPackageInfo() {
  const packageJsonPath = path.join(__dirname, "..", "package.json");
  return await fs.readJSON(packageJsonPath);
}
