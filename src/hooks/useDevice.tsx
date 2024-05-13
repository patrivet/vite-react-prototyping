import { useState, useEffect } from 'react'

export enum ViewPort {
  MOBILE = 768,
  TABLET = 991
}

interface Devices {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}
const useDevice = (): Devices => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(false)
      setIsTablet(false)
      setIsDesktop(false)
      if (window.innerWidth <= ViewPort.MOBILE) {
        setIsMobile(true)
      } else if (window.innerWidth <= ViewPort.TABLET) {
        setIsTablet(true)
      } else {
        setIsDesktop(true)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return { isMobile, isTablet, isDesktop }
}
export default useDevice
