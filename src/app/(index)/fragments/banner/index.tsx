import React, { FC } from "react"

import { Button } from "@/components"

import styles from "./_styles.module.css"

export const Banner: FC = () => (
  <section className={styles.hero_banner}>
    <div className="container z-[2] flex flex-col items-center py-0">
      <h1 className="text-center text-h1 font-semibold text-primary-main xl:text-[64px]">
        Securing Mobile <span className="font-normal text-black 1xl:block">Operating Assets </span>
        <span className="mt-6 block text-subtitle font-semibold text-gray-dark-100">
          From Cyber and Drone <span className="text-black">Attacks Across Land, Sea and Air.</span>
        </span>
      </h1>
      <Button variant="filled" className="mt-[64px] xl:mt-12 md:w-full">
        Get started
      </Button>
      <div className="mt-[160px] w-full xl:mt-20">
        <h2 className="text-subtitle uppercase">Latest Resources</h2>
        <div className="mt-6 flex justify-between gap-8 md:flex-col">
          {[
            {
              tag: "Medium blog",
              date: "24 May",
              title: "The Cyber Vulnerabilities of Dynamic Positioning Systems",
              link: "#",
            },
            {
              tag: "Academic Publications",
              date: "15 February",
              title: "Cybersecurity Solutions for the Aviation Industry",
              link: "#",
            },
          ].map(({ tag, date, title, link }, index) => (
            <article key={index} className={styles.article_news}>
              <div className="flex items-center justify-between lg:flex-col lg:items-start">
                <p className="text-caption uppercase text-primary-main">{tag}</p>
                <span className="text-paragraph font-normal text-gray-dark-100">{date}</span>
              </div>
              <h3 className="my-6 line-clamp-2 text-h6 font-bold xl:text-[24px]">{title}</h3>
              <a href={link} target="_blank">
                <Button variant="outlined">Learn more</Button>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
    <video className={styles.video} autoPlay muted loop>
      <source src="/main-page-banner-bg.mp4" type="video/mp4" />
    </video>
  </section>
)
