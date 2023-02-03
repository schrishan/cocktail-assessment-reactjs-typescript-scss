import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should nav links', () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
