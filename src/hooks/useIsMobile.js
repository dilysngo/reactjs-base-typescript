import { useEffect, useState } from 'react'

const useIsMobile = (width = 575) => {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(`(max-width: ${width}px)`).matches)
  useEffect(() => {
    // Create listeners for each media query returning a function to unsubscribe
    function handlers() {
      const mql = window.matchMedia(`(max-width: ${width}px)`)

      const handler = (matchMediaQuery) => {
        setIsMobile(matchMediaQuery.matches)
      }

      // Safari < 14 fix
      if (mql.addEventListener) {
        mql.addEventListener('change', handler)
      }

      return () => {
        // Safari < 14 fix
        if (mql.removeEventListener) {
          mql.removeEventListener('change', handler)
        }
      }
    }
    handlers()

    return () => {
      handlers()
    }
  }, [width])

  return isMobile
}

export default useIsMobile
