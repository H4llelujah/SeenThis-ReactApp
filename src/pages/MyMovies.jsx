import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { MovieContext } from '../context'
import MovieCart from '../components/MovieCart';

const MyMovies = () => {
    const {myMovies} = useContext(MovieContext);
    return(
        <div>
            <Layout>
                <h1 className='myMovies_header'>My favorite movies</h1>
                {
                    myMovies.length === 0
                    ? <div className='message'>Вы еще не добавили фильмы в избранное</div>
                    : myMovies.map(movie => 
                        <MovieCart key={movie.imdbID} movie={movie}></MovieCart>
                    )
                }
            </Layout>
        </div>
    )
}


export default MyMovies;