import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Diagram from './Components/Diagram/Diagram';
import Container2 from './Components/Diagram-michael/Container';

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* Component 'Navbar' must be placed within browser router so that navbar links work */}
        <Navbar
          leftItems={{
            home: '/',
            diagram: '/diagram',
            diagramMichael: '/diagramMichael',
          }}
        />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/diagram" element={<Diagram />} />
            <Route exact path="/diagramMichael" element={<Container2 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
