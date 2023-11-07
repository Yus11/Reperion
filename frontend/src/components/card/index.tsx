import React, { FC } from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components"
import { formattedDate } from "@/utils"

interface ICard {
  title: string
  image: string
  category: string
  publicationDate: string
  slug: string
  theme: "black" | "white"
  className?: string
}

export const Card: FC<ICard> = ({ title, image, category, publicationDate, slug, theme, className = "" }) => (
  <article
    className={`group h-[450px] max-w-[456px] ${
      theme === "black" ? "" : "border-[1px] border-gray-light bg-white hover:shadow-card-hover"
    } ${className}`}
  >
    <div className="overflow-hidden">
      <Image
        src={image}
        alt={title}
        className="transition-scale relative duration-200 group-hover:scale-125"
        width={456}
        height={240}
      />
    </div>
    <div className={`px-6 py-4 ${theme === "black" ? "bg-card-gradient group-hover:bg-black-card-gradient" : ""}`}>
      <div className="flex w-full items-center justify-between lg:flex-col lg:items-start lg:gap-1">
        <p className="text-caption uppercase text-primary-light">{category}</p>
        <span className="text-paragraph text-gray-dark-100">{formattedDate(publicationDate)}</span>
      </div>
      <h2
        className={`mb-8 mt-6 line-clamp-2 text-ellipsis text-subtitle ${
          theme === "black" ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      {slug && (
        <Link className="flex max-w-max" href={slug}>
          <Button variant="outlined" className="group-hover:text-primary-main">
            Learn more
          </Button>
        </Link>
      )}
    </div>
  </article>
)
