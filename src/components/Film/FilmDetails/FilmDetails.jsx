import React, {useContext} from 'react'
import { ThemeContext } from '../../../modules/context/ThemeContext'
import { UilArrowDown, UilStar, UilCalendarAlt, UilClock } from '@iconscout/react-unicons';
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
   
    return (
            <div className="film-details-container">
                <AnimatePresence>
                        <motion.section 
                            key={film.id}
                            animate={{ position: "static", opacity: 1}}
                            exit={{ position: "absolute", x: "100vw", width: "100%", zIndex: 2}}
                            transition={{ ease:[0.75, 0.010, 0.100, 1.000], duration: 1}} 
                            style={styleBackground}>
                                <div className={`film-details film-details--${theme}`}>
                                    <img 
                                        src={image ? image : `./img/placeholder_${theme}.png`} 
                                        alt={`Movie Cover of ${title}`}
                                    />
                                    <div className="film-details__information">
                                    {id ? <>
                                            <h1 className="film-details__heading film-details__heading--english">{title}</h1>
                                            <p className="film-details__heading film-details__heading--japanese">{original_title}</p>
                                            <div className="film-details__tags film-details__tags--director">
                                                <p className="film-details__tag">{director}</p>
                                                <p className="film-details__tag">{producer}</p>
                                            </div>
                                            <div className="film-details__tags film-details__tags--stats">
                                                <div className="film-details__tag">
                                                    <p>{rt_score}</p>
                                                    <UilStar size="16"/>
                                                </div>
                                                <div className="film-details__tag">
                                                    <p>{release_date}</p>
                                                    <UilCalendarAlt size="16"/>
                                                </div>
                                                <div className="film-details__tag">
                                                    <p>{running_time}</p>
                                                    <UilClock  size="16"/>
                                                </div>
                                            </div>
                                            <p className="film-details__description">{description}</p>
                                            <Button 
                                                handleClick={() => saveFavorite(id, handleClick)} 
                                                text={favorite ? "Unfavorite" : "Favorite"}
                                                type={favorite ? "primary" : "outline"}
                                            /> 
                                        </> :  
                                        <div className="film-details__placeholder"> 
                                            <UilArrowDown/> Select movie below to expand details.
                                        </div> }
                                    </div>
                                </div>
                        </motion.section>
                </AnimatePresence>
            </div>
        
    )
}

FilmDetails.defaultProps = {
    film: {
        title: "Placeholder"
    }
}

export default FilmDetails