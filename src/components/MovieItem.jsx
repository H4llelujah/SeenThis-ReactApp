import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function MovieItem({movie}) {

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
        navigate(`/movie/${MovieName}`)
    }
  return (
    <div onClick={handleClick} className='movie-object'>
        <img className='movie-poster' alt='Poster' src={movie.posterUrlPreview}/>
        <div className='movie-description'>
            <h2 className='movie-header'>
                {MovieName}
            </h2>
            <div className='movie-info'>
                <div className='movie-fact'>
                    <p className='movie-year'>{movie.year}</p>
                    <div className='movie-countries'>
                        {movie.countries.map((country, index) =>
                           <p key={index} className='movie-country'>{country.country}</p>
                        )}
                    </div>
                </div>
                <div className='movie-genres'>
                    {movie.genres.map((genre, index) => 
                        <p key={index} className='movie-genre'>{genre.genre}</p>
                    )}
                </div>
                <div className='rate'>
                    <FontAwesomeIcon fontSize='21px' color='yellow' icon={faStar} />
                    <p className='rate-number'>{movie.ratingKinopoisk}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
