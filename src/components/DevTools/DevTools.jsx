import React from 'react'
import './devtools.css'
import { motion } from 'framer-motion'

const DevTools = ({src, title, description}) => {
    const divStyle = {
      marginTop: "10px",
      // maxWidth: "900px",
      
      paddingInline: "2%",
      marginBottom: "32px"
    }
  return (
    <motion.div whileHover={{scale: 1.02}} style={divStyle}>
        <img height={90} width={256} src={src} style={{borderRadius: "8px"}}/>
        <p className='title'>{title}</p>
        <p className='description'>{description}</p>
    </motion.div>
  )
}

export default DevTools