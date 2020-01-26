import React from 'react';
import TextInput from './TextInput';
import { render, fireEvent } from '@testing-library/react';

test('handles user input - Name', async () => {
    // jest.fn() allows us to mock and spy on the behavior of called functions
    // https://jestjs.io/docs/en/mock-function-api#mockfnmockimplementationfn
    window.prompt = jest.fn(() => 'input from the user');
    console.log = jest.fn();
    
    const { getByText } = render(<TextInput promptText="Name?"/>);
    fireEvent.click(getByText('Name?'));
    
    expect(window.prompt).toHaveBeenCalledWith('Name?');
    expect(console.log).toHaveBeenCalledWith('input from the user');
    expect(getByText(/input from the user/i)).toBeInTheDocument();
});

test('handles user input - Hometown', async () => {
    // jest.fn() allows us to mock and spy on the behavior of called functions
    // https://jestjs.io/docs/en/mock-function-api#mockfnmockimplementationfn
    window.prompt = jest.fn(() => 'input from the user');
    console.log = jest.fn();
    
    const { getByText } = render(<TextInput promptText="Hometown?"/>);
    fireEvent.click(getByText('Hometown?'));
    
    expect(window.prompt).toHaveBeenCalledWith('Hometown?');
    expect(console.log).toHaveBeenCalledWith('input from the user');
    expect(getByText(/input from the user/i)).toBeInTheDocument();
});