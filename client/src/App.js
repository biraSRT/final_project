import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./Header";
import LandingPage from "./LandingPage";

const App = () => {
  return (
    <Router>
    <div>
      <Header />

      <Routes>

        <Route path="/" element={ <LandingPage/> }/>
      
      </Routes>
    </div>
  </Router>
  );
}

export default App;
