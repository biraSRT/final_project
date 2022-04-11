import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import LandingPage from "./LandingPage";
import SignUp from "./SignUp";
import Footer from "./Footer";
import SignIn from "./SignIn";

const App = () => {
  return (
    <Router>
    <Wrapper>
      <Header />

      <Routes>

        <Route path="/" element={ <LandingPage/> }/>
        <Route path="/signup" element={ <SignUp/> }/>
        <Route path="/signin" element={ <SignIn/> }/>
      </Routes>

      <Footer />
    </Wrapper>
  </Router>
  );
}

const Wrapper = styled.div`
 
`;

export default App;
