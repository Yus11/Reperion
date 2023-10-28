"use client"
import React, { FC, useEffect, useState } from "react"

import { Card, TabButton } from "@/components"
import { PublicationData } from "@/types"
import { getPublications } from "@/utils"

import { categories } from "./_constants"

import styles from "./_styles.module.css"

export const Tabs: FC = () => {
  const [activeTab, setActiveTab] = useState<{ id: number; name: string }>({
    id: 0,
    name: "Medium Blog",
  })
  const [isOpen, setIsOpen] = useState<boolean>(true)

  const [data, setData] = useState<PublicationData | null>(null)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    getPublications("", setLoading, setData)
  }, [])

  useEffect(() => {
    getPublications("", setLoading, setData)
  }, [activeTab])

  console.log(data)

  return (
    <section className="container">
      <h1 className="adaptive-title text-black">Publications</h1>
      <div className="mt-12 flex gap-4 md:hidden">
        {categories.map((item, index) => (
          <TabButton
            key={item}
            variant="outlined"
            isActiveTab={activeTab.id === index}
            animationId="publications-tab"
            onClick={() => setActiveTab({ id: index, name: item })}
            children={item}
          />
        ))}
      </div>
      <div className="hidden md:mt-10 md:block">
        <button
          className="flex w-full items-center justify-between pb-3 text-body text-black"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          Categories
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className={`transition-all duration-200 ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              d="M9.88 20.5466L16 14.44L22.12 20.5466L24 18.6666L16 10.6666L8 18.6666L9.88 20.5466Z"
              fill="#111111"
            />
          </svg>
        </button>
        <ul className={`overflow-hidden transition-max-height duration-200 ${isOpen ? "max-h-[150.38px]" : "max-h-0"}`}>
          {categories.map((item, index) => (
            <li
              key={index}
              className={`mt-3 text-paragraph transition-[font-weight] duration-300 ${
                index === activeTab.id ? "font-semibold text-primary-main" : "font-normal text-black"
              }`}
              onClick={() => setActiveTab({ id: index, name: item })}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="my-6 flex items-center justify-between md:flex-col md:items-start md:gap-y-4">
        <p className="text-[20px] text-paragraph text-gray-dark-100 md:text-[16px]">
          Total: {data?.meta.pagination.total || 0}
        </p>
        <div className="relative w-full max-w-[640px] xl:max-w-[400px] md:max-w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="absolute left-4 top-4"
          >
            <path
              d="M20.7992 20.8257C22.2803 19.3831 23.1992 17.3727 23.1992 15.1491C23.1992 10.759 19.6175 7.2002 15.1992 7.2002C10.7809 7.2002 7.19922 10.759 7.19922 15.1491C7.19922 19.5391 10.7809 23.098 15.1992 23.098C17.3796 23.098 19.3562 22.2313 20.7992 20.8257ZM20.7992 20.8257L24.7992 24.8002"
              stroke="#787878"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <input type="search" placeholder="Search resource" className={styles.search_input} />
        </div>
      </div>
      <ul className="flex flex-wrap gap-8 md:flex-col">
        {data?.data.map(({ attributes: { title, image, category, createdAt, slug }, id }, index) => (
          <Card
            title={title}
            category={category}
            createdAt={createdAt}
            image={`${process.env.API}${image.data.attributes.url}`}
            slug={`resources/${slug}`}
            className="xl:h-auto xl:w-[47.5%] md:h-auto md:w-full"
            theme="white"
            key={index}
          />
        ))}
      </ul>
    </section>
  )
}
