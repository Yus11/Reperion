import React, { FC } from "react"

import { IIcon } from "@/types"
export const Arrow: FC<IIcon> = ({ width = 72, height = 72, className }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className={className} fill="none">
    <circle cx="36" cy="36" r="35.5" transform="rotate(180 36 36)" stroke="#C8C8C8" />
    <path
      d="M21.6464 35.6464C21.4512 35.8417 21.4512 36.1583 21.6464 36.3536L24.8284 39.5355C25.0237 39.7308 25.3403 39.7308 25.5355 39.5355C25.7308 39.3403 25.7308 39.0237 25.5355 38.8284L22.7071 36L25.5355 33.1716C25.7308 32.9763 25.7308 32.6597 25.5355 32.4645C25.3403 32.2692 25.0237 32.2692 24.8284 32.4645L21.6464 35.6464ZM50 35.5L22 35.5L22 36.5L50 36.5L50 35.5Z"
      fill="#404040"
    />
  </svg>
)
