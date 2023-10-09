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
    </main>
  )
}
