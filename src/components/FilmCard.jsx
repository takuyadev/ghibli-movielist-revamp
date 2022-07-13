import React from 'react'

function FilmDetails({
        film,
        handleClick
    }){
    return (
        <div onClick={()=>handleClick(film)} className="film">
            <img className="film__img" src={film.image} alt={`Cover of ${film.title}`}/>
            <p className="film__title">
                {film.title}
            </p>
        </div>
    )
}

export default FilmDetails
