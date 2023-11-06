"use client"
import React, { MouseEventHandler, useEffect, useState } from "react"

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"down" | "up" | null>(null)

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const updateScrollDirection = () => {
      const scrollY = window.scrollY
      const direction = scrollY > lastScrollY ? "down" : "up"
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener("scroll", updateScrollDirection)

    return () => {
      window.removeEventListener("scroll", updateScrollDirection)
    }
  }, [scrollDirection])

  return { scrollDirection, scrolled }
}

function scrollIntoTargetId(
  event: React.MouseEvent<HTMLElement, MouseEvent>,
  targetId: string,
  toggleOpenMenu?: MouseEventHandler<HTMLElement>
) {
  const target = document.getElementById(targetId)
  target?.scrollIntoView()
  toggleOpenMenu && toggleOpenMenu(event)
}

export { scrollIntoTargetId, useScrollDirection }
