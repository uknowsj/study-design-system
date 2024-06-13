import buildPackage from "@design-system/scripts";
import pkg from "./package.json" assert { type: "json" };

buildPackage({ pkg });
