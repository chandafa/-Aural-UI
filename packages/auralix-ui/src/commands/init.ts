import { Command } from "commander";
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import ora from "ora";

export const init = new Command()
  .name("init")
  .description("Initialize Auralix UI in your project")
  .action(async () => {
    const spinner = ora("Initializing Auralix UI...").start();

    try {
      const cwd = process.cwd();
      const libPath = path.resolve(cwd, "src/lib");
      const utilsPath = path.join(libPath, "utils.ts");

      // Create lib directory if it doesn't exist
      if (!fs.existsSync(libPath)) {
        await fs.ensureDir(libPath);
      }

      // Create utils.ts if it doesn't exist
      if (!fs.existsSync(utilsPath)) {
        await fs.writeFile(
          utilsPath,
          `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`
        );
        spinner.succeed(chalk.green("Created src/lib/utils.ts"));
      } else {
        spinner.info(chalk.blue("src/lib/utils.ts already exists. Skliping..."));
      }
      
      spinner.succeed(chalk.green("Initialization complete!"));
      
      // Check for dependencies
       console.log(chalk.yellow("\nMake sure you have the following dependencies installed:"));
       console.log(chalk.cyan("npm install framer-motion"));

    } catch (error) {
      spinner.fail(chalk.red("Failed to initialize Auralix UI."));
      console.error(error);
      process.exit(1);
    }
  });
