import React from "react"
import { Metadata } from "next"

import { Banner } from "@/components"

import { TabSection } from "../components"

import { cyberSecurityOptions } from "./_constants"

export const metadata: Metadata = {
  title: "Cybersecurity products",
  description: "More advanced than IT or fixed asset OT cybersecurity",
  openGraph: {
    title: "Cybersecurity products",
    description: "More advanced than IT or fixed asset OT cybersecurity",
    images: "/logo-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    images: "/logo-image.jpg",
    title: "Cybersecurity products",
    description: "More advanced than IT or fixed asset OT cybersecurity",
  },
}

export default function Cybersecurity() {
  return (
    <>
      <Banner
        title={["Cybersecurity", "Products"]}
        subtitle={["More advanced than", "IT or Fixed Asset OT Cybersecurity"]}
      />
      <TabSection productOptions={cyberSecurityOptions} />
    </>
  )
}
