import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import Layout from '../components/Layout';
import Loader from '../components/UI/loader/Loader';
import MovieService from '../API/MovieService';
import { useFetching } from '../hooks/useFetching';
import SearchQuerry from '../components/UI/SearchQuerry/SearchQuerry';
import Filter from '../components/Filter'

function Movies() {

  const [movies, setMovies] = useState([]);

  const [fetchingMovies, isLoading, error] = useFetching( async () =>{
     const response = await MovieService.getAll();
     setMovies(response.items);
  })

  const [fetchingFilteredMovies, isFilteredLoading, err] = useFetching( async () => {
    const response = await MovieService.getByFilters(filters);
    setMovies(response.items);
  })

  const [fetchType, setFetchType] = useState(0); // 0 - FirstRenderWithoutFiltersMovies. > 0 renders with filters

  const [filters, setFilters] = useState([
    {genres: ''},
    {countries: ''},
    {type: ''},
    {sortBy: ''},
    {rating: [0, 10]},
    {year: [1950, 2023]},
    {keyword: ''}
  ])

  useEffect(() => {
    if (fetchType === 0){
      fetchingMovies();
    }
    if (fetchType > 0){
      fetchingFilteredMovies();
      console.log('filters');
      
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchType])


  return (
    <div>
      <Layout>
        <SearchQuerry/>
        <Filter
        fetchType = {fetchType}
        setFetchType = {setFetchType}
        filters = {filters}
        setFilters = {setFilters}
        />
        {error &&
          <h1 className='error'>Произошла ошибка! {error}</h1>
        }
        {(isLoading === true && isFilteredLoading === true)
          ? <Loader></Loader>
          : <MovieList movies = {movies}></MovieList>
        }
      </Layout>
    </div>
  );
}

export default Movies;