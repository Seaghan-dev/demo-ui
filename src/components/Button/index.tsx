import React from "react"
import { css, styled } from "@stitches/react"

import { ButtonProps } from "./types"

const buttonCss = css({
    // typography
    fontSize: "16px",
    fontWeight: "bold",
    color: "WhiteSmoke",

    // border
    border: "1px solid transparent",
    borderRadius: "6px",

    // background color
    backgroundColor: "CadetBlue",

    // spacing
    padding: "8px 16px"
})

const StitchesButton = styled("button", buttonCss)

const Button = ({ label, ...props }: ButtonProps) => {
    return (
        <StitchesButton {...props}>
            {label}
        </StitchesButton>
    )
}

export default Button