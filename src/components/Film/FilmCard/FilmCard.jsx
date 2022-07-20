import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { UilHeart } from '@iconscout/react-unicons'
import './FilmCard.css'

function FilmCard({film, handleClick, disabled, setDisabled}) {

    const iconAnimation = 
        {
            initial: { opacity: 0, },
            animate: { 
                opacity: 1, 
                zIndex: 5,
                transition: { 
                    ease:"easeOut", 
                    duration: 0.2 
                }  
            },
            exit: { 
                opacity: 0, 
                zIndex: 5,
                transition: { 
                    ease:"easeOut", 
                    duration: 0.2 
            }
        } 
    }
    
    return (
        <div
            onClick={() => { 
                    setDisabled(true)
                    !disabled && handleClick(film)
                }
            } 
            className="film"
        >
            <AnimatePresence>
                {film.favorite && 
                    <motion.div
                        variants={iconAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <UilHeart className="film__heart"/>
                    </motion.div>
                }
            </AnimatePresence>
            <img className="film__img" src={film.image} alt={`Cover of ${film.title}`}/>
            <p className="film__title">{film.title}</p>
        </div>
    )
}
export default FilmCard
