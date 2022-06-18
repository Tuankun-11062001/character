import React from 'react'
import {Link} from "react-router-dom"
import { motion } from 'framer-motion'
import {characterData} from "./data"
export const RenderCharacter = () => {
    const variants = {
        default:{
            scale: 1,
        },
        hover:{
            scale:0.95
        }
    }
  return (
    <div className='list'>
        {characterData.map(character => (
            <motion.li  variants={variants}  initial="default" whileHover="hover" key={character.id} className='item'>
                <Link to={`${character.id}`}>
                    <motion.img src={character.photo}/>
                </Link>
            </motion.li>)
        )}
    </div>
  )
}
