import { TypographyDesignToken } from '../types'

export const globalFonts: Record<string, TypographyDesignToken> = {
  numberPlate: {
    type: 'typography',
    value: {
      family: 'UKNumberPlate',
      weightRegular: 400,
      formats: [
        {
          url: 'https://d17s4kc6349e5h.cloudfront.net/holidayextras/assets/fonts/UKNumberPlate.woff',
          format: 'woff',
          weight: 400
        },
        {
          url: 'https://d17s4kc6349e5h.cloudfront.net/holidayextras/assets/fonts/UKNumberPlate.woff2',
          format: 'woff2',
          weight: 400
        },
        {
          url: 'https://d17s4kc6349e5h.cloudfront.net/holidayextras/assets/fonts/UKNumberPlate.ttf',
          format: 'truetype',
          weight: 400
        }
      ]
    }
  }
}
