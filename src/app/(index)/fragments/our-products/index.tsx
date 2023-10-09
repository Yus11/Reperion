"use client"
import React, { FC, memo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { TabButton } from "@/components"
import { tabContainer } from "@/constants"

import { productionContent } from "./_constants"

export const OurProducts: FC = memo(() => {
  const [activeTab, setActiveTab] = useState<number>(0)

  return (
    <section className="container">
      <div className="flex items-center justify-between gap-12 xl:flex-col xl:items-start xl:gap-7">
        <h1 className="adaptive-title">
          Our <span className="block text-black">Products</span>
        </h1>
        <AnimatePresence mode="wait">
          <motion.h2
            key={activeTab}
            className="max-w-[578px] text-h6 text-black xl:max-w-full lg:text-[24px] md:text-[23px]"
            {...tabContainer}
          >
            {productionContent[activeTab].title}
          </motion.h2>
        </AnimatePresence>
      </div>
      <div className="mt-12 flex gap-4">
        {productionContent.map(({ tabTitle }, index) => (
          <TabButton
            animationId="line"
            variant="outlined"
            className="w-full"
            isActiveTab={index === activeTab}
            key={tabTitle}
            onClick={() => setActiveTab(index)}
          >
            {tabTitle}
          </TabButton>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.ul
          className={`mt-[56px] flex flex-wrap gap-8 md:flex-col md:gap-4 lg:[&>li]:w-[47%] ${
            activeTab === 0
              ? "[&>li]:w-[22.8%] 1xl:[&>li]:w-[48%]"
              : "[&>li>p]:max-w-[616px] [&>li]:w-[48.5%] [&>li]:max-w-[700px] xl:[&>li]:w-[48%]"
          }`}
          key={activeTab}
          {...tabContainer}
        >
          {productionContent[activeTab].items.map(({ icon, itemTitle, itemDescription }) => (
            <li
              key={itemTitle}
              className="flex flex-col md:!w-full md:border-b-[1px] md:border-b-gray-light md:pb-4 md:last:border-none"
            >
              {icon}
              <h3 className="mb-6 mt-[56px] text-h6 font-bold text-black lg:mb-4 lg:mt-8 lg:text-[24px]">
                {itemTitle}
              </h3>
              <p className="text-paragraph text-gray-dark-100">{itemDescription}</p>
            </li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </section>
  )
})
