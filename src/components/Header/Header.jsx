import React from 'react'
import './Header.css'

function Header(){

    return (
        <header className="header">
            <img className="header__logo"src="./img/logo.png"></img>
            <button className="header__toggle"/>
        </header>
    )
}

export default Header