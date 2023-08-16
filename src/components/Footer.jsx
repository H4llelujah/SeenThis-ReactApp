import React, { memo } from 'react'

function Footer () {
  return (
    <footer className='footer'>
        <div className='wrapper footer-wrapper'>
          <div className='call'>+7-(912)-309-54-74</div>
          <div className='social-media'>
            <div>VK</div>
            <div>Facebook</div>
            <div>Twitter</div>
          </div>
        </div>
    </footer>
  )
}

export default memo(Footer)