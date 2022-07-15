import React, {useState, createContext} from 'react'

const ThemeContext = createContext()

function ThemeContextProvider(props){
    const [theme, setTheme] = useState(true)

    function changeTheme(){
        setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark")
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}