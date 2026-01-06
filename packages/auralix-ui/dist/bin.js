#!/usr/bin/env node
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/bin.ts
var import_commander3 = require("commander");

// src/utils/get-package-info.ts
var import_path = __toESM(require("path"));
var import_fs_extra = __toESM(require("fs-extra"));
async function getPackageInfo() {
  const packageJsonPath = import_path.default.join(__dirname, "..", "package.json");
  return await import_fs_extra.default.readJSON(packageJsonPath);
}

// src/commands/add.ts
var import_commander = require("commander");
var import_fs_extra2 = __toESM(require("fs-extra"));
var import_path2 = __toESM(require("path"));
var import_chalk = __toESM(require("chalk"));
var import_ora = __toESM(require("ora"));
var import_prompts = __toESM(require("prompts"));
var add = new import_commander.Command().name("add").description("Add a component to your project").argument("[components...]", "The components to add").option("-y, --yes", "Skip confirmation prompt", false).option("-o, --overwrite", "Overwrite existing files", false).action(async (components, options) => {
  const spinner = (0, import_ora.default)("Checking components...").start();
  try {
    if (!components || components.length === 0) {
      spinner.stop();
      const response = await (0, import_prompts.default)({
        type: "text",
        name: "component",
        message: "Enter the component name:"
      });
      if (!response.component) {
        console.log(import_chalk.default.yellow("No component specified. Exiting."));
        process.exit(0);
      }
      components = [response.component];
      spinner.start();
    }
    const cwd = process.cwd();
    const targeDir = import_path2.default.resolve(cwd, "src/components/ui");
    if (!import_fs_extra2.default.existsSync(targeDir)) {
      await import_fs_extra2.default.ensureDir(targeDir);
    }
    const componentsSourceDir = import_path2.default.join(__dirname, "..", "src", "components");
    for (const component of components) {
      spinner.text = `Installing ${component}...`;
      const files = await import_fs_extra2.default.readdir(componentsSourceDir);
      const componentFile = files.find((f) => f.toLowerCase() === component.toLowerCase() + ".tsx");
      if (!componentFile) {
        spinner.warn(import_chalk.default.yellow(`Component "${component}" not found.`));
        continue;
      }
      const sourcePath = import_path2.default.join(componentsSourceDir, componentFile);
      const targetPath = import_path2.default.join(targeDir, componentFile);
      if (import_fs_extra2.default.existsSync(targetPath) && !options.overwrite) {
        spinner.stop();
        const response = await (0, import_prompts.default)({
          type: "confirm",
          name: "overwrite",
          message: `Component "${component}" already exists. Overwrite?`,
          initial: false
        });
        spinner.start();
        if (!response.overwrite) {
          spinner.info(import_chalk.default.blue(`Skipped ${component}`));
          continue;
        }
      }
      let content = await import_fs_extra2.default.readFile(sourcePath, "utf-8");
      content = content.replace(/from "\.\.\/utils"/g, 'from "@/lib/utils"');
      await import_fs_extra2.default.writeFile(targetPath, content);
      spinner.succeed(import_chalk.default.green(`Installed ${component}`));
    }
    spinner.stop();
    console.log(import_chalk.default.green("\nSuccess! Components installed."));
  } catch (error) {
    spinner.fail(import_chalk.default.red("Failed to add components."));
    console.error(error);
    process.exit(1);
  }
});

// src/commands/init.ts
var import_commander2 = require("commander");
var import_fs_extra3 = __toESM(require("fs-extra"));
var import_path3 = __toESM(require("path"));
var import_chalk2 = __toESM(require("chalk"));
var import_ora2 = __toESM(require("ora"));
var init = new import_commander2.Command().name("init").description("Initialize Auralix UI in your project").action(async () => {
  const spinner = (0, import_ora2.default)("Initializing Auralix UI...").start();
  try {
    const cwd = process.cwd();
    const libPath = import_path3.default.resolve(cwd, "src/lib");
    const utilsPath = import_path3.default.join(libPath, "utils.ts");
    if (!import_fs_extra3.default.existsSync(libPath)) {
      await import_fs_extra3.default.ensureDir(libPath);
    }
    if (!import_fs_extra3.default.existsSync(utilsPath)) {
      await import_fs_extra3.default.writeFile(
        utilsPath,
        `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`
      );
      spinner.succeed(import_chalk2.default.green("Created src/lib/utils.ts"));
    } else {
      spinner.info(import_chalk2.default.blue("src/lib/utils.ts already exists. Skliping..."));
    }
    spinner.succeed(import_chalk2.default.green("Initialization complete!"));
    console.log(import_chalk2.default.yellow("\nMake sure you have the following dependencies installed:"));
    console.log(import_chalk2.default.cyan("npm install framer-motion"));
  } catch (error) {
    spinner.fail(import_chalk2.default.red("Failed to initialize Auralix UI."));
    console.error(error);
    process.exit(1);
  }
});

// src/bin.ts
async function main() {
  const packageInfo = await getPackageInfo();
  const program = new import_commander3.Command().name("auralix-ui").description("Add Auralix UI components to your project").version(packageInfo.version || "1.0.0", "-v, --version", "display the version number");
  program.addCommand(init);
  program.addCommand(add);
  program.parse();
}
main();
//# sourceMappingURL=bin.js.map