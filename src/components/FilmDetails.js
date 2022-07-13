import React from 'react'

function FilmDetails({film}){
    const styleBackground = {
        backgroundImage: `url(${film.movie_banner})`
    }

    return(
        <div style={styleBackground} className="film-details">
            <img src={film.image}></img>
            <div className="film-details__information">
                <h1>{film.title}</h1>
                <h1>{film.original_title}</h1>
                <div className="film-details__tags">
                    <p>{film.director}</p>
                    <p>{film.producer}</p>
                </div>
                <div className="film-details__tags film-details__tags--stats">
                    <p>{film.rt_score}<i class="uil uil-star"></i></p>
                    <p>{film.release_date}<i class="uil uil-calendar-alt"></i></p>
                    <p>{film.running_time}<i class="uil uil-clock"></i></p>
                </div>
                <p className="body">{film.description}</p>
                <button className="btn btn--outline" >
                    Favorite
                </button>
            </div>
            <div className="film__gradient"></div>
        </div>
    )
}

export default FilmDetails