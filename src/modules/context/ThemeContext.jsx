import React, {useState, createContext} from 'react'

const ThemeContext = createContext()

function ThemeContextProvider(props){
    const [theme, setTheme] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light")

    function changeTheme(){
        setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark")
    }

    function getThemeState(){
        return theme === "dark" ? false : true
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme, getThemeState, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}