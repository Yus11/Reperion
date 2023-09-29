"use client"
import React, { MouseEventHandler, useCallback, useEffect, useState } from "react"
import Link from "next/link"

import { useToggle, useWindowWidth } from "@/utils"

import styles from "./_styles.module.css"

export const Navigation = () => {
  const [isOpenDropDown, handleOpenDropDown] = useToggle(true)
  const [openMenu, setOpenMenu] = useState(false)
  const windowWidth = useWindowWidth()

  const toggleOpenMenu = useCallback<MouseEventHandler<HTMLButtonElement>>(() => {
    windowWidth < 1200 && setOpenMenu((prevState) => !prevState)
  }, [windowWidth])

  const generateStyles = useCallback(
    (desktopStyles: string, mobileStyles: string) => (windowWidth > 1199 ? desktopStyles : mobileStyles),
    [windowWidth]
  )

  useEffect(() => {
    document.body.style.overflow = openMenu && windowWidth < 1200 ? "hidden" : "unset"
  }, [openMenu, windowWidth])

  return (
    <div className="flex w-full max-w-[576px] items-center xl:max-w-full xl:justify-end">
      <nav
        aria-label="Header navigation"
        className={`${styles.navigation} ${openMenu ? "xl:right-0 xl:w-[400px] md:w-full" : "xl:invisible xl:w-0"}`}
      >
        <Link href="/" className="text-paragraph font-semibold hover:text-primary-main">
          About Us
        </Link>
        <div className="group relative">
          <button
            className="flex text-paragraph font-semibold"
            onClick={windowWidth < 1200 ? handleOpenDropDown : undefined}
          >
            Products
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-1 transition-all duration-200 ${generateStyles(
                "group-hover:rotate-180",
                `${isOpenDropDown ? "rotate-180" : ""}`
              )}`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984L16.59 8.58984Z"
                fill="#C8C8C8"
                className={generateStyles("group-hover:fill-black", "")}
              />
            </svg>
          </button>
          <div
            className={`${styles.resources_box} ${generateStyles(
              "group-hover:scale-100",
              `${isOpenDropDown ? "xl:!static xl:!scale-100" : ""}`
            )}`}
          >
            <Link href="/cybersecurity" className="px-5 py-2 hover:bg-gray-dark-200 hover:text-primary-main">
              Cybersecurity
            </Link>
            <Link href="/counter-drone" className="px-5 py-2 hover:bg-gray-dark-200 hover:text-primary-main">
              Counter-Drone
            </Link>
          </div>
        </div>
        <Link href="/resources" className="text-paragraph font-semibold hover:text-primary-main">
          Resources
        </Link>
        <Link href="/contact-us" className={`hidden text-paragraph font-semibold hover:text-primary-main md:block`}>
          Contact Us
        </Link>
      </nav>
      <Link href="/contact-us" className={`${styles.contact_button} md:hidden`}>
        Contact Us
      </Link>
      <button
        className={`${styles.mobile_menu_button} ${openMenu ? "-mt-8" : ""}`}
        onClick={toggleOpenMenu}
        aria-label="Navigation menu button"
      >
        <span
          className={`${styles.mobile_menu_lines} ${
            openMenu ? "translate-y-[7px] rotate-45 bg-white" : "bg-[#141515]"
          }`}
        />
        <span className={`${styles.mobile_menu_lines} ${openMenu ? "opacity-0" : "bg-[#141515]"}`} />
        <span
          className={`${styles.mobile_menu_lines} ${
            openMenu ? "-translate-y-[7px] -rotate-45 bg-white" : "bg-[#141515]"
          }`}
        />
      </button>
    </div>
  )
}
