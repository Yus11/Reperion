import React, { FC } from "react"
import { AnimatePresence, motion } from "framer-motion"

import { tabContainer } from "@/constants"

import { CardOptions } from "../../_types"

interface ICard {
  activeTab: number
  cardOptions: CardOptions[]
}

export const Card: FC<ICard> = ({ activeTab, cardOptions }) => (
  <AnimatePresence mode="wait">
    <motion.div key={activeTab} {...tabContainer} className="mt-10 h-[382px] text-white lg:h-[360px] md:h-[336px]">
      <div
        className={`flex h-full flex-col justify-between bg-cover bg-no-repeat p-6 ${cardOptions[activeTab].background}`}
      >
        <span className="text-caption uppercase">{cardOptions[activeTab].direction}</span>
        <div>
          <h2 className="mb-4 text-h4 lg:text-h5 md:text-[32px]">{cardOptions[activeTab].title}</h2>
          <p className="text-subtitle font-normal leading-[160%] lg:text-[20px] md:text-[16px]">
            {cardOptions[activeTab].description}
          </p>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
)
