import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Boggle', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Boggle/i);
  expect(linkElement).toBeInTheDocument();
});
test('renders Boggle mi Bomboclaat', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Boggle mi Bomboclaat/i);
  expect(linkElement).toBeInTheDocument();
});
