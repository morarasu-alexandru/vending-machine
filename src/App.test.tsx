import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// todo: remove this file and add other mock tests

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
