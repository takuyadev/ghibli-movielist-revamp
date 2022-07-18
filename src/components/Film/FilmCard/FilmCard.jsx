import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import './FilmCard.css'

function FilmCard({
        film,
        handleClick,
        disabled,
        setState
    }){
 
    const iconAnimation = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 } 
    }
    
    return (
        <div 
            disabled={disabled}
            onClick={()=>{ 
                setState(true)
                !disabled && handleClick(film)
                }
            } 
            
            className="film"
        >
            <AnimatePresence>
                {film.favorite && 
                    <motion.div
                        key={film.id}
                        variants={iconAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ease:"easeOut", duration: 0.2 }}
                    >
                        <i className="film__heart uil uil-heart"/>
                    </motion.div>
                }
            </AnimatePresence>
            <img className="film__img" src={film.image} alt={`Cover of ${film.title}`}/>
            <p className="film__title">{film.title}</p>
        </div>
    )
}
export default FilmCard
