import React, {useState} from 'react'
import './Dropdown.css'

import { motion, AnimatePresence} from 'framer-motion'
import Button from '../../Button/Button'
function Dropdown({text, options}){
    const [show, setShow] = useState(false)
    const menuHtml = options.map((option,i)=>(
        <li 
            key={i}
            onClick={() => option.click()}
            className="dropdown__list"
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
                width={"100px"}
                handleClick={()=>setShow(!show)}/>
            <AnimatePresence>
                {show && 
                <motion.ul 
                    variants={dropdownAnimation}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className='dropdown__menu'>
                        {menuHtml}
                </motion.ul>}
            </AnimatePresence>
        </div>
    )
}

export default Dropdown