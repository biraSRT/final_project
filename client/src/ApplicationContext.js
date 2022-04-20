import { createContext  } from "react";
import { useState, useEffect } from "react";

export const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
    //localStorage variables
    let storedValue = localStorage.getItem("isLoggedIn");
    let storedUsername = localStorage.getItem("username");

    //isLoggedIn logic
    if(storedValue === "false"){
      storedValue = false;
    }

    if(storedValue === "true"){
      storedValue = true;
    }

    //states
    const [isLoggedIn, SetIsLoggedIn]  = useState(storedValue);
    const [apps, setApps] = useState([]);
    const [games, setGames] = useState(null);
    const [username, setUsername] = useState(storedUsername);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");
    const [users, setUsers] = useState([]);

    //localStorage useEffects
    useEffect(() => {
      localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

    useEffect(() => {
      localStorage.setItem('username', username);
    }, [username]);
    
    

    //fetch here
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

    useEffect(() => {
      fetch("http://localhost:8000/api/comments")
        .then((response) => response.json())
        .then((data) => setComments(data.data));
    }, []);

    useEffect(() => {
      fetch("http://localhost:8000/api/users")
        .then((response) => response.json())
        .then((data) => setUsers(data.data));
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
          username, 
          setUsername,
          comments, 
          setComments,
          comment, 
          setComment,
          users, 
          setUsers,
        }}
      >
        {children}
      </ApplicationContext.Provider>
    );
  };