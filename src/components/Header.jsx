import React, { memo } from 'react'
import Navbar from './UI/navbar/navbar'

function Header() {
  return (
    <header className='header'>
        <div className='wrapper header-wrapper'>
            <div className='logo'>SeenThis<span>?</span></div>
            <Navbar></Navbar>
        </div>
    </header>
  )
}

export default memo(Header);