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
import SecondHeader from "./SecondHeader";
import FeaturedGamesMac from "./FeaturedGamesMac";
import IndividualGame from "./IndividualGame";
import { ApplicationContext } from "./ApplicationContext";
import { useContext } from "react";
import Comments from "./Comments";
import Users from "./Users";
import IndividualUsers from "./IndividualUsers";

const App = () => {

  const { isLoggedIn, games } = useContext(ApplicationContext);

  return (
    <Router>
    <Wrapper>
      <Header />
      {(isLoggedIn && (games !== null)) && <SecondHeader />}
      <Routes>

        <Route path="/" element={ <MainPage/> }/>
        <Route path="/signup" element={ <SignUp/> }/>
        <Route path="/signin" element={ <SignIn/> }/>
        <Route path="/linux" element={ <FeaturedGamesLinux/> }/>
        <Route path="/mac" element={ <FeaturedGamesMac/> }/>
        <Route path="/win/:gameNumber" element={ <IndividualGame/> }/>
        <Route path="/comments" element={ <Comments/> }/>
        <Route path="/users" element={ <Users/> }/>
        <Route path="/users/:uid" element={ <IndividualUsers/> }/>
      </Routes>

      <Footer />
    </Wrapper>
  </Router>
  );
}

const Wrapper = styled.div`
 
`;

export default App;
