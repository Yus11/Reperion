import { FC, memo, useMemo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Logo } from "@/icons"

import { mainPageLinks, products, resources } from "./_constants"
import { Form } from "./fragments"

export const Footer: FC = memo(() => {
  const pathName = usePathname()

  const isLight = useMemo<boolean>(() => pathName === "/", [pathName])

  return (
    <footer className={isLight ? "bg-white" : "bg-black"}>
      <div className="container pb-[50px] lg:pb-10">
        <div className="flex justify-between gap-12 border-b-2 border-b-gray-main pb-[52px] 1xl:flex-col 1xl:gap-8 xl:pb-8">
          <div className="max-w-[700px] 1xl:max-w-full">
            <h1 className={`text-h3 ${isLight ? "text-primary-main" : "text-primary-light"} md:break-words`}>
              Pioneering the next generation{" "}
              <span className={`block font-semibold ${isLight ? "text-black" : "text-white"}`}>
                of operational resilience
              </span>
            </h1>
            <p
              id="contact-us"
              className={`mt-[56px] pr-10 text-h6 1xl:mt-10 1xl:pr-0 ${isLight ? "text-black" : "text-white"}`}
            >
              If you have any questions please Contact Us
            </p>
          </div>
          <Form isLight={isLight} />
        </div>
        <div className="flex justify-between gap-12 pt-[52px] 1xl:flex-col 1xl:gap-8 xl:pt-8">
          <div>
            <Logo className="mb-6" fill={isLight ? "black" : "white"} />
            <span className={`text-small ${isLight ? "text-gray-dark-100" : "text-gray-main"}`}>
              Copyright © 2023 Reperion. All rights reserved
            </span>
          </div>
          <div className="flex justify-between gap-8 lg:gap-5 md:flex-wrap md:gap-x-5 md:gap-y-8">
            {[mainPageLinks, products, resources].map((pages, index) => (
              <ul key={index} className="flex w-[190px] flex-col gap-y-6 md:w-[140px]">
                {pages.map(({ title, link }, index) => (
                  <li
                    key={index}
                    className={`text-paragraph first:font-semibold ${isLight ? "text-black" : "text-white"}`}
                  >
                    {link ? (
                      <Link
                        href={link}
                        className={`hover:text-primary-main ${isLight ? "text-gray-dark-100" : "text-gray-main"}`}
                      >
                        {title}
                      </Link>
                    ) : (
                      title
                    )}
                  </li>
                ))}
              </ul>
            ))}
            <div className="w-[207px] md:w-[140px]">
              <p className={`text-paragraph font-semibold ${isLight ? "text-black" : "text-white"}`}>Contact Us</p>
              <a
                href="mailto:info@reperion.io"
                className="mb-20 mt-6 block text-paragraph font-semibold text-primary-main md:mb-10"
              >
                info@reperion.io
              </a>
              <p className={`text-paragraph font-semibold ${isLight ? "text-black" : "text-white"}`}>
                We are in social networks
              </p>
              <a href="#" className="mt-6 block">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <path
                    d="M23.5639 39.9999H18.7326V24.4218H23.5639V39.9999ZM21.1456 22.2968C19.6007 22.2968 18.3477 21.0156 18.3477 19.4687C18.3477 18.7257 18.6424 18.0131 19.1672 17.4877C19.6919 16.9623 20.4036 16.6671 21.1456 16.6671C21.8877 16.6671 22.5994 16.9623 23.1241 17.4877C23.6488 18.0131 23.9436 18.7257 23.9436 19.4687C23.9436 21.0156 22.69 22.2968 21.1456 22.2968ZM41.6458 39.9999H36.8249V32.4166C36.8249 30.6093 36.7885 28.2916 34.313 28.2916C31.8012 28.2916 31.4162 30.2551 31.4162 32.2864V39.9999H26.5902V24.4218H31.2238V26.5468H31.2914C31.9364 25.3228 33.512 24.0312 35.8626 24.0312C40.7521 24.0312 41.651 27.2551 41.651 31.4426V39.9999H41.6458Z"
                    fill="#C00000"
                  />
                  <rect x="1.5" y="1.50012" width="57" height="57" rx="28.5" stroke="#C00000" strokeWidth="3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
})
