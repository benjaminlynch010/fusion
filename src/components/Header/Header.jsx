import React from 'react'
import './Header.css'
import { Image } from '@mantine/core'

function Header() {
  return (
    <Image className='header' src={require('./reloadHeader.png')} />
  )
}

export default Header