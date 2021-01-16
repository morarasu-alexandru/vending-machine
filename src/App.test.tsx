import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from './pages/home';

// todo: remove this file and add other mock tests

test('renders learn react link', () => {
  render(<HomePage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
