import React, {useContext} from 'react'
import { ThemeContext } from '../../../modules/context/ThemeContext'
import './FilmDetails.css'
import Button from '../../Button/Button'
import { saveFavorite } from '../../../modules/utils/Favorite'
import {motion, AnimatePresence} from 'framer-motion'

function FilmDetails({film, handleClick}){
    const {theme} = useContext(ThemeContext)

    const {
            id, title, original_title, image, director, 
            producer, rt_score, release_date, running_time,
            description, favorite
          } = film
    
    const styleBackground = {
        backgroundImage: `url(${film.movie_banner})`,
        backgroundSize: "cover"
    }
   
    return(
        <AnimatePresence>
            <motion.section 
                key={film.id}
                animate={{ position: "static", opacity: 1}}
                exit={{ position: "absolute", x: "100vw", zIndex: 2}}
                transition={{ ease:[0.75, 0.010, 0.100, 1.000], duration: 1}} 
                style={styleBackground}>
                    <div className={`film-details film-details--${theme}`}>
                        <img 
                            src={image ? image : `./img/placeholder_${theme}.png`} 
                            alt={`Movie Cover of ${title}`}
                        />
                        
                        {/* If film any film exists on currentFilm*/}
                        {id && 
                            <div className="film-details__information">
                                <h1 className="film-details__heading film-details__heading--english">{title}</h1>
                                <p className="film-details__heading film-details__heading--japanese">{original_title}</p>
                                <div className="film-details__tags film-details__tags--director">
                                    <p className="film-details__tag">{director}</p>
                                    <p className="film-details__tag">{producer}</p>
                                </div>
                                <div className="film-details__tags film-details__tags--stats">
                                    <div className="film-details__tag">
                                        <p>{rt_score}</p>
                                        <i className="uil uil-star"/>
                                    </div>
                                    <div className="film-details__tag">
                                        <p>{release_date}</p>
                                        <i className="uil uil-calendar-alt"/>
                                    </div>
                                    <div className="film-details__tag">
                                        <p>{running_time}</p>
                                        <i className="uil uil-clock"/>
                                    </div>
                                </div>
                                <p className="body">{description}</p>
                                <Button 
                                    handleClick={() => saveFavorite(id, handleClick)} 
                                    text={favorite ? "Unfavorite" : "Favorite"}
                                    type={favorite ? "primary" : "outline"}
                                /> 
                            </div>
                        }  

                    </div>
            </motion.section>
        </AnimatePresence>
    )
}

FilmDetails.defaultProps = {
    film: {
        title: "Placeholder"
    }
}

export default FilmDetails