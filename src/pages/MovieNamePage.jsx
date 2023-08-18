import React from "react";
import { useState, useEffect } from "react";
import MovieCart from "../components/MovieCart";
import Loader from "../components/UI/loader/Loader";
import Layout from "../components/Layout";
import { useLocation, useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import MovieService from "../API/MovieService";
import SimilarMovies from "../components/SimilarMovies";

const MovieNamePage = () => {


    const [movie, setMovie] = useState({})

    const [similarMovies, setSimilarMovies] = useState();

    const {name} = useParams();

    const location = useLocation();

    const movieId = location.state ? location.state.movieId : null;

    const [fetchByMovieName, isLoading, error] = useFetching( async () => {
        const response = await MovieService.getByName(name);
        setMovie(response);
    })

    const [fetchSimilars, isSimLoading, SimError] = useFetching (async () => {
        const response = await MovieService.getSimilars(movieId);
        setSimilarMovies(response.items);
    })

    useEffect(() => {
        fetchByMovieName();
        if (movieId){
            fetchSimilars();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[movieId, name])

    return(
        <div>
        <Layout>
            {error &&
            <h1>Произошла ошибка! {error}</h1>
            }
            {SimError &&
                <h1 className='error'>Произошла ошибка! {SimError}</h1>
            }
            {isLoading 
            ? <Loader/>
            :   <div>
                    <MovieCart movie = {movie} movieId = {movieId}/>
                    {isSimLoading
                        ? <div></div>
                        : 
                        <div>
                            <h1 className="simMoviesHeader">Similar Movies</h1>
                            <SimilarMovies movies={similarMovies}></SimilarMovies>
                        </div>
                        
                    }
                </div>   
            }
        </Layout>
        </div>
    )
}

export default MovieNamePage;