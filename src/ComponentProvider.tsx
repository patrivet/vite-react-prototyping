import { useState, useEffect, useMemo, ReactNode } from 'react'
import { ThemeProvider, Global, css } from '@emotion/react'
import { extractFontImports } from './globalFontStyles/FontStyles'
import { Theme } from './types'

interface SSGComponentProviderProps {
  children: ReactNode
}

export default function SSGComponentProvider ({ children } : SSGComponentProviderProps) {
  const [theme, setTheme] = useState<Theme | null>(null)
  useEffect(() => {
    fetch('https://theme-configs.dock-yard.io/themes?newVersion=1')
      .then((response) => response.json())
      .then((data) => {
        const brandTheme = data.find(
          (_brand: { name: string }) => _brand.name === 'holidayextras'
        )
        setTheme(brandTheme)
      })
  }, [])
  
  const fontStyles = useMemo(() => theme ? extractFontImports(theme) : '', [theme])
  if(!theme) return null
  const bodyStyle = `body { background-color: ${theme.surface.main.value}; }`
  const globalStyles = css`${fontStyles}${bodyStyle}`
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles}/>
      {children}
    </ThemeProvider>
  )
}