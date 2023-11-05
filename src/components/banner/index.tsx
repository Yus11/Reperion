import React, { FC } from "react"

import styles from "./_styles.module.css"

interface IBanner {
  title: string[]
  subtitle: string[]
}

export const Banner: FC<IBanner> = ({ title, subtitle }) => (
  <section className={styles.pages_banner}>
    <h1 className={styles.heading}>
      {title[0]} <span className="font-normal text-black 1xl:block">{title[1]}</span>
      <span className="mt-6 block text-subtitle font-semibold text-gray-dark-100 md:text-[20px]">
        {subtitle[0]} <span className="text-black">{subtitle[1]}</span>
      </span>
    </h1>
    <video className={styles.video_bg} autoPlay muted loop>
      <source src="/banner-secondary.mp4" type="video/mp4" />
    </video>
  </section>
)
