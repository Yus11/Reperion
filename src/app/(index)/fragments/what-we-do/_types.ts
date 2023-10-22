import { StaticImageData } from "next/image"

type CardOptions = {
  direction: string
  title: string
  description: string
  background: string
}

type Fields = {
  title: string
  text: string
  styles: string
  link: string
}

type FieldImages = {
  title: string
  image: StaticImageData
  styles: string
}

export type { CardOptions, FieldImages, Fields }
