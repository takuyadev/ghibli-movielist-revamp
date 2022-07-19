import React, {useState, useContext} from 'react'
import { ThemeContext } from '../../../modules/context/ThemeContext'
import './Dropdown.css'

import { motion, AnimatePresence} from 'framer-motion'
import Button from '../../Button/Button'

function Dropdown({text, options, setCurrentSort}){
    const [show, setShow] = useState(false)
    const { theme } = useContext(ThemeContext)
 
    const menuHtml = options.map((option,i)=>(
        <li 
            key={i}
            onClick={() => {
                option.click()
                setCurrentSort(option.text)
            }}
            className={`dropdown__list dropdown__list--${theme}`}
        >
                {option.text}
        </li>
    ))

    const dropdownAnimation = {
        hidden:{
            opacity: 0,
            transition: {
                duration: 0.2,
                ease:[0.75, 0.010, 0.100, 1.000]
            }
        },
        visible:{
            opacity: 1,
            transition: {
                duration: 0.2,
                ease:[0.75, 0.010, 0.100, 1.000]
            }
        }
    }
    return(
        <div className="dropdown">
            <Button 
                text={text}
                width={"150px"}
                handleClick={()=>setShow(!show)}/>
            <AnimatePresence>
                {show && 
                <motion.ul 
                    variants={dropdownAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className={`dropdown__menu dropdown__menu--${theme}`}>
                        {menuHtml}
                </motion.ul>}
            </AnimatePresence>
        </div>
    )
}

export default Dropdown