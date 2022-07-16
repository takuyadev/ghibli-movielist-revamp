import React, {useContext} from 'react'
import { ThemeContext } from '../../modules/context/ThemeContext'
import './Header.css'

function Header(){
    const {theme, changeTheme} = useContext(ThemeContext)

    return (
        <header className={`header header--${theme}`}>
            <img 
                className="header__logo" 
                src={`./img/logo_${theme}.png`}
                alt="Ghibli Studio Logo"
            />
            <button 
                className={`header__toggle header__toggle--${theme}`}
                onClick={changeTheme}
            />
        </header>
    )
}

export default Header