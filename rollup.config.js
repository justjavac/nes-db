import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs",
      format: "cjs",
    },
    {
      file: "dist/index.js",
      format: "es",
    },
  ],
  plugins: [
    nodeResolve({
      extensions: [".js", ".ts"],
    }),
  ],
};
