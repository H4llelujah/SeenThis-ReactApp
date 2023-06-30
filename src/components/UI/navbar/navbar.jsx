import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='pagination'>
        <Link to={'/about'}>About</Link>
        <Link to={'/home'}>Home</Link>
        <Link to={'/myMovies'}>My movies</Link>
        <Link to={'/login'}>Sign In</Link>
     </div>
  )
}
