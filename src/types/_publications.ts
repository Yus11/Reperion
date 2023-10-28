interface PublicationData {
  data: { id: number; attributes: Publications }[]
  meta: { pagination: Pagination }
}

interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}

interface Publications {
  title: string
  isFeatured: boolean
  createdAt: string
  updatedAt: string
  publishedAt: string
  category: string
  author: string
  image: Image
  slug: string
  publication_items: PublicationItems
  authorImage: Image
}

interface Image {
  data: ImageData
}

interface ImageData {
  id: number
  attributes: Attributes
}

interface Attributes {
  name: string
  alternativeText: null | string
  caption: null | string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: null | string
  provider: string
  provider_metadata: null | string
  createdAt: string
  updatedAt: string
}

interface Formats {
  thumbnail: ImageSizes
  small: ImageSizes
  medium: ImageSizes
}

interface ImageSizes {
  name: string
  hash: string
  ext: string
  mime: string
  path: null | string
  width: number
  height: number
  size: number
  url: string
}

interface PublicationItems {
  data: PublicationItem[]
}

interface PublicationItem {
  id: number
  attributes: PublicationItemAttributes
}

interface PublicationItemAttributes {
  title: string
  description: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type { PublicationData, Publications }
