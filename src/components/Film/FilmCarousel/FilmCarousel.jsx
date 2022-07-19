import React, { useState, useContext, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ThemeContext } from '../../../modules/context/ThemeContext'

import './FilmCarousel.css'
import FilmCard from '../FilmCard/FilmCard'

function FilmCarousel({films, handleClick}){
  const [disabled, setDisabled] = useState(false)
  const { theme } = useContext(ThemeContext)
  const carouselRef = useRef(null)

  useEffect(()=>{
    disabled && setTimeout(()=>{
      setDisabled(false)
    }, 1001)
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
              setDisabled={setDisabled}
              handleClick={handleClick}
            />
        </motion.div>
  ))

  function scroll(scrollOffset){
    carouselRef.current.scrollLeft += scrollOffset;
    console.log(carouselRef.current.scrollLeft)
  }

  return (
      <div 
        className="films__carousel">
            {films.length !== 0 ? 
              <>
                <i 
                  onClick={()=>scroll(-500)}
                  className={`icons films__arrow films__arrow--${theme} films__arrow--left uil uil-angle-left`}
                />
                <i
                  onClick={()=>scroll(500)} 
                  className={`icons films__arrow films__arrow--${theme} films__arrow--right uil uil-angle-right`}
                />
                <motion.div 
                  className="films__list"
                  ref={carouselRef}
                  variants={container}
                  initial="hidden"
                  animate="show"
                  >
                    {filmsHtml}
                </motion.div> 
              </> :
              <div className="film-details__placeholder">
                <i class="uil uil-film"></i> No results 
              </div> }

      </div>
    )
}

export default FilmCarousel