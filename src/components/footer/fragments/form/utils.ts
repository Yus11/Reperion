import { Dispatch, SetStateAction, useEffect } from "react"
import { SubmitHandler, UseFormReset } from "react-hook-form"

import { FieldValues } from "./index"

import styles from "./styles.module.css"

type UseFormOptions = {
  setLoading: Dispatch<SetStateAction<boolean>>
  message: string | undefined
  setMessage: Dispatch<SetStateAction<string | undefined>>
  reset: UseFormReset<FieldValues>
}

export function useFormOptions({ setLoading, message, setMessage, reset }: UseFormOptions) {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setLoading(true)

    await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((onfulfilled) => {
      if (onfulfilled.ok) {
        setLoading(false)
        setMessage("Message sent successfully!")
        reset()
      } else {
        setLoading(false)
        setMessage("Message not sent, please check internet connection and retry")
      }
    })
  }

  function generateInputStyles(theme: boolean): string {
    if (theme) {
      return styles.input_light
    } else {
      return styles.input_dark
    }
  }

  useEffect(() => {
    let timeOut: NodeJS.Timeout

    if (message && message.length < 27) {
      timeOut = setTimeout(() => {
        setMessage(undefined)
      }, 4000)
    } else {
      timeOut = setTimeout(() => {
        setMessage(undefined)
      }, 5000)
    }

    return () => {
      timeOut && clearTimeout(timeOut)
    }
  }, [message])

  return { onSubmit, generateInputStyles }
}
