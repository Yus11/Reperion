import { FeaturedResources } from "@/components"
import { featuredResources } from "@/constants"

import {
  Banner,
  Industries,
  OurProducts,
  Partnerships,
  ReperionTeam,
  ThreatLandscape,
  WhatWeDo,
  WhyReperion,
} from "./fragments"

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
      <FeaturedResources publications={featuredResources} />
    </main>
  )
}
