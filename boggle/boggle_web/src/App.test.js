/*jshint esversion: 6 */
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Boggle', () => {
  const { getByText } = render(<App/>);
  const linkElement = getByText(/Boggle/i);
  expect(linkElement).toBeInTheDocument();
});

