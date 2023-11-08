import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { Arrow } from "@/icons"
import { PublicationData } from "@/types"

import { OtherPublications } from "./components"

import styles from "./styles.module.css"

async function getPublication(slug: string): Promise<PublicationData | undefined> {
  try {
    const res = await fetch(`${process.env.API_URL}filters[slug][$eq]=${slug}&populate=*`, {
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    })

    if (!res.ok) {
      throw new Error("Failed to fetch data")
    }

    return res.json()
  } catch (err) {
    console.log(err)
  }
}

export const revalidate = 10

export async function generateMetadata(props: { params: { slug: string } }): Promise<Metadata> {
  const data = await getPublication(props.params.slug)

  if (!data) return {}

  const { pageDescription, image, title } = data.data[0]?.attributes

  return {
    metadataBase: new URL("https://strapi-153564-0.cloudclusters.net"),
    title: title,
    description: pageDescription,
    openGraph: {
      images: `${process.env.API}${image?.data?.attributes.url}`,
    },
  }
}

export default async function Publication(props: { params: { slug: string } }) {
  const data = await getPublication(props.params.slug)

  if (!data?.data) return null

  const date = new Date(data.data[0]?.attributes?.publicationDate)

  const publicationDate = `${date.toLocaleString("en-us", { month: "short" })} ${date.getDate()}, ${date.getFullYear()}`

  const { category, image, title, author, authorImage, publication_items } = data.data[0]?.attributes

  console.log(data.data[0]?.attributes)
  return (
    <>
      <section className="container flex flex-col pb-[96] pt-[94px] xl:pt-0 md:pt-5">
        <div className="flex items-center gap-4">
          <Link href={"/resources"}>
            <Arrow />
          </Link>
          <span className="text-caption uppercase text-gray-dark-200">Resources</span>
        </div>
        <div className="mt-16 flex w-full gap-8 xl:mt-10 xl:flex-col xl:gap-10">
          <div className="w-1/2 xl:w-full">
            <p className="text-subtitle uppercase text-primary-main">{category}</p>
            <h1 className="adaptive-title mb-[76px] mt-6 font-semibold text-black xl:mb-12">{title}</h1>
            <p className="text-body font-semibold leading-[160%] text-gray-dark-100 xl:text-paragraph">
              {publicationDate}
            </p>
          </div>
          <Image
            src={`${process.env.API}${image?.data?.attributes.url}`}
            className="max-h-[397px] grayscale xl:max-h-[450px] xl:min-h-[397px] xl:w-full md:object-cover md:object-center"
            alt={title}
            width={700}
            height={397}
          />
        </div>
        <ul className="mt-16 w-full xl:mt-10">
          {publication_items?.data?.map(({ id, attributes }, index) => (
            <li key={id} className={styles.faqs_li}>
              <div className="flex max-w-[640px] gap-[54px] xl:gap-8">
                <div className={styles.faqs_li_number}>{`${index < 9 ? 0 : ""}${index + 1}`}</div>
                <h2 className="text-h6 text-black xl:text-subtitle xl:font-semibold md:text-[20px]">
                  {attributes.title}
                </h2>
              </div>
              <div
                className="max-w-[700px] text-paragraph text-black xl:max-w-full xl:pl-20 md:pl-0 [&>*]:mt-4"
                dangerouslySetInnerHTML={{ __html: attributes.description }}
              />
            </li>
          ))}
        </ul>
        <div className="flex w-full max-w-[700px] items-center self-end xl:w-auto md:flex-col md:self-start">
          <p className="mr-4 text-body font-normal leading-[160%] text-gray-dark-100 md:mb-4 md:self-start">
            Authored by
          </p>
          <div className="flex items-center">
            {authorImage?.data?.attributes?.url && (
              <Image
                src={`${process.env.API}${authorImage?.data?.attributes?.url}`}
                className="mr-3 overflow-hidden rounded-full"
                width={32}
                height={32}
                alt={author}
              />
            )}
            <span className="text-body text-black">{author}</span>
          </div>
        </div>
      </section>
      <OtherPublications slug={props.params.slug} />
      <section className={styles.footer_section}>
        <div className="container pb-[178px] pt-[168px] xl:py-20 lg:py-10">
          <h1 className="max-w-[1112px] text-h3 font-semibold lg:max-w-[688px] lg:text-[48px]">
            Providing cybersecurity solutions for the hardest to protect assets
          </h1>
        </div>
      </section>
    </>
  )
}
