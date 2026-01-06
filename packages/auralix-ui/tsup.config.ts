import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/styles.css", "src/bin.ts"],
  format: ["cjs", "esm", "iife"],
  globalName: "AuralixUI",
  dts: {
    entry: ["src/index.ts", "src/bin.ts"]
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  injectStyle: false,
});
