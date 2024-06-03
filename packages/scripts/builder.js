const { build, context } = require("esbuild");

async function buildPackage({ entryPoints = ["src/index.ts"], pkg, config }) {
  const watch = process.argv.includes("--watch");

  const external = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ];

  const baseConfig = {
    entryPoints,
    outdir: "dist",
    bundle: true,
    minify: true,
    sourcemap: true,
    outdir: "dist",
    target: "es2020",
    external,
    ...config,
  };

  try {
    const cjsConfig = {
      ...baseConfig,
      format: "cjs",
      outExtension: { ".js": ".cjs" },
    };
    const esmConfig = {
      ...baseConfig,
      format: "esm",
    };

    if (watch) {
      const [cjsCtx, esmCtx] = await Promise.all([
        context(cjsConfig),
        context(esmConfig),
      ]);

      await cjsCtx.watch();
      await esmCtx.watch();
      console.log("watching...");
    } else {
      await Promise.all([build(cjsConfig), build(esmConfig)]);
      console.log("Build succeeded");
    }
  } catch (err) {
    console.log("Build failed", err);
    process.exit(1);
  }
}

module.exports = buildPackage;
