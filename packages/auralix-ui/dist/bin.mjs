#!/usr/bin/env node

// src/bin.ts
import { Command as Command3 } from "commander";

// src/utils/get-package-info.ts
import path from "path";
import fs from "fs-extra";
async function getPackageInfo() {
  const packageJsonPath = path.join(__dirname, "..", "package.json");
  return await fs.readJSON(packageJsonPath);
}

// src/commands/add.ts
import { Command } from "commander";
import fs2 from "fs-extra";
import path2 from "path";
import chalk from "chalk";
import ora from "ora";
import prompts from "prompts";
var add = new Command().name("add").description("Add a component to your project").argument("[components...]", "The components to add").option("-y, --yes", "Skip confirmation prompt", false).option("-o, --overwrite", "Overwrite existing files", false).action(async (components, options) => {
  const spinner = ora("Checking components...").start();
  try {
    if (!components || components.length === 0) {
      spinner.stop();
      const response = await prompts({
        type: "text",
        name: "component",
        message: "Enter the component name:"
      });
      if (!response.component) {
        console.log(chalk.yellow("No component specified. Exiting."));
        process.exit(0);
      }
      components = [response.component];
      spinner.start();
    }
    const cwd = process.cwd();
    const targeDir = path2.resolve(cwd, "src/components/ui");
    if (!fs2.existsSync(targeDir)) {
      await fs2.ensureDir(targeDir);
    }
    const componentsSourceDir = path2.join(__dirname, "..", "src", "components");
    for (const component of components) {
      spinner.text = `Installing ${component}...`;
      const files = await fs2.readdir(componentsSourceDir);
      const componentFile = files.find((f) => f.toLowerCase() === component.toLowerCase() + ".tsx");
      if (!componentFile) {
        spinner.warn(chalk.yellow(`Component "${component}" not found.`));
        continue;
      }
      const sourcePath = path2.join(componentsSourceDir, componentFile);
      const targetPath = path2.join(targeDir, componentFile);
      if (fs2.existsSync(targetPath) && !options.overwrite) {
        spinner.stop();
        const response = await prompts({
          type: "confirm",
          name: "overwrite",
          message: `Component "${component}" already exists. Overwrite?`,
          initial: false
        });
        spinner.start();
        if (!response.overwrite) {
          spinner.info(chalk.blue(`Skipped ${component}`));
          continue;
        }
      }
      let content = await fs2.readFile(sourcePath, "utf-8");
      content = content.replace(/from "\.\.\/utils"/g, 'from "@/lib/utils"');
      await fs2.writeFile(targetPath, content);
      spinner.succeed(chalk.green(`Installed ${component}`));
    }
    spinner.stop();
    console.log(chalk.green("\nSuccess! Components installed."));
  } catch (error) {
    spinner.fail(chalk.red("Failed to add components."));
    console.error(error);
    process.exit(1);
  }
});

// src/commands/init.ts
import { Command as Command2 } from "commander";
import fs3 from "fs-extra";
import path3 from "path";
import chalk2 from "chalk";
import ora2 from "ora";
var init = new Command2().name("init").description("Initialize Auralix UI in your project").action(async () => {
  const spinner = ora2("Initializing Auralix UI...").start();
  try {
    const cwd = process.cwd();
    const libPath = path3.resolve(cwd, "src/lib");
    const utilsPath = path3.join(libPath, "utils.ts");
    if (!fs3.existsSync(libPath)) {
      await fs3.ensureDir(libPath);
    }
    if (!fs3.existsSync(utilsPath)) {
      await fs3.writeFile(
        utilsPath,
        `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`
      );
      spinner.succeed(chalk2.green("Created src/lib/utils.ts"));
    } else {
      spinner.info(chalk2.blue("src/lib/utils.ts already exists. Skliping..."));
    }
    spinner.succeed(chalk2.green("Initialization complete!"));
    console.log(chalk2.yellow("\nMake sure you have the following dependencies installed:"));
    console.log(chalk2.cyan("npm install clsx tailwind-merge framer-motion lucide-react"));
  } catch (error) {
    spinner.fail(chalk2.red("Failed to initialize Auralix UI."));
    console.error(error);
    process.exit(1);
  }
});

// src/bin.ts
async function main() {
  const packageInfo = await getPackageInfo();
  const program = new Command3().name("auralix-ui").description("Add Auralix UI components to your project").version(packageInfo.version || "1.0.0", "-v, --version", "display the version number");
  program.addCommand(init);
  program.addCommand(add);
  program.parse();
}
main();
//# sourceMappingURL=bin.mjs.map