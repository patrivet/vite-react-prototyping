/* eslint-disable @typescript-eslint/no-explicit-any */
interface DesignToken {
  type: string,
  value: string | number | Record<string, unknown>
}

export const variantValues = ['primary', 'secondary', 'yellow', 'blue', 'green', 'orange', 'red', 'light', 'danger', 'warning', 'info', 'success', 'unavailable'] as const
export type Variant = typeof variantValues[number]

export interface DesignTokenInDisplayMode extends DesignToken {
  path: string
}

interface ButtonBorder {
  radius: DesignToken;
  width: DesignToken;
}

export interface Palette {
  main: DesignToken;
  dark: DesignToken;
  light50: DesignToken;
  light30: DesignToken;
  light10: DesignToken;
  muted: DesignToken;
  contrastText: DesignToken;
}

interface GreysPalette {
  black: DesignToken;
  greyDark: DesignToken;
  grey: DesignToken;
  grey50: DesignToken;
  grey30: DesignToken;
  grey10: DesignToken;
  contrast: DesignToken;
  white: DesignToken;
}

export interface Palettes {
  primary: Palette;
  secondary: Palette;
  blue: Palette;
  green: Palette;
  orange: Palette;
  red: Palette;
  yellow: Palette;
  greys: GreysPalette;
}

interface Surface {
  main: DesignToken;
  faint: DesignToken;
}

export interface Borders {
  color: DesignToken;
  width: {
    base: DesignToken;
    sml: DesignToken;
    med: DesignToken;
    lrg: DesignToken;
  }
  radius: {
    base: DesignToken;
    sml: DesignToken;
    med: DesignToken;
    lrg: DesignToken;
  }
  buttons: {
    xs: ButtonBorder;
    sml: ButtonBorder;
    base: ButtonBorder;
    lrg: ButtonBorder;
    xl: ButtonBorder;
    xxl: ButtonBorder;
  }
}

export interface FontFormat {
  url: string;
  format: string;
  weight: number
}

export interface TypographyValue {
  family: string
  weightRegular: number
  weightBold?: number
  formats: Array<FontFormat>
}

export interface TypographyDesignToken {
  type: string
  value: TypographyValue
}

export interface Typography {
  headers: TypographyDesignToken
  body: TypographyDesignToken
}

export interface Shadows {
  xs: { boxShadow: DesignToken }
  base: { boxShadow: DesignToken }
  lrg: { boxShadow: DesignToken }
  xl: { boxShadow: DesignToken }
}

export interface GenericComponentTokens {
  [key: string]: DesignToken | DesignTokenInDisplayMode | object
}

export interface ButtonOverrideStates {
  default: any
  active: any
  hover: any
  disabled: any
}

export interface TypographyOverrides {
  color: TypographyDesignToken
}

interface ButtonOverrideVariants {
  primary: ButtonOverrideStates
  secondary: ButtonOverrideStates
  success: ButtonOverrideStates
  warning: ButtonOverrideStates
  info: ButtonOverrideStates
  danger: ButtonOverrideStates
}

export interface Component {
  styles: {
    [key: string]: ButtonOverrideVariants | GenericComponentTokens
  }
}

export interface Theme {
  name: string
  mode: string
  palette: Palettes
  borders: Borders
  typography: Typography
  shadows: Shadows
  surface: Surface
  components: {
    [key: string]: Component
  }
}

export interface UnformattedTheme {
  themeName: string;
  themeValues: string;
}

export interface Tracking {
  trackName: string
  trackValue?: string
}

export type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'