import React, { FC } from "react"
import Image from "next/image"

import { Button } from "@/components"

interface ICard {
  title: string
  image: string
  article: string
  date: string
  link: string
  isDark: boolean
  className?: string
}

export const Card: FC<ICard> = ({ title, image, article, date, link, isDark, className = "" }) => (
  <article
    className={`group h-[450px] w-full max-w-[456px] ${isDark ? "bg-black bg-card-gradient" : "bg-white"} ${className}`}
  >
    <Image src={image} alt={title} width={456} height={240} />
    <div className="px-6 py-4">
      <div className="flex w-full items-center justify-between">
        <p className="text-caption uppercase text-primary-light">{article}</p>
        <span className="text-paragraph text-gray-dark-100">{date}</span>
      </div>
      <h1 className={`mb-8 mt-6 line-clamp-2 text-subtitle ${isDark ? "text-white" : "text-black"}`}>{title}</h1>
      <a href={link} target="_blank">
        <Button variant="outlined" className="group-hover:text-primary-main">
          Learn more
        </Button>
      </a>
    </div>
  </article>
)
