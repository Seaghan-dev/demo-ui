import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

import Button from "./index"

describe("Running Test for Default Button", () => {
    test("Check Button Disabled", () => {
        render(<Button label="Disabled Button" disabled />)
        expect(screen.getByRole("button", { name: "Disabled Button" })).toBeDisabled()
    })
})