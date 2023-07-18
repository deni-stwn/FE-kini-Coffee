import React from 'react';
import { render, screen } from '@testing-library/react';
import ShareToLink from '../component/shareToLink';

describe('ShareToLink', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: {
        href: 'https://example.com',
      },
      writable: true,
    });
  });

  test('renders the share buttons', () => {
    render(<ShareToLink />);

    const facebookLink = screen.getByRole('link', { name: /facebook/i });
    const pinterestLink = screen.getByRole('link', { name: /pinterest/i });
    const twitterLink = screen.getByRole('link', { name: /twitter/i });
    const emailLink = screen.getByRole('link', { name: /email/i });

    expect(facebookLink).toHaveAttribute(
      'href',
      'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fexample.com'
    );
    expect(pinterestLink).toHaveAttribute(
      'href',
      'https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fexample.com'
    );
    expect(twitterLink).toHaveAttribute(
      'href',
      'https://twitter.com/share?url=https%3A%2F%2Fexample.com'
    );
    expect(emailLink).toHaveAttribute(
      'href',
      'mailto:?body=https%3A%2F%2Fexample.com'
    );
  });
});
