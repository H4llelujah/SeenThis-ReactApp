import React from 'react'
import MovieItem from './MovieItem';

export default function MovieList({movies}) {

  if (!movies.length){
    return (
      <h1 className='error'>Фильмы не найдены!</h1>
    )
  }

  return (
    <div className='movie-list'>
        {movies.map((movie, index) => 
            <MovieItem movie={movie} key={index}></MovieItem>
        )}
      </div>
  )
}

