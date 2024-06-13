import buildPackage from "@design-system/scripts";
import pkg from "./package.json" assert { type: "json" };
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

const config = {
  plugins: [vanillaExtractPlugin()],
};
buildPackage({ pkg, entryPoints: ["src/index.ts"], config });
