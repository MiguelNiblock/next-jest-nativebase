import { render, screen } from "@testing-library/react"
import Home from "@/pages/index"
import { NativeBaseProvider } from "native-base"

describe("Home", () => {
  it("renders a heading", () => {
    render(
      <NativeBaseProvider>
        <Home />
      </NativeBaseProvider>
    )

    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
