import * as theme from "../dist/index.js";
import fs from "fs";

// TODO 테스트 후 util 추가
/**
 * tokens로 부터 css 파일 만드는 함수
 * :root {
 *  --gray-500: #123
 *  --colors-text-primary:   // 시맨틱컬러?
 *  --colors-prmiary
 * }
 */
export const createCss = () => {
  const cssString = [];

  Object.entries(theme.tokens).forEach(([key, value]) => {
    console.log("key", key, "value", value);
    switch (key) {
      case "colors":
        Object.entries(value).forEach(([colorKey, colorValue]) => {});
        break;
      case "default":
        break;
    }
  });

  return cssString;
};

createCss();

fs.writeFileSync("../dist/theme.css", "CSS");
