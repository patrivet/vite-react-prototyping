import { useEffect, useState } from 'react'

interface Browsers {
  isChrome: boolean
  isSafari: boolean
}
const useBrowser = (): Browsers => {
  const [isChrome] = useState(navigator.userAgent.includes('Chrome'))
  const [isSafari, setIsSafari] = useState(navigator.userAgent.includes('Safari'))

  useEffect(() => {
    if (isSafari) {
      if (isChrome) {
        setIsSafari(false)
      }
    }
  }, []) // eslint-disable-line

  return {
    isChrome,
    isSafari
  }
}

export default useBrowser
