import React, { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"

import { Button } from "@/components"
import { tabContainer } from "@/constants"
import { useWindowWidth } from "@/utils"

import type { FieldImages, Fields as FieldData } from "../../_types"

import styles from "./_styles.module.css"

interface IFields {
  activeTab: number
  fields: FieldData[][]
  fieldImages: FieldImages[]
}
export const Fields: FC<IFields> = ({ activeTab, fields, fieldImages }) => {
  const windowWidth = useWindowWidth()

  return (
    <AnimatePresence mode="wait">
      <motion.div key={activeTab} {...tabContainer} className={styles.container}>
        {fields[activeTab].map(({ title, text, styles: style, link }, index) => (
          <div key={index} style={{ top: index * 152 + "px" }} className={`group ${style} ${styles.field_box}`}>
            <h2 className="text-h5 text-gray-dark-100 group-hover:text-black xl:text-black lg:text-[32px]">{title}</h2>
            <div className="mt-4 flex justify-between gap-8 md:flex-col">
              <p className={`${styles.field_description} group-hover:text-black`}>{text}</p>
              <Link href={{ pathname: link, query: { product: index } }} className="flex flex-none">
                <Button variant="outlined" className={`${styles.link_button} group-hover:text-primary-main`}>
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        ))}
        {windowWidth > 1199 &&
          fieldImages.map(({ title, image, styles: style }, index) => (
            <Image
              key={index}
              className={`${styles.field_image} ${style}`}
              src={image}
              alt={title}
              width={578}
              height={443}
            />
          ))}
      </motion.div>
    </AnimatePresence>
  )
}
