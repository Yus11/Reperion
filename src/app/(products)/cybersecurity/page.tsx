import React from "react"

import { Banner } from "@/components"

import { TabSection } from "../components"

import { cyberSecurityOptions } from "./_constants"

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
