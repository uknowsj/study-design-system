import esbuild from "esbuild";

const watch = process.argv.includes("--watch");
const baseConfig = {
  entryPoints: ["src/index.js"],
  outdir: "dist",
  bundle: true,
  minify: true,
  watch,
};
esbuild.build({
  ...baseConfig,
  format: "esm",
});

esbuild.build({
  ...baseConfig,
  format: "cjs",
  outExtension: {
    ".js": ".cjs",
  },
});
