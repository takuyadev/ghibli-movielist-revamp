import React from 'react'
import '../Button.css'

function PrimaryButton({text, icon, handleClick}){
    return (
        <button className="btn btn--primary" onClick={handleClick}>
            {text}
            {icon && <i className={`uil uil-${icon}`}></i>}
        </button>
    )
}

PrimaryButton.defaultProps = {
    text: 'default',
    handleClick: ()=>{}
}

export default PrimaryButton

