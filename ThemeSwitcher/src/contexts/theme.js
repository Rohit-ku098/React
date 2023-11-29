import React, { createContext, useContext } from 'react'

const ThemeContext = createContext({
    darkMode : ()=>{},
    lightMode : ()=>{}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
   return useContext(ThemeContext)
}




