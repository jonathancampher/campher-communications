
import * as React from "react"

const MOBILE_BREAKPOINT = 768

/**
 * useIsMobile hook
 * 
 * Denne hooken sjekker om nåværende skjermstørrelse er mindre enn den definerte
 * mobilgrensen (768px) og returnerer en boolsk verdi som indikerer om enheten
 * er i mobilvisning.
 * 
 * @returns {boolean} True hvis skjermstørrelsen er mindre enn mobilgrensen
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}
