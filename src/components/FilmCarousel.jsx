import React from 'react'
import FilmCard from './FilmCard'
import { motion, AnimatePresence } from 'framer-motion'

function FilmCarousel({films, handleClick}){

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }
  
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
  }

    //Render map items
    const filmsHtml = films.length !== 0 ? 
      films.map(film=>(
          <FilmCard
            key={film.id}
            film={film}
            handleClick={handleClick}
          />
      )) : "Loading"

    return (
      <AnimatePresence>
        <div 
          className="films__carousel">
            <div className="films__arrows">
              <i className="icons films__arrow films__arrow--left uil uil-angle-left"/>
              <i className="icons films__arrow films__arrow--right uil uil-angle-right"/>
            </div> 
            <motion.div 
              initial={{ opacity: 0, y: 200 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="films__list"
             >
                {filmsHtml}
            </motion.div>
        </div>
      </AnimatePresence>

    )
}

export default FilmCarousel