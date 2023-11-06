import { useEffect, useState } from "react"

export function useWindowWidth(): number {
  const [windowWidth, setWindowWidth] = useState<number>(0)

  function updateDimensions(): void {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    updateDimensions()

    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  return windowWidth
}
