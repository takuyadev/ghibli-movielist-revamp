import React from 'react'
import '../Button.css'

function SecondaryButton({text, icon, handleClick}){
    return (
        <button className="btn btn--outline" onClick={handleClick}>
            {text}
            {icon && <i className={`uil uil-${icon}`}></i>}
        </button>
    )
}

SecondaryButton.defaultProps = {
    text: 'default',
    handleClick: ()=>{}
}

export default SecondaryButton

