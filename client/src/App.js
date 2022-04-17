import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import MainPage from "./MainPage";
import SignUp from "./SignUp";
import Footer from "./Footer";
import SignIn from "./SignIn";
import FeaturedGamesLinux from "./FeaturedGamesLinux";

const App = () => {
  return (
    <Router>
    <Wrapper>
      <Header />

      <Routes>

        <Route path="/" element={ <MainPage/> }/>
        <Route path="/signup" element={ <SignUp/> }/>
        <Route path="/signin" element={ <SignIn/> }/>
        <Route path="/linux" element={ <FeaturedGamesLinux/> }/>
      </Routes>

      <Footer />
    </Wrapper>
  </Router>
  );
}

const Wrapper = styled.div`
 
`;

export default App;
