"use client"
import React, { FC, MouseEventHandler, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button } from "@/components"
import { useToggle } from "@/utils"

import { scrollIntoTargetId } from "../_utils"

import styles from "./_styles.module.css"

interface INavigation {
  openMenu: boolean
  toggleOpenMenu: MouseEventHandler<HTMLElement>
  windowWidth: number
}

export const Navigation: FC<INavigation> = ({ openMenu, toggleOpenMenu, windowWidth }) => {
  const pathName = usePathname()
  const [isOpenDropDown, handleOpenDropDown] = useToggle(false)

  const generateStyles = useCallback(
    (desktopStyles: string, mobileStyles: string) => (windowWidth > 1199 ? desktopStyles : mobileStyles),
    [windowWidth]
  )

  return (
    <div
      className={`${styles.nav_container} ${openMenu ? "xl:h-[100vh] xl:max-h-[100vh]" : "xl:max-h-0"}`}
      onClick={toggleOpenMenu}
    >
      <nav aria-label="Header navigation" className={styles.navigation} onClick={(event) => event.stopPropagation()}>
          <Link
            href="/"
            className={`${styles.navigation_links} ${pathName === "/" ? "text-primary-main" : ""}`}
            onClick={(event) => {
              scrollIntoTargetId(event, "what-we-do", toggleOpenMenu)
            }}
          >
            About Us
          </Link>
        <div className="group relative">
          <button
            className={`${styles.navigation_links} xl:w-full xl:items-center xl:justify-between`}
            onClick={windowWidth < 1200 ? handleOpenDropDown : undefined}
          >
            Products
            <svg
              className={`ml-1 transition-all duration-200 ${generateStyles(
                "group-hover:rotate-180",
                `${isOpenDropDown ? "rotate-180" : ""}`
              )} md:h-5 md:w-5`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984L16.59 8.58984Z"
                fill="#C8C8C8"
                className={generateStyles("group-hover:fill-black", "xl:fill-black")}
              />
            </svg>
          </button>
          <div
            className={`${styles.resources_box} ${generateStyles(
              "group-hover:scale-100",
              `${isOpenDropDown ? "xl:max-h-[76px]" : "xl:max-h-0"}`
            )}`}
          >
            <Link
              href={"/cybersecurity"}
              className={pathName === "/cybersecurity" ? "text-primary-main" : ""}
              onClick={toggleOpenMenu}
            >
              Cybersecurity
            </Link>
            <Link
              href={"/counter-drone"}
              onClick={toggleOpenMenu}
              className={pathName === "/counter-drone" ? "text-primary-main" : ""}
            >
              Counter-Drone
            </Link>
          </div>
        </div>
        <Link
          href={"/resources"}
          className={`${styles.navigation_links} ${pathName === "/resources" ? "text-primary-main" : ""}`}
          onClick={toggleOpenMenu}
        >
          Resources
        </Link>
        <Button
          className="hidden !w-full md:mt-[64px] md:block"
          onClick={(event) => scrollIntoTargetId(event, "contact-us", toggleOpenMenu)}
        >
          Contact Us
        </Button>
      </nav>
    </div>
  )
}
