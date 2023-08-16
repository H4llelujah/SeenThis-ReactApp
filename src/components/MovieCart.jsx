import React, { useContext } from 'react'
import MyImage from '../assets/no-poster.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPlay } from '@fortawesome/free-solid-svg-icons';
import { MovieContext } from '../context';



export default function MovieCart({movie, movieId}) {

  const response = (movie.Response === 'True');
  const {myMovies, setMyMovies} = useContext(MovieContext);

  const addMovie = () => {
    setMyMovies(prevMovies => {
      const updatedMovies = [...prevMovies, movie];
      localStorage.setItem('myMovies', JSON.stringify(updatedMovies));
      return updatedMovies;
    });
  }

  const removeMovie = (movie) => {
    setMyMovies(prevMovies => {
      const updatedMovies = prevMovies.filter(myMovie => myMovie.Title !== movie.Title);
      localStorage.setItem('myMovies', JSON.stringify(updatedMovies));
      return updatedMovies;
    });
  }

  if (!response){
    return (
      <div className='movie_error'>
        <h1>К сожалению, в нашем API нет такого фильма</h1>
      </div>
    )
  }

  

  const rating = movie.Ratings[0].Value.split('/')[0];
  const genres = movie.Genre.split(',').map((genre) => genre.trim());

  return (
    <div className='movie-item__wrapper'>
         <div className='movie-item'>
          <div className='preview'>
            {movie.Poster === 'N/A'
            ? <img className='poster no-poster' src={MyImage} alt='Poster'></img>
            : <img className='poster' src={movie.Poster} alt='Poster'></img>
            }
            <a href= {`https://www.youtube.com/results?search_query=${movie.Title}+trailer`} target='_blank' rel="noreferrer" className='trailer'>
              <p className='popup_text'>Trailer</p>
              <FontAwesomeIcon icon={faPlay}/>
            </a>
            <div className='description'>
              <h2 className='movie-name'>{movie.Title}</h2>
              <div className='rate'>
                <FontAwesomeIcon fontSize='21px' color='yellow' icon={faStar} />
                <p className='rate-number'>{rating}</p>
              </div>
              <div className='info'>
                <p>{movie.Rated}</p>
                <p>{movie.Year}</p>
                <p>{movie.Runtime}</p>
              </div>
              <div className='genres-list'>
                {genres.map((genre, index) =>
                  <p key={index} className='genre'>{genre}</p>
                )}
              </div>
              <div className='country'>
                  <h4 className='actors-header'>Country:</h4>
                  <p>{movie.Country}</p>
              </div>
              <div className='writter'>
                  <h4 className='actors-header'>Produced by:</h4>
                  <p>{movie.Writer}</p>
              </div>
              {myMovies.some((myMovie) => myMovie.Title === movie.Title)
              ?<button className='btn' onClick={() => removeMovie(movie)}>Remove from wishlist</button>
              :<button className='btn' onClick={addMovie}>I will watch</button>
              }
            </div>  
          </div>
          <div className='plot'>
            <h3>Plot:</h3>
            <p>{movie.Plot}</p>
          </div>
            <div className='cast'>
              <h4 className='actors-header'>Cast:</h4>
              <p>{movie.Actors}</p>
            </div>
        </div>
    </div>
  )
}
