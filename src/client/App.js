import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import Container2 from './Components/Diagram-michael/Container';
import Diagram from './Components/Diagram/Diagram';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Questions from './Components/Questions/Questions';
import React from 'react';

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
            diagramQuestions: '/diagramQuestions',
          }}
        />
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/diagram" element={<Diagram />} />
            <Route exact path="/questions" element={<Questions />} />
            <Route
              exact
              path="/diagramQuestions/:id"
              element={<Container2 />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
