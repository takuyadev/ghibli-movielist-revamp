import React from 'react'
import './Searchbar.css'

function Searchbar({handleOnChange}){
    return(
        <input onChange={(e)=>handleOnChange(e.target.value)} placeholder="Search for movies here..." className="searchbar"/>
    )
}

export default Searchbar