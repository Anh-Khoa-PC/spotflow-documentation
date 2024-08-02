import React from 'react'
import Link from '@docusaurus/Link'
import { motion } from 'framer-motion'

const ImageLinks = () => {
    const divStyle = {
        width: '150px',
        height: '100px'
    }
  return (
    <Link to='/accepting-payment'>
    <div style={divStyle}>
        <motion.img whileHover={{scale: 1.1}} src='https://res.cloudinary.com/dbrh0uxwx/image/upload/v1719229467/samples/dessert-on-a-plate.jpg'/>
        <p>Accepting Payments</p>
    </div>
    </Link>
  )
}

export default ImageLinks