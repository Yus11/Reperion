import React, { FC } from "react"
import Image from "next/image"

import { Button } from "@/components"
import { Publications } from "@/types"

interface ICard extends Publications {
  theme: "black" | "white"
  className?: string
}

export const Card: FC<ICard> = ({ title, image, newsSection, date, resourceLink, theme, className = "" }) => (
  <article
    className={`group h-[450px] w-full max-w-[456px] ${
      theme === "black" ? "bg-black bg-card-gradient" : "border-[1px] border-gray-light bg-white"
    } ${className}`}
  >
    <Image src={image} alt={title} width={456} height={240} />
    <div className="px-6 py-4">
      <div className="flex w-full items-center justify-between lg:flex-col lg:items-start lg:gap-1">
        <p className="text-caption uppercase text-primary-light">{newsSection}</p>
        <span className="text-paragraph text-gray-dark-100">{date}</span>
      </div>
      <h2
        className={`mb-8 mt-6 line-clamp-2 text-ellipsis text-subtitle ${
          theme === "black" ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      <a href={resourceLink} target="_blank">
        <Button variant="outlined" className="group-hover:text-primary-main">
          Learn more
        </Button>
      </a>
    </div>
  </article>
)
