import { createContext  } from "react";
import { useState, useEffect } from "react";

export const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
    //put fetch here

   

    return (
      <ApplicationContext.Provider
        value={{
          

        }}
      >
        {children}
      </ApplicationContext.Provider>
    );
  };