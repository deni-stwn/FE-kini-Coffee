import { render, screen } from "@testing-library/react";
import Footer from "../component/footer";
import { BrowserRouter as Router } from "react-router-dom";

describe("Footer", () => {
  beforeEach(() => {
    render(
      <Router>
        <Footer/>
      </Router>
    )
  })

  test('should render the logo kini kopi', () => {
    const logo = screen.getByAltText('kini-kopi')
    expect(logo).toBeInTheDocument()
  })

  test('should render the logo SALT ACADEMY',() => {
    const logo = screen.getByAltText('SALT ACADEMY')
    expect(logo).toBeInTheDocument()
  })

  test('should render the collaboration text', () => {
    const colText = screen.getByText('Collaboration with:')
    const saltText = screen.getByText('SALT ACADEMY')

    expect(colText).toBeInTheDocument()
    expect(saltText).toBeInTheDocument()
  })

  test('should render the copyright text', () => {
    const copyrightText = screen.getByText('Copyright©Kini Kopi 2023');
    expect(copyrightText).toBeInTheDocument();
  });
})