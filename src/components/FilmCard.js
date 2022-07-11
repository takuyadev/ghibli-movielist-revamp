import React from 'react'

function FilmDetails({
        title,
        img,
    }){
    return (
        <div className="film">
            <img src={img}/>
            <p className="film__title">
                {title}
            </p>
        </div>
    )
}

export default FilmDetails