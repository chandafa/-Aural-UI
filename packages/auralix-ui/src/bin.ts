#!/usr/bin/env node

import { Command } from "commander";
import { getPackageInfo } from "./utils/get-package-info";
import { add } from "./commands/add";
import { init } from "./commands/init";

async function main() {
  const packageInfo = await getPackageInfo();

  const program = new Command()
    .name("auralix-ui")
    .description("Add Auralix UI components to your project")
    .version(packageInfo.version || "1.0.0", "-v, --version", "display the version number");

  program.addCommand(init);
  program.addCommand(add);

  program.parse();
}

main();
