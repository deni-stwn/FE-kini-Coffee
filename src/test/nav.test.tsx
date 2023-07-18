import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "../component/nav";

describe("Nav", () => {
  beforeEach(() => {
    render(
      <Router>
        <Nav navbarClass={""}/>
      </Router>
    )
  })
  test("should render the logo", () => {

    const logo = screen.getByAltText("kini-kopi");
    expect(logo).toBeInTheDocument();
  });

  test("should toggle menu when clicked", () => {

    const menuButton = screen.getByTestId("menu-button");
    fireEvent.click(menuButton);
  });

  test("should navigate to the correct link when clicked", () => {

    const home = screen.getByText("Home")
    fireEvent.click(home)

    const aboutLink = screen.getByText("About");
    fireEvent.click(aboutLink);

    const kopiSepeda = screen.getByText("Kopi Sepeda")
    fireEvent.click(kopiSepeda)

    const contact = screen.getByText("Contact")
    fireEvent.click(contact)
  });

  test("should menu active font bold", () => {
    const activeLink = screen.getByText('Home')
    expect(activeLink).toHaveClass('font-semibold')
  })
});
