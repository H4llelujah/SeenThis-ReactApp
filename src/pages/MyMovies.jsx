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
                {/* <button onClick={show}>Show My Movies</button> */}
                {
                    myMovies.length === 0
                    ? <div>Вы еще не добавили фильмы</div>
                    : myMovies.map(movie => 
                        <MovieCart key={movie.imdbID} movie={movie}></MovieCart>
                    )
                }
            </Layout>
        </div>
    )
}


export default MyMovies;