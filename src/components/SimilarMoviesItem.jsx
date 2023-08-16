import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

export default function SimilarMovieItem({movie}) {

    const navigate = useNavigate();

    let MovieName = null;
    
    if (movie.nameOriginal){
        MovieName = movie.nameOriginal;
    }else if(movie.nameEn){
        MovieName = movie.nameEn;
    }else{
        MovieName = movie.nameRu;
    }

    const handleClick = () => {
        navigate(`/movie/${MovieName}`, {state: {movieId: movie.filmId}});
    }
  return (
    <div onClick={handleClick} className='similar-movie-object'>
        <img className='similar-movie-poster' alt='Poster' src={movie.posterUrlPreview}/>
        <div className='similar-movie-description'>
            <h2 className='similar-movie-header'>
                {MovieName}
            </h2>
        </div>
    </div>
  )
}
