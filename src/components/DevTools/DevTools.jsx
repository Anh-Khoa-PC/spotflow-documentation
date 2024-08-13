import React from 'react'
import './devtools.css'
import { motion } from 'framer-motion'

const DevTools = ({src, title, description}) => {
    const divStyle = {
      marginTop: "50px",
      // maxWidth: "900px",
      paddingInline: "5%",
      marginBottom: "32px"
    }
  return (
    <motion.div whileHover={{scale: 1.02}} style={divStyle}>
        <img height={115} width={256} src={src}/>
        <p className='title'>{title}</p>
        <p className='description'>{description}</p>
    </motion.div>
  )
}

export default DevTools