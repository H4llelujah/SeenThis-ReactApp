import React from "react";
import { useState, useEffect } from "react";
import MovieCart from "../components/MovieCart";
import Loader from "../components/UI/loader/Loader";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import MovieService from "../API/MovieService";

const MovieNamePage = () => {


    const [movie, setMovie] = useState({}) 

    const {name} = useParams();

    const [fetchByMovieName, isLoading, error] = useFetching( async () => {
        const response = await MovieService.getByName(name);
        setMovie(response);
    })

    useEffect(() => {
        fetchByMovieName();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return(
        <div>
        <Layout>
            {error &&
            <h1>Произошла ошибка! {error}</h1>
            }
            {isLoading 
            ? <Loader></Loader>
            : <MovieCart movie = {movie}/>
            }
        </Layout>
        </div>
    )
}

export default MovieNamePage;