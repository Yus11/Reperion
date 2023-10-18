import React, { ButtonHTMLAttributes, FC, ReactNode } from "react"
import { motion } from "framer-motion"

interface ITabButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode
  isActiveTab: boolean
  animationId: string
  variant?: "rounded-primary" | "rounded-secondary" | "outlined"
  className?: string
}

export const TabButton: FC<ITabButton> = ({
  children,
  isActiveTab,
  animationId,
  variant,
  className = "",
  ...props
}) => (
  <button
    className={`relative z-10 text-subtitle leading-[120%] ${
      variant === "rounded-primary"
        ? `tab-btn-rounded-primary ${isActiveTab && "hover:bg-primary-main"}`
        : variant === "rounded-secondary"
        ? `tab-btn-rounded-secondary ${isActiveTab && "text-white hover:bg-black"}`
        : variant === "outlined"
        ? `tab-btn-outlined lg:text-[18px] ${isActiveTab && "text-black hover:border-b-[transparent] hover:text-black"}`
        : ""
    } ${className}`}
    style={{ WebkitTapHighlightColor: "transparent" }}
    {...props}
  >
    {isActiveTab && (
      <motion.span
        layoutId={animationId}
        className={`absolute -z-[1] ${
          variant === "rounded-primary"
            ? "inset-0 rounded-full bg-primary-main"
            : variant === "outlined"
            ? "-bottom-[3px] left-0 right-0 h-[3px] bg-primary-main"
            : variant === "rounded-secondary"
            ? "inset-0 rounded-full bg-black"
            : ""
        }`}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      />
    )}
    {children}
  </button>
)
