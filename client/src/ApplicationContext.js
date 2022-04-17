import { createContext  } from "react";
import { useState, useEffect } from "react";

export const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
    //put fetch here
    let storedValue = localStorage.getItem("isLoggedIn");

    if(storedValue === "false"){
      storedValue = false;
    }

    if(storedValue === "true"){
      storedValue = true;
    }

    const [isLoggedIn, SetIsLoggedIn]  = useState(storedValue);
    const [apps, setApps] = useState([]);
    const [games, setGames] = useState(null);

    useEffect(() => {
      localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

    useEffect(() => {
      fetch("http://localhost:8000/api/apps")
        .then((response) => response.json())
        .then((data) => setApps(data.data));
    }, []);

    useEffect(() => {
      fetch("http://localhost:8000/api/games")
        .then((response) => response.json())
        .then((data) => setGames(data));
    }, []);
   

    return (
      <ApplicationContext.Provider
        value={{
          isLoggedIn, 
          SetIsLoggedIn,
          apps, 
          setApps,
          games, 
          setGames,
        }}
      >
        {children}
      </ApplicationContext.Provider>
    );
  };