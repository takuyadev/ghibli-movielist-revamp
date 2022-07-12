import React from 'react'
import FilmCard from './FilmCard'


function FilmCarousel({films}){
    //Render map items
    const filmsHtml = films.length !== 0 ? 
      films.map(film=>(
        <FilmCard
          key={film.id}
          title={film.title}
          img={film.image}
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