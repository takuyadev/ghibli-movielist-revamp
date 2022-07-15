import React, {useEffect} from 'react'

import './FilmCarousel.css'
import FilmCard from '../FilmCard/FilmCard'

function FilmCarousel({films, handleClick}){

    //Render map items

    return (
        <div 
          className="films__carousel">
            <div className="films__arrows">
              <i className="icons films__arrow films__arrow--left uil uil-angle-left"/>
              <i className="icons films__arrow films__arrow--right uil uil-angle-right"/>
            </div> 
            <div className="films__list">
                {films.length !== 0 ? 
      films.map(film=>(
          <FilmCard
            key={film.id}
            film={film}
            handleClick={handleClick}
          />
      )) : "Loading"}
            </div>
        </div>
    )
}

export default FilmCarousel