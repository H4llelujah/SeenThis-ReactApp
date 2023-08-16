import React, { memo } from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <>
        <Header/>
        <div className='wrapper'>
            {children}
        </div>
        <Footer/>
    </>
  )
}

export default memo(Layout)