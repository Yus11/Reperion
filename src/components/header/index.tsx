import React, { FC, memo, MouseEventHandler, useCallback, useEffect, useState } from "react"
import Link from "next/link"

import { Logo } from "@/icons"
import { useWindowWidth } from "@/utils"

import { useScrollDirection } from "./_utils"
import { Navigation } from "./fragments"

import styles from "./_styles.module.css"

export const Header: FC = memo(() => {
  const { scrollDirection, scrolled } = useScrollDirection()
  const windowWidth = useWindowWidth()
  const [openMenu, setOpenMenu] = useState(false)

  const toggleOpenMenu = useCallback<MouseEventHandler<HTMLButtonElement | HTMLDivElement>>(() => {
    windowWidth < 1200 && setOpenMenu((prevState) => !prevState)
  }, [windowWidth])

  useEffect(() => {
    document.body.style.overflow = openMenu && windowWidth < 1200 ? "hidden" : "unset"
  }, [openMenu, windowWidth])

  return (
    <header
      className={`${styles.header} ${scrollDirection === "down" ? "-top-[100%]" : "top-0"} ${
        scrolled || openMenu ? "bg-white" : "bg-[transparent]"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className={openMenu ? "invisible" : "visible"}>
          <Logo className="h-[56px] w-[182px]" />
        </Link>
        {windowWidth > 1199 ? (
          <div className="flex items-center">
            <Navigation openMenu={openMenu} toggleOpenMenu={toggleOpenMenu} windowWidth={windowWidth} />
            <Link href="#" className={styles.contact_button}>
              Contact Us
            </Link>
          </div>
        ) : (
          <div className="flex items-center">
            <Link href="#" className={`${styles.contact_button} ${openMenu ? "invisible" : "visible"}`}>
              Contact Us
            </Link>
            <button className={styles.mobile_menu_button} onClick={toggleOpenMenu} aria-label="Navigation menu button">
              <span className={`${styles.mobile_menu_lines} ${openMenu ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`${styles.mobile_menu_lines} ${openMenu ? "opacity-0" : "bg-[#141515]"}`} />
              <span className={`${styles.mobile_menu_lines} ${openMenu ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        )}
      </div>
      {windowWidth < 1200 && (
        <div className="hidden xl:block">
          <Navigation openMenu={openMenu} toggleOpenMenu={toggleOpenMenu} windowWidth={windowWidth} />
        </div>
      )}
    </header>
  )
})
