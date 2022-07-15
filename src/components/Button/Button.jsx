import React from 'react'
import './Button.css'

function Button({text, icon, type, handleClick}){
    return (
        <button className={`btn btn--${type}`} onClick={handleClick}>
            {text}
            {icon && <i className={`uil uil-${icon}`}></i>}
        </button>
    )
}

Button.defaultProps = {
    text: 'default',
    type: 'primary',
    handleClick: ()=>{}
}

export default Button

