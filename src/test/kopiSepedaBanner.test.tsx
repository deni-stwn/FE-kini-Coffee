import React from 'react';
import { render, screen } from '@testing-library/react';

import img1 from '../assets/story-img/img-story-1.svg'
import img2 from '../assets/story-img/img-story-2.svg';
import img3 from '../assets/story-img/img-story-3.svg';
import logo from '../assets/story-img/img-story-logo.svg';
import BannerKopiSepeda from '../component/bannerKopiSepeda/bannerKopiSepeda';

describe('StorysCoffeeBicycle', () => {
  test('renders the story images and logo', () => {
    render(<BannerKopiSepeda />);

    const img1Element = screen.getByAltText('kopi');
    const img2Element = screen.getByAltText('kini');
    const img3Element = screen.getByAltText('sepeda');
    const logoElement = screen.getByAltText('logo');

    expect(img1Element).toHaveAttribute('src', img1);
    expect(img2Element).toHaveAttribute('src', img2);
    expect(img3Element).toHaveAttribute('src', img3);
    expect(logoElement).toHaveAttribute('src', logo);
  });

  test('renders the story title', () => {
    render(<BannerKopiSepeda />);

    const titleElement = screen.getByRole('heading', {
      name: /cerita - cerita tentang kopi dan sepeda/i,
    });

    expect(titleElement).toBeInTheDocument();
  });
});
