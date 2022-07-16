import React from 'react'
import "./Toggle.css"

function Toggle({state, setState}){
    
    const slidePosition = {
        right: !state && "-10px",
        left: state && "-10px"
    }

    return(
        <div onClick={setState} className="toggle">
            <div className="toggle__slider" style={slidePosition}></div>
        </div>
    )
}

export default Toggle