import { createContext  } from "react";
import { useState, useEffect } from "react";

export const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
    //put fetch here
    const storedValue = localStorage.getItem("isLoggedIn");

    const [isLoggedIn, SetIsLoggedIn]  = useState(storedValue);

    useEffect(() => {
      localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);
   

    return (
      <ApplicationContext.Provider
        value={{
          isLoggedIn, 
          SetIsLoggedIn,
        }}
      >
        {children}
      </ApplicationContext.Provider>
    );
  };