import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Projects from '../pages/Projects/Projects';
import Contact from '../pages/Contact/Contact';
import NotFound from '../pages/NotFound/NotFound';

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <HelmetProvider>
    <BrowserRouter>{children}</BrowserRouter>
  </HelmetProvider>
);

describe('Pages render without crashing', () => {
  it('renders Home page', () => {
    const { container } = render(<Home />, { wrapper });
    expect(container.querySelector('.home')).toBeTruthy();
  });

  it('renders About page', () => {
    const { container } = render(<About />, { wrapper });
    expect(container.querySelector('.about')).toBeTruthy();
  });

  it('renders Projects page', () => {
    const { container } = render(<Projects />, { wrapper });
    expect(container.querySelector('.projects')).toBeTruthy();
  });

  it('renders Contact page', () => {
    const { container } = render(<Contact />, { wrapper });
    expect(container.querySelector('.contact')).toBeTruthy();
  });

  it('renders NotFound page', () => {
    const { container } = render(<NotFound />, { wrapper });
    expect(container.querySelector('.not-found')).toBeTruthy();
  });
});
