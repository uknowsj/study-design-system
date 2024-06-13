import { style } from "@vanilla-extract/css";
import { tokens } from "@design-system/themes";

export const boxStyle = style({
  width: "150px",
  height: "150px",
  backgroundColor: tokens.colors.orange[500],
});
