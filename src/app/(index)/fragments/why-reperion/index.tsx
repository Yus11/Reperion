import React, { FC } from "react"

import { advantages } from "./_constants"

import styles from "./_styles.module.css"

export const WhyReperion: FC = () => (
  <section className="bg-black">
    <div className="container">
      <h1 className="adaptive-title">
        Why <span className="block font-normal text-white xl:inline md:block">Reperion?</span>
      </h1>
      <ul className="mt-[64px] flex overflow-hidden xl:flex-wrap xl:gap-y-8 lg:mt-10 md:flex-col md:gap-y-4">
        {advantages.map(({ icon, text }, index) => (
          <li key={index} className={`${styles.card_container} ${index > 1 ? styles.card_container_tablet : ""}`}>
            {icon}
            <h2 className="text-paragraph font-bold text-white">
              {text[0]} <span className="font-normal text-gray-dark-100">{text[1]}</span>
            </h2>
          </li>
        ))}
      </ul>
    </div>
  </section>
)
