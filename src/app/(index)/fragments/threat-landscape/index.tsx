import React, { FC } from "react"

import styles from "./_styles.module.css"

export const ThreatLandscape: FC = () => (
  <section className="overflow-hidden bg-black">
    <div className={`container ${styles.container}`}>
      <h1 className="adaptive-title">
        Threat <span className="block font-normal text-white">Landscape</span>
      </h1>
      <div className="max-w-[700px] lg:max-w-[328px]">
        <h2 className="text-h6 text-white lg:text-[24px]">Assets are increasingly connected to the internet.</h2>
        <p className="mb-[56px] mt-6 text-paragraph text-gray-main lg:mb-8">
          Drones are increasingly sophisticated and accessible. Cyber attacks and drone intrusions are becoming the
          next-generation gray zone attack methods that put people, assets, and the environment at risk. Connected
          transportation assets across sea, land, and air are the new frontier in cyberattacks. Drones are are the new
          frontier of espionage, surveillance, contraband, and kinetic attacks.
        </p>
        <p className="text-small text-gray-dark-100">
          The &quot;Gray Zone&quot; is an ever-expanding space between peace and war in which unconventional means are
          used by state and non-state actors to achieve objectives without escalation to armed conflict.
        </p>
      </div>
    </div>
  </section>
)
