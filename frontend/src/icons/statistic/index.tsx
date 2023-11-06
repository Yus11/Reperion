import React, { FC } from "react"

import { IIcon } from "@/types"

export const Statistic: FC<IIcon> = ({ width = 80, height = 80, className, fill = "black" }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={className} fill="none">
    <g clipPath="url(#clip0_1535_382)">
      <path
        d="M60.9242 15.0178L61.2429 14.5929L60.9479 14.1513C60.0337 12.7825 59.5 11.1408 59.5 9.375C59.5 4.61984 63.3698 0.75 68.125 0.75C72.8802 0.75 76.75 4.61984 76.75 9.375C76.75 14.1302 72.8802 18 68.125 18C67.2262 18 66.3604 17.8615 65.5463 17.6059L65.04 17.4469L64.7216 17.8714L56.5758 28.7322L56.2571 29.1571L56.5521 29.5987C57.4663 30.9675 58 32.6092 58 34.375C58 39.1302 54.1302 43 49.375 43C44.6198 43 40.75 39.1302 40.75 34.375C40.75 33.0446 41.053 31.7851 41.5924 30.6598L41.822 30.1809L41.4464 29.8053L35.1947 23.5536L34.8191 23.178L34.3402 23.4076C33.2149 23.9471 31.9554 24.25 30.625 24.25C29.7262 24.25 28.8604 24.1115 28.0463 23.8559L27.54 23.6969L27.2216 24.1214L19.0758 34.9822L18.7571 35.4071L19.0521 35.8487C19.9663 37.2175 20.5 38.8592 20.5 40.625C20.5 45.3802 16.6302 49.25 11.875 49.25C7.11984 49.25 3.25 45.3802 3.25 40.625C3.25 35.8698 7.11984 32 11.875 32C12.7738 32 13.6396 32.1385 14.4537 32.3941L14.96 32.5531L15.2784 32.1286L23.4242 21.2678L23.7429 20.8429L23.4479 20.4013C22.5337 19.0325 22 17.3908 22 15.625C22 10.8698 25.8698 7 30.625 7C35.3802 7 39.25 10.8698 39.25 15.625C39.25 16.9556 38.9471 18.2148 38.4075 19.3401L38.1778 19.8191L38.5534 20.1947L44.8053 26.4466L45.1809 26.8222L45.6599 26.5925C46.7852 26.0529 48.0446 25.75 49.375 25.75C50.2738 25.75 51.1396 25.8885 51.9537 26.1441L52.46 26.3031L52.7784 25.8786L60.9242 15.0178ZM14.25 57V79.25H9.5V57H14.25ZM33 35.125V79.25H28.25V35.125H33ZM51.75 50.75V79.25H47V50.75H51.75ZM8 40.625C8 42.7623 9.73766 44.5 11.875 44.5C14.0123 44.5 15.75 42.7623 15.75 40.625C15.75 38.4877 14.0123 36.75 11.875 36.75C9.73766 36.75 8 38.4877 8 40.625ZM26.75 15.625C26.75 17.7623 28.4877 19.5 30.625 19.5C32.7623 19.5 34.5 17.7623 34.5 15.625C34.5 13.4877 32.7623 11.75 30.625 11.75C28.4877 11.75 26.75 13.4877 26.75 15.625ZM45.5 34.375C45.5 36.5123 47.2377 38.25 49.375 38.25C51.5123 38.25 53.25 36.5123 53.25 34.375C53.25 32.2377 51.5123 30.5 49.375 30.5C47.2377 30.5 45.5 32.2377 45.5 34.375ZM64.25 9.375C64.25 11.5123 65.9877 13.25 68.125 13.25C70.2623 13.25 72 11.5123 72 9.375C72 7.23766 70.2623 5.5 68.125 5.5C65.9877 5.5 64.25 7.23766 64.25 9.375ZM70.5 28.875V79.25H65.75V28.875H70.5Z"
        stroke="#787878"
        strokeWidth="1.5"
      />
    </g>
    <defs>
      <clipPath id="clip0_1535_382">
        <rect width={width} height={height} fill="white" />
      </clipPath>
    </defs>
  </svg>
)
