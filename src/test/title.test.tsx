import Title from "../component/title";
import { render } from "@testing-library/react";

describe('Title', () => {
  test('should render title text', () => {
    const { getByText } = render(<Title title={"Location Map"}/>)
    const Element = getByText('Location Map')
    expect(Element).toBeInTheDocument()
  })
})