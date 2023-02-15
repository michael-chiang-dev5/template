import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Container from './Components/Diagram/Container';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Questions from './Components/Questions/Questions';
import React from 'react';
import styles from './index.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* Component 'Navbar' must be placed within browser router so that navbar links work */}
        <Navbar
          leftItems={{
            home: '/',
            diagram: '/diagram',
            questions: '/questions',
          }}
        />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/diagram/:id" element={<Container />} />
            <Route exact path="/questions" element={<Questions />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
