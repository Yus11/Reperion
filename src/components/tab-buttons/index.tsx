import React, { ButtonHTMLAttributes, FC, ReactNode } from "react"

interface ITabButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode
  isActiveTab: boolean
  variant?: "rounded-primary" | "rounded-secondary" | "outlined"
  className?: string
}

export const TabButton: FC<ITabButton> = ({ children, isActiveTab, variant, className = "", ...props }) => (
  <button
    className={`text-subtitle leading-[120%] ${
      variant === "rounded-primary"
        ? `tab-btn-rounded-primary ${isActiveTab && "bg-primary-main hover:bg-primary-main"}`
        : variant === "rounded-secondary"
        ? `tab-btn-rounded-secondary ${isActiveTab && "border-black bg-black text-white hover:bg-black"}`
        : variant === "outlined"
        ? `tab-btn-outlined ${
            isActiveTab && "border-b-primary-main text-black hover:border-b-primary-main hover:text-black"
          }`
        : ""
    } ${className}`}
    {...props}
  >
    {children}
  </button>
)
