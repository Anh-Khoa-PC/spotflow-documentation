import React from 'react'
// import Link from '@docusaurus/Link'
import { motion } from 'framer-motion'
import './imagelink.css'

const ImageLinks = ({src, title, description}) => {
    const divStyle = {
      marginTop: "50px",
      // maxWidth: "900px",
      paddingInline: "5%"
    }
  return (
    <motion.div whileHover={{scale: 1.02}} style={divStyle}>
        <img height={240} width={350} src={src}/>
        <p className='title'>{title}</p>
        <p className='description'>{description}</p>
    </motion.div>
  )
}

export default ImageLinks