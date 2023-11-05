import React, { FC, memo, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

import { Button, TabButton } from "@/components"
import { tabContainer } from "@/constants"
import { useWindowWidth } from "@/utils"

import { ProductOptions } from "../_types"

export const TabSection: FC<{ productOptions: ProductOptions[] }> = memo(({ productOptions }) => {
  const windowWidth = useWindowWidth()
  const targetRef = useRef<HTMLElement>(null)
  const pathName = usePathname()
  const params = useSearchParams()
  const paramsValue = params.get("product")
  const [activeTab, setActiveTab] = useState<number>((paramsValue && Number(paramsValue)) || 0)
  const [activeNestedTab, setActiveNestedTab] = useState<number>(0)

  useEffect(() => {
    if (paramsValue !== null) {
      targetRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    }
  }, [paramsValue])

  return (
    <section ref={targetRef} className="container flex justify-between gap-[90px] 1xl:flex-col 1xl:gap-10">
      <div className="w-full max-w-[334px] 1xl:flex 1xl:max-w-full 1xl:items-center 1xl:gap-8 md:flex-col">
        <div className="w-full 1xl:w-1/2 md:w-full">
          {["Sea", "Land", "Air"].map((item, index) => (
            <TabButton
              key={index}
              className="mt-6 h-[47px] w-full"
              variant="rounded-secondary"
              isActiveTab={index === activeTab}
              onClick={() => {
                setActiveNestedTab(0)
                setActiveTab(index)
              }}
              animationId={`bubble-${pathName}`}
            >
              {item}
            </TabButton>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeNestedTab || activeTab}
            {...tabContainer}
            className="mt-[56px] 1xl:relative 1xl:mt-0 1xl:w-1/2 md:w-full"
          >
            <Image
              src={productOptions[activeTab].childrenTabs[activeNestedTab]?.tabImage[windowWidth > 1279 ? 0 : 1]}
              width={334}
              height={windowWidth > 1199 ? 474 : 280}
              className="1xl:w-full md:max-h-[280px]"
              alt={productOptions[activeTab].childrenTabs[activeNestedTab]?.tabTitle || productOptions[activeTab].title}
            />
          </motion.div>
        </AnimatePresence>
        {windowWidth > 1279 && (
          <div className="mt-[160px] 1xl:hidden">
            <p className="mb-4 w-full text-center text-caption uppercase text-gray-dark-200">
              {pathName === "/cybersecurity" ? "Next product" : "Previous product"}
            </p>
            <Link href={pathName === "/cybersecurity" ? "/counter-drone" : "/cybersecurity"}>
              <Button variant={pathName === "/cybersecurity" ? "rounded" : "rounded-reverse"}>
                {pathName === "/cybersecurity" ? "Counter-Drone" : "Cybersecurity"}
              </Button>
            </Link>
          </div>
        )}
      </div>
      <div className="w-full max-w-[944px] 1xl:max-w-full">
        <h1 className="adaptive-title mb-12 font-semibold text-primary-main lg:mb-10 md:flex md:flex-wrap md:gap-x-3">
          {pathName === "/cybersecurity" ? "Cyber" : "Counter-Drone"}
          <AnimatePresence mode="wait">
            <motion.span {...tabContainer} key={activeTab} className="ml-4 font-normal text-black md:ml-0">
              {productOptions[activeTab].title}
            </motion.span>
          </AnimatePresence>
        </h1>
        {productOptions[activeTab]?.subtitle && (
          <AnimatePresence mode="wait">
            <motion.h2 {...tabContainer} key={activeTab} className="mb-6 text-h6 text-black lg:text-[24px]">
              {productOptions[activeTab]?.subtitle}
            </motion.h2>
          </AnimatePresence>
        )}
        <AnimatePresence mode="wait">
          <motion.p {...tabContainer} key={activeTab} className="mb-12 text-paragraph text-gray-dark-100 xl:mb-16">
            {productOptions[activeTab]?.description}
          </motion.p>
        </AnimatePresence>
        {productOptions[activeTab].childrenTabs[activeNestedTab]?.tabTitle && (
          <div className="mb-[56px] flex w-full gap-4 overflow-hidden lg:mb-10">
            {productOptions[activeTab].childrenTabs.map(({ tabTitle }, index) => (
              <TabButton
                key={tabTitle}
                animationId={`linear-${pathName}`}
                variant="outlined"
                isActiveTab={index === activeNestedTab}
                onClick={() => setActiveNestedTab(index)}
              >
                {tabTitle}
              </TabButton>
            ))}
          </div>
        )}
        <AnimatePresence mode="wait">
          <motion.ul
            {...tabContainer}
            key={productOptions[activeTab].childrenTabs[activeNestedTab]?.tabTitle || activeTab}
            className="flex flex-row flex-wrap gap-x-8 gap-y-12 xl:gap-y-8"
          >
            {productOptions[activeTab].childrenTabs[activeNestedTab]?.tabContent?.map(
              ({ icon, contentTitle, contentDescription }, index) => (
                <li key={index} className="w-[47.8%] max-w-[456px] 1xl:w-[48%] 1xl:max-w-full lg:w-[47.5%] md:w-full">
                  <span>{icon}</span>
                  <h2 className="mb-4 mt-8 text-subtitle text-black">{contentTitle}</h2>
                  <p className="text-paragraph text-gray-dark-100">{contentDescription || ""}</p>
                </li>
              )
            )}
          </motion.ul>
        </AnimatePresence>
        {windowWidth < 1280 && (
          <div className="hidden max-w-[334px] 1xl:mt-16 1xl:block md:max-w-full">
            <p className="mb-4 w-full text-center text-caption uppercase text-gray-dark-200 md:mx-auto">
              {pathName === "/cybersecurity" ? "Next product" : "Previous product"}
            </p>
            <Link href={pathName === "/cybersecurity" ? "/counter-drone" : "/cybersecurity"} className="md:w-full">
              <Button
                variant={pathName === "/cybersecurity" ? "rounded" : "rounded-reverse"}
                className="md:w-full md:max-w-full"
              >
                {pathName === "/cybersecurity" ? "Counter-Drone" : "Cybersecurity"}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
})
