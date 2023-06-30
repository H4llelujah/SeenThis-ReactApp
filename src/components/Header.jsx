import React from 'react'
import Navbar from './UI/navbar/navbar'

export default function Header() {
  return (
    <header className='header'>
        <div className='wrapper header-wrapper'>
            <div className='logo'>SeenThis<span>?</span></div>
            <Navbar></Navbar>
        </div>
    </header>
  )
}
