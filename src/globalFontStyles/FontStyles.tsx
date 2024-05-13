/* eslint-disable @typescript-eslint/no-explicit-any */
import { Theme, FontFormat, TypographyDesignToken } from '../types'
import { globalFonts } from './GlobalFonts.definitions'
import { FontTypes } from './Fonts.type'

const getFontFaces = (currentFont: TypographyDesignToken): string => {
  let coreFontFaces = ''
  const fontFormats = currentFont.value.formats

  for (const format of fontFormats) {
    const fontFaceString = (family: string, format: FontFormat) => `
      @font-face {
        font-family: ${family};
        font-weight: ${format.weight};
        src: url(${format.url}) format(${format.format});
      }
    `
    coreFontFaces += fontFaceString(currentFont.value.family, format)
  }
  return coreFontFaces
}

const buildFonts = (fontsGroup: Record<FontTypes | string, any>): string => {
  let fontFaces = ''
  const fontsGroupKeys = Object.keys(fontsGroup)
  for (const font of fontsGroupKeys) {
    const currentFont: TypographyDesignToken = fontsGroup[font]

    if (!currentFont) continue

    fontFaces += getFontFaces(currentFont)
  }
  return fontFaces
}

export const extractFontImports = (theme: Theme): string => {
  return buildFonts(theme.typography)
    .concat(buildFonts(globalFonts))
}
