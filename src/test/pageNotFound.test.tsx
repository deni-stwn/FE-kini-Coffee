import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFound from "../pages/NotFoundPage";

describe('NotFound', () => {
  test('renders without error', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    // Assert that the component is rendered without throwing any error
  });

  test('displays the 404 message', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const errorMessage = screen.getByText(/page 404/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('renders the "Go home" link', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    const goHomeLink = screen.getByRole('link', { name: /go home/i });
    expect(goHomeLink).toBeInTheDocument();
    expect(goHomeLink.getAttribute('href')).toBe('/');
  });
});
