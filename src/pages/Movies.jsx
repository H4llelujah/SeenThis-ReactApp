import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import Layout from '../components/Layout';
import Loader from '../components/UI/loader/Loader';
import MovieService from '../API/MovieService';
import { useFetching } from '../hooks/useFetching';
import SearchQuerry from '../components/UI/SearchQuerry/SearchQuerry';


function Movies() {

  const [movies, setMovies] = useState([]);

  const [fetchingMovies, isLoading, error] = useFetching( async () =>{
     const response = await MovieService.getAll();
     setMovies(...movies, response.films);
  })


  useEffect(() => {
    fetchingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <div>
      <Layout>
        <SearchQuerry/>
        {error &&
          <h1 className='error'>Произошла ошибка! {error}</h1>
        }
        {isLoading === true
          ? <Loader></Loader>
          : <MovieList movies = {movies}></MovieList>
        }
      </Layout>
    </div>
  );
}

export default Movies;