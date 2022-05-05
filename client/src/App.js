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
import IndividualGameLinux from "./IndividualGameLinux";
import IndividualGameMac from "./IndividualGameMac";

const App = () => {

  const { isLoggedIn } = useContext(ApplicationContext);

  return (
    <Router>
    <Wrapper>
      <Header />
      {( isLoggedIn ) && <SecondHeader />}
      <Routes>

        <Route path="/" element={ <MainPage/> }/>
        <Route path="/signup" element={ <SignUp/> }/>
        <Route path="/signin" element={ <SignIn/> }/>

        
        {isLoggedIn && <Route path="/linux" element={ <FeaturedGamesLinux/> }/>}
        {isLoggedIn && <Route path="/mac" element={ <FeaturedGamesMac/> }/>}
        {isLoggedIn && <Route path="/win/:gameNumber" element={ <IndividualGame/> }/>}
        {isLoggedIn && <Route path="/linux/:gameNumberLinux" element={ <IndividualGameLinux/> }/>}
        {isLoggedIn && <Route path="/mac/:gameNumberMac" element={ <IndividualGameMac/> }/>}
        {isLoggedIn && <Route path="/comments" element={ <Comments/> }/>}
        {isLoggedIn && <Route path="/users" element={ <Users/> }/>}
        {isLoggedIn && <Route path="/users/:uid" element={ <IndividualUsers/> }/>}
      </Routes>

      <Footer />
    </Wrapper>
  </Router>
  );
}

const Wrapper = styled.div`
 
`;

export default App;
