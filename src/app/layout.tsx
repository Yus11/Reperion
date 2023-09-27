import { ReactNode } from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"

import { Header } from "@/components"

import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: "normal",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: "Reperion - cybersecurity solutions",
  description: "Securing mobile operating assets from cyber and drone attacks across land, sea and air",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
