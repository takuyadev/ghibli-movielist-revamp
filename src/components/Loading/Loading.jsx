import React, { useContext } from 'react'
import { ThemeContext } from '../../modules/context/ThemeContext'

import { motion } from 'framer-motion'
import './Loading.css'

function Loading(){
    const { theme } = useContext(ThemeContext)

    const loadingAnimation ={
        hidden:{
            opacity: 0,
            transition: {
                duration: 2,
                ease:[0.75, 0.010, 0.100, 1.000]
            }
        },
        visible:{
            opacity: 1,
        }
    }
    
    return ( 
            <motion.div
                className={`loading loading--${theme}`}
                variants={loadingAnimation}
                animate="visible"
                exit="hidden">
                    <img src={`./img/logo_${theme}.png`} alt="Logo of Studio Ghibli"/>
                    <div className="lds-ripple">
                        <div></div><div></div>
                    </div>
            </motion.div>
   
    )
}

export default Loading