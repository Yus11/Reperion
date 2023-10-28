import React from "react"
import { Metadata } from "next"

import { Banner } from "@/components"

import { Tabs } from "./fragments"

export const metadata: Metadata = {
  title: "Resources | Reperion",
  description: "Reperion offers protection from cyber and drone attacks",
  openGraph: {
    title: "Resources | Reperion",
    description: "Reperion offers protection from cyber and drone attacks",
    images: "/logo-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    images: "/logo-image.jpg",
    title: "Resources | Reperion",
    description: "Reperion offers protection from cyber and drone attacks",
  },
}

export default function Resources() {
  return (
    <>
      <Banner
        title={["Reperion", "Resources"]}
        subtitle={["Reperion offers protection from", "cyber and drone attacks."]}
      />
      {/*<FeaturedResources publications={featuredResources} />*/}
      <Tabs />
    </>
  )
}
