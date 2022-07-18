import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'

import './FilmCarousel.css'
import FilmCard from '../FilmCard/FilmCard'

function FilmCarousel({films, handleClick}){
  const [disabled, setDisabled] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setDisabled(false)
    }, 1500)
  },[disabled])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition:{ duration: 0.5 } },
  }

  const filmsHtml = films.map(film=>(
        <motion.div variants={item}>
            <FilmCard
              film={film}
              disabled={disabled}
              setState={setDisabled}
              handleClick={handleClick}
            />
        </motion.div>
  ))
  return (
      <div 
        className="films__carousel">
          <div className="films__arrows">
            <i className="icons films__arrow films__arrow--left uil uil-angle-left"/>
            <i className="icons films__arrow films__arrow--right uil uil-angle-right"/>
          </div> 
            <motion.div 
              className="films__list"
              variants={container}
              initial="hidden"
              animate="show"
              >
                {filmsHtml}
            </motion.div>
      </div>
    )
}

export default FilmCarousel