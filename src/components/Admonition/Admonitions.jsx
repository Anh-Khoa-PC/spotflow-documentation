import React from 'react'
import Admonition from '@theme/Admonition'

const Admonitions = ({type, icon, title, children}) => {
  return (
    <div>
        <Admonition type={type} icon={icon} title={title}>
            {children}
        </Admonition>
    </div>
  )
}

export default Admonitions