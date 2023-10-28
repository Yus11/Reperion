import { Dispatch, SetStateAction } from "react"

import { PublicationData } from "@/types"

export function getPublications(
  urlParams: string = "",
  setLoading: Dispatch<SetStateAction<boolean>>,
  setData: Dispatch<SetStateAction<PublicationData | null>>
) {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  }

  setLoading(true)

  fetch(`${process.env.API_URL}${urlParams}`, reqOptions)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
      setLoading(false)
    })
}
