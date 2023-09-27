import React, { ButtonHTMLAttributes, FC, ReactNode } from "react"

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode
  variant?: "filled" | "rounded" | "rounded-reverse" | "outlined"
  className?: string
}

export const Button: FC<IButton> = ({ children, variant, className = "", ...props }) => {
  return (
    <button
      className={`group ${
        variant === "filled"
          ? "button-primary w-[207px] disabled:text-gray-main"
          : variant === "rounded-reverse" || variant === "rounded"
          ? "button-primary w-[334px] rounded-[55px]"
          : variant === "outlined"
          ? "button-secondary"
          : "button-primary w-[194px]"
      } ${className}`}
      {...props}
    >
      {variant === "filled" ? (
        <>
          <svg
            className="transition-all duration-200 group-hover:rotate-45 group-disabled:rotate-0"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="20" className="fill-white group-disabled:fill-gray-main" />
            <path
              d="M26.8137 13.6863C26.8137 13.134 26.366 12.6863 25.8137 12.6863L16.8137 12.6863C16.2614 12.6863 15.8137 13.134 15.8137 13.6863C15.8137 14.2386 16.2614 14.6863 16.8137 14.6863L24.8137 14.6863L24.8137 22.6863C24.8137 23.2386 25.2614 23.6863 25.8137 23.6863C26.366 23.6863 26.8137 23.2386 26.8137 22.6863L26.8137 13.6863ZM15.2071 25.7071L26.5208 14.3934L25.1066 12.9792L13.7929 24.2929L15.2071 25.7071Z"
              className="fill-black group-disabled:fill-gray-light"
            />
          </svg>
          {children}
        </>
      ) : variant === "rounded" ? (
        <>
          {children}
          <svg
            className="transition-all duration-200 group-hover:rotate-45 group-disabled:rotate-0"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
          >
            <circle cx="20" cy="20" r="20" className="fill-white group-disabled:fill-gray-main" />
            <path
              d="M26.8137 13.6863C26.8137 13.134 26.366 12.6863 25.8137 12.6863L16.8137 12.6863C16.2614 12.6863 15.8137 13.134 15.8137 13.6863C15.8137 14.2386 16.2614 14.6863 16.8137 14.6863L24.8137 14.6863L24.8137 22.6863C24.8137 23.2386 25.2614 23.6863 25.8137 23.6863C26.366 23.6863 26.8137 23.2386 26.8137 22.6863L26.8137 13.6863ZM15.2071 25.7071L26.5208 14.3934L25.1066 12.9792L13.7929 24.2929L15.2071 25.7071Z"
              className="fill-black group-disabled:fill-gray-light"
            />
          </svg>
        </>
      ) : variant === "rounded-reverse" ? (
        <>
          <svg
            className="transition-all duration-200 group-hover:-rotate-45 group-disabled:rotate-0"
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
          >
            <circle
              cx="20.5"
              cy="20"
              r="20"
              transform="rotate(180 20.5 20)"
              className="fill-white group-disabled:fill-gray-main"
            />
            <path
              d="M14.2846 13.8615C13.7344 13.9096 13.3274 14.3947 13.3755 14.9448L14.1599 23.9106C14.208 24.4608 14.6931 24.8678 15.2433 24.8196C15.7934 24.7715 16.2004 24.2865 16.1523 23.7363L15.4551 15.7667L23.4246 15.0695C23.9748 15.0213 24.3818 14.5363 24.3337 13.9861C24.2855 13.4359 23.8005 13.029 23.2503 13.0771L14.2846 13.8615ZM27.2712 24.3762L15.0145 14.0916L13.7289 15.6237L25.9856 25.9083L27.2712 24.3762Z"
              className="fill-black group-disabled:fill-gray-light"
            />
          </svg>
          {children}
        </>
      ) : variant === "outlined" ? (
        <>
          {children}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute -right-10 transition-all duration-200 group-hover:-right-12 group-disabled:-right-10"
          >
            <path
              className="fill-gray-dark-100 group-hover:fill-primary-main group-active:fill-primary-main group-disabled:fill-gray-light"
              d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
            />
          </svg>
        </>
      ) : (
        children
      )}
    </button>
  )
}
