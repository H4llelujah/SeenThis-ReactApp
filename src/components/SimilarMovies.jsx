import React, { useState } from 'react'
import SimilarMovieItem from './SimilarMoviesItem';



function SimilarMovies({movies}) {

  const [isOpen, setIsOpen] = useState(false);


  const showMovies = () => {
    setIsOpen(!isOpen);
  } 

  if (!movies.length){
    return(<h1 className='message'>Нет похожих фильмов!</h1>)
  }

  return (
    <div className='SimilarMovies'>
        {movies.map((movie,index) =>
          (isOpen || index < 3) && <SimilarMovieItem movie={movie} key={index} />
        )}
        <button onClick={showMovies} className={`SimMoviesBtn ${isOpen ? 'isOpen' : ''}`}> . . . </button>
    </div>
  )
}


export default SimilarMovies;