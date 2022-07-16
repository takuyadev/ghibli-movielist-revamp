import React, {useState, useContext} from 'react'
import { ThemeContext } from '../../modules/context/ThemeContext'
import './Header.css'

import Toggle from '../Input/Toggle/Toggle'

function Header(){
    const {theme, changeTheme, getThemeState} = useContext(ThemeContext)
    const [on, setOn] = useState(getThemeState)

    return (
        <header className={`header header--${theme}`}>
            <img 
                className="header__logo" 
                src={`./img/logo_${theme}.png`}
                alt="Ghibli Studio Logo"
            />
            <Toggle state={on} 
                setState={()=>{
                    setOn(!on)
                    changeTheme()
                }}/>
        </header>
    )
}

export default Header