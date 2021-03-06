import merge from "deepmerge";
import { createBasicConfig } from "@open-wc/building-rollup";
import typescript from "@rollup/plugin-typescript";
const baseConfig = createBasicConfig();

export default merge(baseConfig, {
  input: "./src/index.ts",
  output: {
    dir: "dist",
    format: "cjs",
    entryFileNames: 'index.js'
  },
  plugins: [typescript({ target: "es5", module: "commonjs" })],
});
