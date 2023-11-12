"use client"
import React, { FC } from "react"

import { useWindowWidth } from "@/utils"

import { industriesOptions } from "./_constants"

import styles from "./_styles.module.css"

export const Industries: FC = () => {
  const windowWidth = useWindowWidth()
  return (
    <section id="industries" className={styles.section_container}>
      <div className="container flex justify-between gap-[64px] xl:flex-col">
        <div className="max-w-[578px] flex-1 xl:flex xl:max-w-full xl:justify-between xl:gap-12 md:flex-col md:gap-10">
          <h1 className="adaptive-title">Industries</h1>
          <div className="mt-10 xl:mt-0">
            <h2 className="mb-6 text-h6 text-white lg:text-[24px]">
              Reperion offers protection from cyber and drone attacks.
            </h2>
            <p className="text-paragraph text-gray-main">
              The maritime, automotive, and aerospace industries each have their own set of threats and attack types. We
              have developed products and services for each individual industry.
            </p>
          </div>
        </div>
        <ul className="flex max-w-[700px] flex-1 flex-col gap-12 xl:max-w-full lg:gap-10">
          {industriesOptions.map(({ title, description }, index) => (
            <li key={index} className="flex gap-6">
              <span className="text-[24px] text-paragraph text-primary-light">0{index + 1}</span>
              <div>
                <h3 className="text-h6 font-bold text-white lg:text-[24px]">{title}</h3>
                <p className="mt-6 text-paragraph text-gray-main">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {windowWidth > 767 && (
        <div className={styles.video}>
          <video className="absolute top-0" autoPlay muted loop>
          <source src="/industries-bg.mp4" type="video/mp4" />
        </video>
        </div>
      )}
    </section>
  )
}
