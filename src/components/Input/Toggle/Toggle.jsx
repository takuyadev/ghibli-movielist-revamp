import React from 'react'
import "./Toggle.css"
import { UilMoon, UilSun } from '@iconscout/react-unicons'

function Toggle({state, setState}){
    return(
        <div onClick={setState} className="toggle">
            <div className={`toggle__slider toggle__slider--${state ? "on" : "off"}`}>
            {state ? <UilSun/> : <UilMoon/>}
            </div>
        </div>
    )
}

export default Toggle