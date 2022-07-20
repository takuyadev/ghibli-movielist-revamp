import React from 'react'
import "./Toggle.css"

function Toggle({state, setState}){
    return(
        <div onClick={setState} className="toggle">
            <div className={`toggle__slider toggle__slider--${state ? "on" : "off"}`}>
            <i className={`icons uil uil-${state ? "sun" : "moon"}`}></i>
            </div>
        </div>
    )
}

export default Toggle