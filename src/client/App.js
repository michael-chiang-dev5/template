import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Counter } from './Components/misc/Counter/Counter';
import GetResource from './Components/GetResource/GetResource';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  const leftItems = {
    home: '/',
    problems: '/api/cards/3',
  };
  return (
    <>
      <BrowserRouter>
        {/* Component 'Navbar' must be placed within browser router so that navbar links work */}
        <Navbar leftItems={leftItems} />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/api/:resource/:id" element={<GetResource />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
