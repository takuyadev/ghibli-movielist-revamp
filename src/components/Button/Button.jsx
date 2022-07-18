import React, {useContext} from 'react'
import { ThemeContext } from '../../modules/context/ThemeContext'
import './Button.css'

function Button({text, icon, width, type, handleClick}){
    const { theme } = useContext(ThemeContext)

    return (
        <button 
            className={`btn btn--${type}-${theme}`}
            style={{width: width}} 
            onClick={handleClick}>
                {text}
                {icon && <i className={`uil uil-${icon}`}></i>}
        </button>
    )
}

Button.defaultProps = {
    width: 'auto',
    text: 'default',
    type: 'primary',
    handleClick: ()=>{}
}

export default Button

