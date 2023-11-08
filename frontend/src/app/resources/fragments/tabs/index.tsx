import React, { FC, useCallback, useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"

import { Card, TabButton } from "@/components"
import { Arrow } from "@/icons"
import { PublicationData } from "@/types"
import { getPublications } from "@/utils"

import { categories } from "./_constants"

import styles from "./_styles.module.css"

export const Tabs: FC = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const params = useSearchParams()
  const paramsValue = params.get("category")

  const [activeTab, setActiveTab] = useState("Medium Blog")
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [error, setError] = useState<unknown>()
  const [data, setData] = useState<PublicationData | null>(null)
  const [isLoading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState<number>(1)

  const [searchValue, setSearchValue] = useState<string>("")

  const setParamsValue = useCallback((value: string) => {
    const numericValue = Number(value)
    switch (numericValue) {
      case 1:
        setActiveTab("Medium Blog")
        break
      case 2:
        setActiveTab("Academic Publications")
        break
      case 3:
        setActiveTab("Events")
        break
      case 4:
        setActiveTab("Articles")
    }
  }, [])

  useEffect(() => {
    if (error) {
      return
    }

    if (searchValue) {
      setTimeout(() => {
        getPublications(
          `pagination[pageSize]=6&filters[category][$eq]=${activeTab}&filters[title][$contains]=${searchValue}&populate[image][fields]`,
          setLoading,
          setData,
          setError
        )
      }, 1000)
    } else {
      getPublications(
        `pagination[page]=${currentPage}&pagination[pageSize]=6&filters[category][$eq]=${activeTab}&populate[image][fields]`,
        setLoading,
        setData,
        setError
      )
    }
  }, [activeTab, searchValue, error, currentPage])

  useEffect(() => {
    if (paramsValue !== null) {
      setTimeout(() => {
        sectionRef?.current?.scrollIntoView({
          block: "start",
          behavior: "smooth",
        })
      }, 100)
      setParamsValue(paramsValue)
    }
  }, [paramsValue, sectionRef])

  return (
    <section ref={sectionRef} className="container flex flex-col">
      <h1 className="adaptive-title text-black">Publications</h1>
      <div className="mt-12 flex gap-4 md:hidden">
        {categories.map((category) => (
          <TabButton
            key={category}
            variant="outlined"
            isActiveTab={activeTab === category}
            animationId="publications-tab"
            onClick={() => setActiveTab(category)}
            children={category}
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
          {categories.map((category) => (
            <li
              key={category}
              className={`mt-3 text-paragraph transition-[font-weight] duration-300 ${
                category === activeTab ? "font-semibold text-primary-main" : "font-normal text-black"
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="my-6 flex items-center justify-between md:flex-col md:items-start md:gap-y-4">
        <p className="text-[20px] text-paragraph text-gray-dark-100 md:text-[16px]">
          Total: {data?.meta?.pagination?.total || 0}
        </p>
        <div className="relative w-full max-w-[640px] xl:max-w-[400px] md:max-w-full">
          <input
            type="text"
            placeholder="Search resource"
            value={searchValue}
            onChange={({ target: { value } }) => setSearchValue(value)}
            className={`${styles.search_input} peer/input`}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            className="absolute left-4 top-4 stroke-gray-dark-100 peer-hover/input:stroke-gray-dark-200 peer-focus/input:stroke-gray-dark-200 peer-active/input:stroke-gray-dark-200"
          >
            <path
              d="M20.7992 20.8257C22.2803 19.3831 23.1992 17.3727 23.1992 15.1491C23.1992 10.759 19.6175 7.2002 15.1992 7.2002C10.7809 7.2002 7.19922 10.759 7.19922 15.1491C7.19922 19.5391 10.7809 23.098 15.1992 23.098C17.3796 23.098 19.3562 22.2313 20.7992 20.8257ZM20.7992 20.8257L24.7992 24.8002"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setSearchValue("")}
            className={`${
              searchValue ? "visible" : "invisible"
            } absolute right-4 top-4 cursor-pointer fill-gray-main hover:fill-gray-dark-100 peer-hover/input:fill-gray-dark-100 peer-focus/input:fill-gray-dark-100 peer-active/input:fill-gray-dark-100`}
          >
            <path d="M25.3337 8.54667L23.4537 6.66667L16.0003 14.12L8.54699 6.66667L6.66699 8.54667L14.1203 16L6.66699 23.4533L8.54699 25.3333L16.0003 17.88L23.4537 25.3333L25.3337 23.4533L17.8803 16L25.3337 8.54667Z" />
          </svg>
        </div>
      </div>
      <ul className="flex flex-wrap justify-between gap-8 md:flex-col">
        {data?.data
          ? data.data?.map(({ id, attributes: { title, image, category, publicationDate, slug } }) => (
              <Card
                title={title}
                category={category}
                publicationDate={publicationDate}
                image={`${process.env.API}${image?.data?.attributes.url}`}
                slug={`resources/${slug}`}
                className="w-[31.5%] 1xl:w-full 1xl:max-w-[328px] xl:h-auto xl:w-[47.5%] xl:max-w-[48%] md:h-auto md:w-full md:max-w-full"
                theme="white"
                key={id}
              />
            ))
          : error
          ? "Please check your internet connection!"
          : "Loading..."}
      </ul>
      {data?.meta && data.meta.pagination.pageCount > 1 && (
        <div className="mt-12 flex w-full items-center justify-end">
          <span className="mr-6 text-paragraph text-gray-dark-100">
            {data.meta.pagination.page} of {data.meta.pagination.pageCount}
          </span>
          <button
            className="group"
            disabled={data.meta.pagination.page === 1}
            onClick={() => setCurrentPage((prevState) => (prevState !== 1 ? prevState - 1 : prevState))}
          >
            <Arrow className="group-disabled:[&>circle]:stroke-gray-light group-disabled:[&>path]:fill-gray-light" />
          </button>
          <button
            className="group ml-4"
            disabled={data.meta.pagination.page === data.meta.pagination.pageCount}
            onClick={() => setCurrentPage((prevState) => prevState + 1)}
          >
            <Arrow className="rotate-180 group-disabled:[&>circle]:stroke-gray-light group-disabled:[&>path]:fill-gray-light" />
          </button>
        </div>
      )}
    </section>
  )
}
