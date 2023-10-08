import React, { FC } from "react"

import { universities } from "./_constants"

import styles from "./_styles.module.css"

export const Partnerships: FC = () => {
  return (
    <section className="container">
      <h1 className="text-h2 font-semibold text-black lg:text-[56px] md:break-words md:text-[44px]">
        Partnerships & Collaborations
      </h1>
      <ul className="mt-[64px] flex w-full flex-wrap border-[1px] border-l-0 border-t-0 border-gray-light lg:mt-10">
        {universities.map((university, index) => (
          <li key={index} className={`${university} ${styles.logo_card}`} />
        ))}
      </ul>
    </section>
  )
}
