import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ButtonPagination from '../component/button/ButtonPagination';

describe('ButtonPagination', () => {
  const mockHandlePrev = jest.fn();
  const mockHandleNext = jest.fn();
  const mockPage = 2;
  const mockTotalPages = 5;

  test('renders the previous and next buttons', () => {
    const { getByText } = render(
      <ButtonPagination
        handlePrev={mockHandlePrev}
        handleNext={mockHandleNext}
        page={mockPage}
        totalPages={mockTotalPages}
      />
    );

    const prevButtonElement = getByText('Prev');
    const nextButtonElement = getByText('Next');

    expect(prevButtonElement).toBeInTheDocument();
    expect(nextButtonElement).toBeInTheDocument();
  });

  test('calls the handlePrev function when the previous button is clicked', () => {
    const { getByText } = render(
      <ButtonPagination
        handlePrev={mockHandlePrev}
        handleNext={mockHandleNext}
        page={mockPage}
        totalPages={mockTotalPages}
      />
    );

    const prevButtonElement = getByText('Prev');
    fireEvent.click(prevButtonElement);

    expect(mockHandlePrev).toHaveBeenCalledTimes(1);
  });

  test('calls the handleNext function when the next button is clicked', () => {
    const { getByText } = render(
      <ButtonPagination
        handlePrev={mockHandlePrev}
        handleNext={mockHandleNext}
        page={mockPage}
        totalPages={mockTotalPages}
      />
    );

    const nextButtonElement = getByText('Next');
    fireEvent.click(nextButtonElement);

    expect(mockHandleNext).toHaveBeenCalledTimes(1);
  });

  test('disables the previous button when the page is 1', () => {
    const { getByText } = render(
      <ButtonPagination
        handlePrev={mockHandlePrev}
        handleNext={mockHandleNext}
        page={1}
        totalPages={mockTotalPages}
      />
    );

    const prevButtonElement = getByText('Prev');

    expect(prevButtonElement).toBeDisabled();
  });

  test('disables the next button when the page is equal to the total number of pages', () => {
    const { getByText } = render(
      <ButtonPagination
        handlePrev={mockHandlePrev}
        handleNext={mockHandleNext}
        page={mockTotalPages}
        totalPages={mockTotalPages}
      />
    );

    const nextButtonElement = getByText('Next');

    expect(nextButtonElement).toBeDisabled();
  });

  test('displays the current page and total pages', () => {
    const { getByText } = render(
      <ButtonPagination
        handlePrev={mockHandlePrev}
        handleNext={mockHandleNext}
        page={mockPage}
        totalPages={mockTotalPages}
      />
    );

    const pageElement = getByText(mockPage.toString());
    const totalPagesElement = getByText(mockTotalPages.toString());

    expect(pageElement).toBeInTheDocument();
    expect(totalPagesElement).toBeInTheDocument();
  });
});
