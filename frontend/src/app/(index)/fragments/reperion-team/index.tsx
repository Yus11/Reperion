import React, { FC } from "react"

export const ReperionTeam: FC = () => (
  <section id="team" className="container flex justify-between gap-8 md:flex-col md:gap-10">
    <h1 className="adaptive-title w-full max-w-[578px] xl:max-w-[48%] md:max-w-full">
      Reperion <span className="block text-black">Team</span>
    </h1>
    <div className="max-w-[578px] xl:max-w-[48%] md:max-w-full">
      <h2 className="text-h6 text-black lg:text-[24px]">
        Reperion’s team combines expertise in cybersecurity, cryptography, AI, and defense technologies.
      </h2>
      <p className="mt-6 text-paragraph text-gray-dark-100">
        Our technologies were developed by academics who hold relevant roles at University of Bristol and
        Carnegie-Mellon University. Reperion is led by an entrepreneur with a finance background, maritime domain
        expertise, and leadership experience in Offshore Oil & Gas Services.
      </p>
    </div>
  </section>
)
