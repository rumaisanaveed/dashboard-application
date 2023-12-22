import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  // To handle sidebar and also the menu button
  const [activeMenu, setActiveMenu] = useState(true);
  // to handle nav buttons
  const [isClicked, setIsClicked] = useState(initialState);
  // to handle navbar at diff screens
  const [screenSize, setScreenSize] = useState(undefined);
  // to toggle color of the theme
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  // to toggle between dark and light dark
  const [currentMode, setCurrentMode] = useState("Light");
  // to handle the theme cancel button
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    // to automatically close the theme bar after changing the theme
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    // to automatically close the theme bar after changing the theme color
    setThemeSettings(false);
  };

  // To handle nav buttons
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

// Gives the data of the context specified
// Learned something new
export const useStateContext = () => useContext(StateContext);
