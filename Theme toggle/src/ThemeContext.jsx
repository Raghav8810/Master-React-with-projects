
import {  createContext, useContext, useState,useEffect } from "react";

export const ThemeContext = createContext();

export const UseTheme = () =>{
       return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) =>{
    const[isDarkMode, SetDarkMode] = useState(false);

    const toggleTheme = () =>{
        SetDarkMode(prestate=>!prestate);
    }

    const theme = isDarkMode ? "dark" : "light";
    
    useEffect(() =>{
        document.documentElement.setAttribute("data-theme", theme);
    },[isDarkMode]);

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
          {children}
        </ThemeContext.Provider>
    )
}