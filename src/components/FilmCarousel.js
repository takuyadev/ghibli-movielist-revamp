import React from 'react'
import FilmCard from './FilmCard'


function FilmCarousel({films, handleClick}){
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
        <div className="films__carousel">
            <div className="films__arrows">
              <i className="icons films__arrow films__arrow--left uil uil-angle-left"/>
              <i className="icons films__arrow films__arrow--right uil uil-angle-right"/>
            </div> 
            <div className="films__list">
              {filmsHtml}
            </div>
        </div>
    )
}

export default FilmCarousel