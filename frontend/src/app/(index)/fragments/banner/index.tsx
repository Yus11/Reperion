import React, { FC, useEffect, useState } from "react"
import Link from "next/link"

import { Button } from "@/components"
import { PublicationData } from "@/types"
import { formattedDate, getPublications } from "@/utils"

import styles from "./_styles.module.css"

export const Banner: FC = () => {
  const [error, setError] = useState<unknown>()
  const [data, setData] = useState<PublicationData | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    getPublications("pagination[pageSize]=2&filters[isFeatured][$eq]=true", setLoading, setData, setError)
  }, [])
  return (
    <section className={styles.hero_banner}>
      <div className="container z-[2] flex flex-col items-center py-0 md:items-stretch">
        <h1 className="max-w-[1200px] break-words text-center text-h1 font-semibold text-primary-main xl:text-[64px] md:inline-block md:max-w-none md:text-[56px]">
          Securing Transportation Assets from Cyber Attacks
          <span className="block font-normal text-black">and critical infrastructure from Drone Attacks</span>
          <span className="mt-6 block text-subtitle font-semibold text-gray-dark-100 md:text-[20px]">
            Across Land, <span className="text-black">Sea and Air.</span>
          </span>
        </h1>
        <div className="mt-[160px] w-full xl:mt-[180px]">
          <h2 className="text-subtitle uppercase">Latest Resources</h2>
          <div className="mt-6 flex justify-between gap-8 md:flex-col">
            {data?.data?.map(({ id, attributes: { category, title, publicationDate, slug } }) => (
              <article key={id} className={`group ${styles.article_news}`}>
                <div className="flex items-center justify-between lg:flex-col lg:items-start">
                  <p className="text-caption uppercase text-primary-main">{category}</p>
                  <span className="text-paragraph font-normal text-gray-dark-100">
                    {formattedDate(publicationDate, { month: "long" })}
                  </span>
                </div>
                <h3 className="my-6 line-clamp-2 text-h6 font-bold xl:text-[24px]">{title}</h3>
                <Link href={`resources/${slug}`}>
                  <Button variant="outlined" className="group-hover:text-primary-main">
                    Learn more
                  </Button>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.video}>
        <video className="min-h-max min-w-[130%] 1xl:min-w-[140%] xl:min-w-[200%] lg:min-w-[230%] md:min-w-[300%]" autoPlay muted loop playsInline>
          <source src="/main-page-banner-bg%20.mp4" type="video/mp4" />
          <source src="/main-page-banner-bg.webm" type="video/webm" />
        </video>
      </div>
    </section>
  )
}
