import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import Navbar from '../src/client/Components/Navbar/Navbar.js';
import { Provider } from 'react-redux';
import { store } from '../src/client/Redux/store.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dummy from '../src/client/Components/misc/Dummy.js';
const wrap = (jsx) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {jsx}
        <div>
          <Routes>
            <Route exact path="/" element={<Dummy />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
};

describe('Navbar', () => {
  beforeAll(() => {
    const props = {
      leftItems: {
        home: '/',
        home2: '/',
      },
    };
    render(wrap(<Navbar {...props} />));
  });
  it('has a login button', () => {
    //screen.debug();
    const loginButton = screen.getByText('log in');
    // screen.debug(loginButton); // use this to help debug by visualizing screen query
    expect(loginButton).toHaveAttribute(
      'href',
      'http://localhost:8080/auth/google'
    );
    return expect(loginButton).toBeInTheDocument();
  });
});
