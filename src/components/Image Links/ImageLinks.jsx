import React from 'react'
import Link from '@docusaurus/Link'
import { motion } from 'framer-motion'
import './imagelink.css'

const ImageLinks = ({src, title, description}) => {
    const divStyle = {
      marginTop: "50px",
      maxWidth: "900px",
      paddingInline: "10%"
    }
  return (
    <Link to='/accepting-payment'>
    <div style={divStyle}>
        <motion.img height={240} width={350} whileHover={{scale: 1.05}} src={src}/>
        <p className='title'>{title}</p>
        <p className='description'>{description}</p>
    </div>
    </Link>
  )
}

export default ImageLinks