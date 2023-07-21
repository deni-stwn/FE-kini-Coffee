import React from "react";
import { render } from "@testing-library/react";
import Maps from "../component/map";

describe("Maps", () => {
  it("renders the title correctly", () => {
    const { getByText } = render(<Maps />);
    const titleElement = getByText("Location Map");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the content paragraph correctly", () => {
    const { getByText } = render(<Maps />);
    const contentElement = getByText(
      "Kini Kopi adalah kedai kopi di Sukamantri, Kabupaten Bandung, Jawa Barat. Kami menawarkan pengalaman kopi unik dan memuaskan. Biji kopi pilihan kami dipanggang dengan hati-hati untuk menghadirkan cita rasa yang kaya dan aroma yang menggugah selera. Selain itu, kami menciptakan lingkungan yang hangat dan ramah untuk pelanggan kami."
    );
    expect(contentElement).toBeInTheDocument();
  });

  it("renders the Google Maps iframe correctly", () => {
    const { getByTitle } = render(<Maps />);
    const iframeElement = getByTitle("kini coffee");
    expect(iframeElement).toBeInTheDocument();
    expect(iframeElement).toHaveAttribute(
      "src",
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.630522840571!2d107.76465920949252!3d-7.052628292920277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c7e4d80886a1%3A0x6984dbe8e17a1d5d!2sKini%20Kopi!5e0!3m2!1sid!2sid!4v1687798967030!5m2!1sid!2sid"
    );
    expect(iframeElement).toHaveAttribute("loading", "lazy");
    expect(iframeElement).toHaveClass("w-full h-[252px]");
  });
});
