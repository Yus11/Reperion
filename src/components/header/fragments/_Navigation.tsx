"use client"
import React from "react"
import Link from "next/link"

export const Navigation = () => {
  return (
    <nav aria-label="Header navigation" className="flex w-full max-w-[567px] items-center justify-between lg:hidden">
      <Link href="/" className="text-paragraph font-semibold hover:text-primary-main">
        About Us
      </Link>
      <div className="group relative">
        <button className="flex text-paragraph font-semibold">
          Products
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.59 8.58984L12 13.1698L7.41 8.58984L6 9.99984L12 15.9998L18 9.99984L16.59 8.58984Z"
              fill="#C8C8C8"
              className="group-hover:fill-black"
            />
          </svg>
        </button>
        <div
          className={`invisible absolute flex w-[165px] flex-col gap-2 rounded-md bg-black py-4 text-white transition-all duration-300 group-hover:visible`}
        >
          <Link href="/cybersecurity" className="px-5 py-2 hover:bg-gray-dark-200 hover:text-primary-main">
            Cybersecurity
          </Link>
          <Link href="/counter-drone" className="px-5 py-2 hover:bg-gray-dark-200 hover:text-primary-main">
            Counter-Drone
          </Link>
        </div>
      </div>
      <Link href="/resources" className="text-paragraph font-semibold hover:text-primary-main">
        Resources
      </Link>
      <Link
        href="/contact-us"
        className="rounded-md border-2 border-gray-main px-5 py-3 text-paragraph font-semibold hover:border-primary-main hover:text-primary-main"
      >
        Contact Us
      </Link>
    </nav>
  )
}
