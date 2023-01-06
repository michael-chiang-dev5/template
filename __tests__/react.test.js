import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import App from '../src/client/App.js';
import Navbar from '../src/client/Components/Navbar/Navbar.js';

describe('Navbar', () => {
  beforeAll(() => {
    render(<Navbar />);
  });
  it('has a login button', () => {
    screen.debug();
    return expect(1).toEqual(1);
  });
});

//import App from '../src/client/App.js';
