import React from "react"
import { Metadata } from "next"

import { Banner } from "@/components"

import { TabSection } from "../components"

import { counterDroneOptions } from "./_constants"

export const metadata: Metadata = {
  title: "Counter-Drone products",
  description: "More advanced than IT or fixed asset OT",
  openGraph: {
    title: "Counter-Drone products",
    description: "More advanced than IT or fixed asset OT",
    images: "/logo-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    images: "/logo-image.jpg",
    title: "Counter-Drone products",
    description: "More advanced than IT or fixed asset OT",
  },
}

export default function CounterDrone() {
  return (
    <>
      <Banner
        title={["Counter-Drone", "Products"]}
        subtitle={["More advanced technology than", "IT or Fixed Asset OT"]}
      />
      <TabSection productOptions={counterDroneOptions} />
    </>
  )
}
