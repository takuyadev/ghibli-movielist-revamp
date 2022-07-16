import React, {useState} from 'react'
import './Dropdown.css'

import { motion, AnimatePresence} from 'framer-motion'
import Button from '../../Button/Button'
function Dropdown({text, options}){
    const [show, setShow] = useState(false)

    const menuHtml = options.map((option,i)=>(
        <li 
            key={i}
            onClick={option.click}
        >
                {option.text}
        </li>
    ))

    const dropdownAnimation = {
        hidden:{
            opacity: 0
        },
        visible:{
            opacity: 1
        }
    }
    return(
        <div className="dropdown">
            <Button 
                text={text}
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