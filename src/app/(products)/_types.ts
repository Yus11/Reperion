import { ReactNode } from "react"

type NestedTab = {
  tabTitle?: string
  tabImage: string[]
  tabContent: {
    icon: ReactNode
    contentTitle: string
    contentDescription: string
  }[]
}

export type ProductOptions = {
  title: string
  subtitle?: string
  description: string
  childrenTabs: NestedTab[]
}
