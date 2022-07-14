import React from 'react'
import './FilmCard.css'

function FilmCard({
        film,
        handleClick
    }){
        

    return (
        <div onClick={()=>handleClick(film)} className="film">
            {film.favorite && <i className="film__heart uil uil-heart"></i>}
            <img className="film__img" src={film.image} alt={`Cover of ${film.title}`}/>
            <p className="film__title">
                {film.title}
            </p>
        </div>
    )
}
export default FilmCard
