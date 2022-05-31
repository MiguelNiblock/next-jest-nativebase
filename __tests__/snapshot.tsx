import { render } from "@testing-library/react"
import Home from "@/pages/index"
import { NativeBaseProvider } from "native-base"

it("renders homepage unchanged", () => {
  const { container } = render(
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  )
  expect(container).toMatchSnapshot()
})
