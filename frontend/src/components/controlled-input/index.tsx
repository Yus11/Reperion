import { FC, HTMLInputTypeAttribute, InputHTMLAttributes, ReactElement } from "react"
import { Control, Controller, FieldErrors, FieldValues, RegisterOptions } from "react-hook-form"

interface IControlledInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  control: Control<FieldValues> | any
  placeholder: string
  errors: FieldErrors<FieldValues>
  rules?: Omit<RegisterOptions<FieldValues, string>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">
  requiredMessage?: string
  minLength?: number
  maxLength?: number
  type?: HTMLInputTypeAttribute
  className?: string
}
export const ControlledInput: FC<IControlledInput> = ({
  name,
  control,
  placeholder,
  errors,
  rules,
  requiredMessage,
  minLength,
  maxLength,
  type = "text",
  className = "",
}) => (
  <div className="relative w-full">
    <Controller
      name={name}
      control={control}
      rules={{
        required: requiredMessage,
        minLength: minLength && { value: minLength, message: `Minimum number of characters ${minLength}` },
        maxLength: maxLength && { value: maxLength, message: `Maximum number of characters ${maxLength}` },
        ...rules,
      }}
      render={({ field }): ReactElement<HTMLInputElement> => (
        <input
          className={`input ${className} ${
            errors[name]?.message ? "!focus:border-b-primary-main !border-b-primary-main" : ""
          }`}
          aria-invalid={errors[name] ? "true" : "false"}
          type={type}
          placeholder={placeholder}
          {...field}
        />
      )}
    />
    {errors[name]?.message && (
      <p
        role="alert"
        className="absolute -bottom-6 left-0 block text-small text-primary-main"
        children={`${errors[name]?.message}`}
      />
    )}
  </div>
)
