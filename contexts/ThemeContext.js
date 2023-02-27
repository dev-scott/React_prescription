import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeStyle ={

    backgroundColor: isDarkMode ? "#fff" : "#fff",
    color: isDarkMode ? "#fff" : "#222",
    transition: "background-color 0.5s, color 0.5s",

  }


  const theme = {
    isDarkMode,
    toggleDarkMode,
    themeStyle
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
