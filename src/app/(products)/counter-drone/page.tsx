import React from "react"

import { Banner } from "@/components"

import { TabSection } from "../components"

import { counterDroneOptions } from "./_constants"

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
