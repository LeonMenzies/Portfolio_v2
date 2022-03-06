import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavMenu from "../../portfolio/src/components/NavMenu";
import About from "../../portfolio/src/pages/About";
import Projects from "../../portfolio/src/pages/Projects";
import Contact from "../../portfolio/src/pages/Contact";
import Home from "../../portfolio/src/pages/Home";

function App() {
  return (
      <>
        <Router>
          <NavMenu/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
          </Routes>
          <Routes>
            <Route exact path="/about" element={<About/>}/>
          </Routes>
          <Routes>
            <Route exact path="/projects" element={<Projects/>}/>
          </Routes>
          <Routes>
            <Route exact path="/contact" element={<Contact/>}/>
          </Routes>
        </Router>
      </>
  );
}

export default App;
