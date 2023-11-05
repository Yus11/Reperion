import { Metadata } from "next"

import {
  Banner,
  Industries,
  OtherPublications,
  OurProducts,
  Partnerships,
  ReperionTeam,
  ThreatLandscape,
  WhatWeDo,
  WhyReperion,
} from "./fragments"

export const metadata: Metadata = {
  title: "Reperion - cybersecurity solutions",
  description: "Securing mobile operating assets from cyber and drone attacks across land, sea and air",
  openGraph: {
    title: "Reperion - cybersecurity solutions",
    description: "Securing mobile operating assets from cyber and drone attacks across land, sea and air",
    images: "/logo-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    images: "/logo-image.jpg",
    title: "Reperion - cybersecurity solutions",
    description: "Securing mobile operating assets from cyber and drone attacks across land, sea and air",
  },
}

export default function Home() {
  return (
    <main>
      <Banner />
      <ThreatLandscape />
      <WhatWeDo />
      <WhyReperion />
      <Partnerships />
      <Industries />
      <OurProducts />
      <ReperionTeam />
      <OtherPublications />
    </main>
  )
}
