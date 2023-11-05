import React, { FC, useEffect, useState } from "react"

import { FeaturedResources } from "@/components"
import { PublicationData } from "@/types"
import { getPublications } from "@/utils"

export const revalidate = 10

export const OtherPublications: FC = () => {
  const [error, setError] = useState<unknown>()
  const [data, setData] = useState<PublicationData | null>(null)
  const [isLoading, setLoading] = useState(true)

  console.log(data)

  useEffect(() => {
    getPublications("pagination[pageSize]=3&filters[isFeatured][$eq]=true&populate=*", setLoading, setData, setError)
  }, [])

  return <FeaturedResources publications={data} />
}
