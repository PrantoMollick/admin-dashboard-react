import React, { createContext, useContext, useState } from "react";

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const StateContext = createContext();

export const ContextProvider = (props) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [currentColor, setCurrentColor] = useState('#03c9d7');
  const [screenSize, setScreenSize] = useState(undefined);




  const clickHandler = (clicked) => { 
    setIsClicked({...initialState, [clicked] : true });
  }



  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked, 
        setIsClicked, 
        clickHandler,
        screenSize,
        setScreenSize,
        currentColor, 
        setCurrentColor
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
