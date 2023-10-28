import Image from "next/image"
import Link from "next/link"

import { Arrow } from "@/icons"
import { PublicationData } from "@/types"

export default async function Publication(props: { params: { slug: string } }) {
  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
  }

  const { data }: PublicationData = await fetch(
    `http://localhost:1337/api/publications?filters[slug][$eq]=${props.params.slug}&populate=*`,
    reqOptions
  ).then((res) => res.json())

  const { category, image, title, authorImage, publication_items, publishedAt } = data[0].attributes

  if (data.length === 0) return null

  console.log(data)

  return (
    <div className="container pb-[96] pt-[94px]">
      <div className="flex items-center gap-4">
        <Link href={"/resources"}>
          <Arrow direction="left" />
        </Link>
        <span className="text-caption uppercase text-gray-dark-200">Resources</span>
      </div>
      <div className="flex w-full gap-8">
        <div className="w-1/2">
          <p className="mt-16 text-subtitle uppercase text-primary-main">{category}</p>
          <h1 className="mb-[76px] mt-6 text-h2 font-semibold text-black">{title}</h1>
          <p className="text-body font-semibold leading-[160%] text-gray-dark-100">{publishedAt}</p>
        </div>
        <Image src={`${process.env.API}${image?.data?.attributes.url}`} alt={title} width={700} height={397} />
      </div>
      <ul className="mt-16 w-full">
        {publication_items.data.map(({ id, attributes }, index) => (
          <li key={id} className="flex w-full justify-between gap-[68px] border-t-[1px] border-t-gray-main pt-10">
            <div className="flex max-w-[640px] gap-[54px]">
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-primary-main text-subtitle text-white">
                {`${index < 9 ? 0 : ""}${index + 1}`}
              </div>
              <h2 className="text-h6 text-black">{attributes.title}</h2>
            </div>
            <p className="max-w-[700px] text-paragraph text-black">{attributes.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
