"use client"
import React, { FC, memo, useState } from "react"

import { TabButton } from "@/components"

import { cardOptions, counterDroneOptions, cyberOptions, fieldImages } from "./_constants"
import { Card, Fields } from "./fragments"

export const WhatWeDo: FC = memo(() => {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <section className="container pb-[96px] pt-[72px] lg:py-10">
      <div className="flex w-full justify-between gap-[64px] xl:flex-col">
        <div className="max-w-[578px] xl:max-w-full">
          <h1 className="adaptive-title">
            What <span className="block text-black xl:inline md:block">We Do</span>
          </h1>
          <p className="mb-6 mt-10 text-h6 lg:text-[24px]">
            We are a one-stop shop for cutting edge next generation security risks
          </p>
          <p className="text-paragraph text-gray-dark-100">
            Reperion is a next-generation security business that protects transportation assets across sea, land, and
            air from cyberattacks and companies, assets, and controlled air spaces from drone intrusions and attacks.
            Successful next generation attacks could cause widespread disruption in a localised area, impact global
            supply chains, and harm people, assets and the environment.
          </p>
        </div>
        <div className="w-[52%] max-w-[700px] xl:w-full xl:max-w-full">
          <div className="flex gap-8 xl:justify-between md:flex-col md:gap-4">
            {cardOptions.map(({ title }, index) => (
              <TabButton
                key={index}
                animationId="bubble"
                variant="rounded-primary"
                className="w-[334px] xl:w-full"
                onClick={() => setActiveTab(index)}
                isActiveTab={index === activeTab}
              >
                {title}
              </TabButton>
            ))}
          </div>
          <Card activeTab={activeTab} cardOptions={cardOptions} />
        </div>
      </div>
      <Fields activeTab={activeTab} fields={[cyberOptions, counterDroneOptions]} fieldImages={fieldImages} />
    </section>
  )
})
