import React from 'react'
import './FilmDetails.css'
import PrimaryButton from '../../Button/PrimaryButton/PrimaryButton'
import {motion, AnimatePresence} from 'framer-motion'

function FilmDetails({film, image, handleClick}){
    
    const styleBackground = {
        backgroundImage: `url(${film.movie_banner})`,
        backgroundSize: "cover"
    }

    function saveFavorite(id){
        let result;
        const prevStorage = 
            localStorage.getItem("id") ?
            localStorage.getItem("id").split(",") :
            []


        if(!prevStorage.includes(id)){
            if(prevStorage.length !== 0) result = [...prevStorage, id] 
            else result = [id] 
        } 
        else result = prevStorage.filter(filmId => filmId !== id)

        if(result){
            localStorage.setItem("id", result)
            handleClick(result)
        }
    }

    return(
        <AnimatePresence>
            <motion.section 
                key={film.id}
                animate={{ position: "static", opacity: 1}}
                exit={{ position: "absolute", x: "100%", zIndex: 2}}
                transition={{ ease:[0.75, 0.010, 0.100, 1.000], duration: 1}} 
                style={styleBackground}>
                    <div className="film-details">
                        <img src={image} alt={`Movie Banner of ${film.title}`}></img>
                        {film.id && 
                            <div className="film-details__information">
                                <h1>{film.title}</h1>
                                <h1>{film.original_title}</h1>
                                <div className="film-details__tags">
                                    <p>{film.director}</p>
                                    <p>{film.producer}</p>
                                </div>
                                <div className="film-details__tags film-details__tags--stats">
                                    <p>{film.rt_score}<i className="uil uil-star"></i></p>
                                    <p>{film.release_date}<i className="uil uil-calendar-alt"></i></p>
                                    <p>{film.running_time}<i className="uil uil-clock"></i></p>
                                </div>
                                <p className="body">{film.description}</p>
                                <PrimaryButton handleClick={()=>saveFavorite(film.id)} text={"favorite"}/>
                            </div>}  
                    </div>
            </motion.section>
        </AnimatePresence>
    )
}

FilmDetails.defaultProps = {
    image: "./img/placeholder.png"
}

export default FilmDetails