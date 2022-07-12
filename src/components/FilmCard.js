import React from 'react'

function FilmDetails({
        title,
        img,
    }){
    return (
        <div className="film">
            <img className="film__img" src={img} alt={`Cover of ${title}`}/>
            <p className="film__title">
                {title}
            </p>
            
        </div>
    )
}

export default FilmDetails