const buildPackage = require("./builder");
const pkg = require("./package.json");

buildPackage({ pkg, config: {}, entryPoints: ["index.ts"] });
