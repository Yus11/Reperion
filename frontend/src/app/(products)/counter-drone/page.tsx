import React from "react"
import { Metadata } from "next"

import { Banner } from "@/components"

import { TabSection } from "../components"

import { counterDroneOptions } from "./_constants"

export const metadata: Metadata = {
  title: "Counter-Drone products",
  description: "Military-Level Capabilities",
  openGraph: {
    title: "Counter-Drone products",
    description: "Military-Level Capabilities",
    images: "/logo-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    images: "/logo-image.jpg",
    title: "Counter-Drone products",
    description: "Military-Level Capabilities",
  },
}

export default function CounterDrone() {
  return (
    <>
      <Banner title={["Counter-Drone", "Products"]} subtitle={["Military-Level", "Capabilities"]} />
      <TabSection productOptions={counterDroneOptions} />
    </>
  )
}
