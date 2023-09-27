import React, { FC } from "react"
import Link from "next/link"

import { Logo } from "@/icons"

import { Navigation } from "./fragments"

export const Header: FC = () => (
  <header className="container flex items-center justify-between py-8">
    <Link href="/">
      <Logo className="h-[56px] w-[182px]" />
    </Link>
    <Navigation />
  </header>
)
