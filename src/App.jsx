import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from 'styled-components';

import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import NavMenu from "./components/NavMenu";

const StyledContainer = styled.div`
  margin-top: 3.5rem;
`;



const App = () => {
  return (
    <BrowserRouter>
      <NavMenu />
      
      <StyledContainer>
        <Routes>
        <Route exact path="/" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </StyledContainer>
    </BrowserRouter>
  );
};

export default App;
