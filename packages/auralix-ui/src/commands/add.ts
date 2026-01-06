import { Command } from "commander";
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import ora from "ora";
import prompts from "prompts";


export const add = new Command()
  .name("add")
  .description("Add a component to your project")
  .argument("[components...]", "The components to add")
  .option("-y, --yes", "Skip confirmation prompt", false)
  .option("-o, --overwrite", "Overwrite existing files", false)
  .action(async (components, options) => {
    const spinner = ora("Checking components...").start();

    try {
      if (!components || components.length === 0) {
        spinner.stop();
        const response = await prompts({
          type: "text",
          name: "component",
          message: "Enter the component name:",
        });
        if (!response.component) {
             console.log(chalk.yellow("No component specified. Exiting."));
             process.exit(0);
        }
        components = [response.component];
        spinner.start();
      }

      const cwd = process.cwd();
      // Assume components are in src/components/ui/
      const targeDir = path.resolve(cwd, "src/components/ui");

      if (!fs.existsSync(targeDir)) {
          await fs.ensureDir(targeDir);
      }

      // __dirname is dist/. Source is in ../src/components
      const componentsSourceDir = path.join(__dirname, "..", "src", "components");

      for (const component of components) {
        spinner.text = `Installing ${component}...`;
        
        // Handle PascalCase or kebab-case
        // We will simple assume the file exists as PascalCase.tsx for now
        // or iterate directory to find match.
        // Let's iterate directory to find case-insensitive match
        const files = await fs.readdir(componentsSourceDir);
        const componentFile = files.find(f => f.toLowerCase() === component.toLowerCase() + ".tsx");

        if (!componentFile) {
            spinner.warn(chalk.yellow(`Component "${component}" not found.`));
            continue;
        }

        const sourcePath = path.join(componentsSourceDir, componentFile);
        const targetPath = path.join(targeDir, componentFile);

        if (fs.existsSync(targetPath) && !options.overwrite) {
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

        let content = await fs.readFile(sourcePath, "utf-8");
        
        // Transform imports
        // replace "../utils" with "@/lib/utils"
        // replace "@/components/ui/..." with "./..." if it references other UI components (complex)
        // For now just handle the utils import
        content = content.replace(/from "\.\.\/utils"/g, 'from "@/lib/utils"');

        await fs.writeFile(targetPath, content);
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
