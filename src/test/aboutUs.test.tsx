import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutSection, { AboutProps } from '../component/aboutUs/aboutSection';

const mockProps: AboutProps = {
  banner: 'banner.jpg',
  title: 'About Us',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
};

describe('AboutSection', () => {
  test('renders without error', () => {
    render(<AboutSection {...mockProps} />);
  });

  test('displays the correct title', () => {
    render(<AboutSection {...mockProps} />);
    const titleElement = screen.getByText('About Us');
    expect(titleElement).toBeInTheDocument();
  });

  test('displays the correct description', () => {
    render(<AboutSection {...mockProps} />);
    const descriptionElement = screen.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    expect(descriptionElement).toBeInTheDocument();
  });

  test('displays the banner image', () => {
    render(<AboutSection {...mockProps} />);
    const bannerImageElement = screen.getByAltText('');
    expect(bannerImageElement).toHaveAttribute('src', 'banner.jpg');
  });
});
