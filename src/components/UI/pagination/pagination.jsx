import React from 'react'
import { getPagesArray } from '../../../utils/pages'

export default function Pagination({totalPage, page, changePage}) {

    let pagesArray = getPagesArray(totalPage);


  return (
    <div className='page_pagination'>
        {pagesArray.map(p => 
            <span
                onClick={() => changePage(p)}
                key={p}
                className={page === p ? 'page page_current' : 'page'}
            >
                {p}
            </span>    
        )}
    </div>
  )
}
