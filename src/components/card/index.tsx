import React, { FC } from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components"

interface ICard {
  title: string
  image: string
  category: string
  createdAt: string
  slug: string
  theme: "black" | "white"
  className?: string
}

export const Card: FC<ICard> = ({ title, image, category, createdAt, slug, theme, className = "" }) => {
  const date = new Date(createdAt)

  const publicationDate = `${date.getDate()} ${date.toLocaleString("en-us", { month: "short" })}`

  return (
    <article
      className={`group h-[450px] w-full max-w-[456px] ${
        theme === "black" ? "bg-black bg-card-gradient" : "border-[1px] border-gray-light bg-white"
      } ${className}`}
    >
      <Image src={image} alt={title} width={456} height={240} />
      <div className="px-6 py-4">
        <div className="flex w-full items-center justify-between lg:flex-col lg:items-start lg:gap-1">
          <p className="text-caption uppercase text-primary-light">{category}</p>
          <span className="text-paragraph text-gray-dark-100">{publicationDate}</span>
        </div>
        <h2
          className={`mb-8 mt-6 line-clamp-2 text-ellipsis text-subtitle ${
            theme === "black" ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h2>
        <Link href={slug}>
          <Button variant="outlined" className="group-hover:text-primary-main">
            Learn more
          </Button>
        </Link>
      </div>
    </article>
  )
}
