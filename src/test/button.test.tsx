import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../component/button/Button';

describe('Button', () => {
  const mockLink = 'https://example.com';
  const mockButtonStyle = 'btn-primary';

  test('renders the button wtesth the correct children', () => {
    const buttonText = 'Click me';
    const { getByText } = render(
      <Button link={mockLink} ButtonStyle={mockButtonStyle}>
        {buttonText}
      </Button>
    );

    const buttonElement = getByText(buttonText);
    expect(buttonElement).toBeInTheDocument();
  });


  test('applies the correct button style', () => {
    const buttonText = 'Click me';
    const { getByText } = render(
      <Button link={mockLink} ButtonStyle={mockButtonStyle}>
        {buttonText}
      </Button>
    );

    const buttonElement = getByText(buttonText);
    expect(buttonElement).toHaveClass(mockButtonStyle);
  });
});
