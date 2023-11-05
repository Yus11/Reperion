"use client"
import React, { FC, memo, useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import { Button, ControlledInput } from "@/components"

import { emailPattern } from "../../_constants"

import { useFormOptions } from "./utils"

export type FieldValues = {
  name: string
  email: string
}

interface IForm {
  isLight: boolean
}

export const Form: FC<IForm> = memo(({ isLight }) => {
  const [message, setMessage] = useState<string>()

  const [isLoading, setLoading] = useState(false)

  const {
    control,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<FieldValues>({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
    },
  })

  const { onSubmit, generateInputStyles } = useFormOptions({ setLoading, message, setMessage, reset })

  useEffect(() => {
    reset()
  }, [isLight])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-[578px] 1xl:max-w-full">
      <ControlledInput
        name="name"
        control={control}
        errors={errors}
        requiredMessage="Name is required"
        placeholder="Name"
        minLength={2}
        maxLength={20}
        className={generateInputStyles(isLight)}
      />
      <ControlledInput
        name="email"
        control={control}
        errors={errors}
        type="email"
        placeholder="Email"
        requiredMessage="Email is required"
        rules={{
          pattern: {
            value: emailPattern,
            message: "Please enter a valid email",
          },
        }}
        className={`mt-6 ${generateInputStyles(isLight)}`}
      />
      <Button
        type="submit"
        className={`mb-6 mt-[56px] transition-all duration-200 ${
          !isLoading && message ? "w-full max-w-full px-4" : ""
        }`}
        disabled={isLoading || message !== undefined}
      >
        {isLoading ? (
          <>
            <svg
              className="text-gray-200 dark:text-gray-600 inline h-7 w-7 animate-spin fill-gray-dark-200 dark:fill-primary-dark"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span>Sending...</span>
          </>
        ) : !isLoading && message ? (
          <span className="text-primary-main md:text-[16px]">{message}</span>
        ) : (
          "Submit"
        )}
      </Button>
      <span className="text-small text-gray-dark-100">
        I consent to the use of my personal information by REPERION: to receive documentation and messages regarding our
        products and services. For more information, please see our{" "}
        <a href="/Reperion_Data_privacy_policy.pdf" target="_blank" className="text-primary-main">
          Privacy Notice.
        </a>
      </span>
    </form>
  )
})
