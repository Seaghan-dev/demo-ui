import { ComponentPropsWithRef } from "react"

export interface ButtonProps extends ComponentPropsWithRef<"button"> {
    label: string
}