import React, {useContext} from 'react'
import { ThemeContext } from '../../../modules/context/ThemeContext'
import './Searchbar.css'

function Searchbar({handleOnChange}){
    const {theme} = useContext(ThemeContext)
    return(
        <input 
            className={`searchbar searchbar--${theme}`}
            onChange={(e)=>handleOnChange(e)} 
            placeholder="Search for movies here..." 
        />
    )
}

export default Searchbar