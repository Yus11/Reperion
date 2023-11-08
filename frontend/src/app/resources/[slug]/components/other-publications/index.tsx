import React, { FC } from "react"

import { FeaturedResources } from "@/components"
import { PublicationData } from "@/types"

export const revalidate = 10

export const OtherPublications: FC<{ slug: string }> = async ({ slug }) => {
  const data: PublicationData = await fetch(
    `${process.env.API_URL}pagination[pageSize]=3&filters[isFeatured][$eq]=true&filters[slug][$ne]=${slug}&populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    }
  ).then((res) => res.json())

  return <FeaturedResources publications={data} parentLink={""} />
}
