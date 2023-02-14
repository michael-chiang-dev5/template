import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Diagram from './Components/Diagram/Diagram';

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* Component 'Navbar' must be placed within browser router so that navbar links work */}
        <Navbar
          leftItems={{
            home: '/',
            diagram: '/diagram',
          }}
        />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/diagram" element={<Diagram />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
