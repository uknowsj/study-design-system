import { colors } from "../tokens";
/**
 * --colors-primary: #123123
 */
export const semanticColors = {
  primary: { light: colors.orange[500], dark: colors.orange[300] },
  // TODO 값 변경 & 추가
  secondary: { light: colors.gray[600], dark: colors.gray[300] },
  tertiary: { light: colors.gray[600], dark: colors.gray[300] },
  bg: { light: colors.white, dark: colors.black },
  text: {
    primary: { light: colors.black, dark: colors.white },
    secondary: { light: colors.gray[600], dark: colors.gray[300] },
    // TODO 값 변경 & 추가
    disabled: { light: colors.gray[600], dark: colors.gray[300] },
  },
  state: {
    active: { light: colors.gray[600], dark: colors.gray[300] },
    notice: { light: colors.gray[600], dark: colors.gray[300] },
    positive: { light: colors.gray[600], dark: colors.gray[300] },
    negative: { light: colors.gray[600], dark: colors.gray[300] },
  },
};
