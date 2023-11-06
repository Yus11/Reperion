import React, { FC } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Button, Card } from "@/components"
import { PublicationData } from "@/types"

interface IFeaturedResources {
  publications: PublicationData | null
  parentLink?: string
}

export const FeaturedResources: FC<IFeaturedResources> = ({ publications, parentLink = "resources/" }) => {
  const pathName = usePathname()

  if (!publications?.data?.length) return null

  return (
    <section className="bg-black">
      <div className="container">
        {pathName === "/" ? (
          <div className="mb-16 flex items-end justify-between lg:mb-10 md:mb-8 md:flex-col md:items-start md:gap-10">
            <h1 className="adaptive-title">
              Featured <span className="block font-normal text-white">Resources</span>
            </h1>
            <Link href={"/resources"}>
              {" "}
              <Button variant="outlined" className="text-white [&>svg>path]:fill-primary-main">
                Load more Resources
              </Button>
            </Link>
          </div>
        ) : (
          <h1 className="mb-12 text-h6 font-bold text-white lg:mb-8">Other Publications</h1>
        )}
        <ul className="flex justify-between gap-8 md:flex-col">
          {publications.data.map(({ id, attributes: { title, image, category, publicationDate, slug } }) => (
            <Card
              title={title}
              category={category}
              publicationDate={publicationDate}
              image={image?.data?.attributes?.url}
              slug={`${parentLink}${slug}`}
              className="xl:last:hidden md:h-auto"
              theme="black"
              key={id}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
