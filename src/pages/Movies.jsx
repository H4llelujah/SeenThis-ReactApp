import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import Layout from '../components/Layout';
import Loader from '../components/UI/loader/Loader';
import MovieService from '../API/MovieService';
import { useFetching } from '../hooks/useFetching';
import SearchQuerry from '../components/UI/SearchQuerry/SearchQuerry';
import Filter from '../components/Filter'
import Pagination from '../components/UI/pagination/pagination';
import MyButton from '../components/UI/button/MyButton';

function Movies() {

  const [movies, setMovies] = useState([]);

  const [totalPage, setTotalPage] = useState();

  const [page, setPage] = useState(1);

  const [fetchingMovies, isLoading, error] = useFetching( async () =>{
     const response = await MovieService.getTop(page);
     setTotalPage(response.pagesCount);
     setMovies(response.films);
  })

  const [fetchingFilteredMovies, isFilteredLoading, err] = useFetching( async () => {
    const response = await MovieService.getByFilters(filters, page);
    setTotalPage(response.totalPages);
    setMovies(response.items);
  })

  const [fetchType, setFetchType] = useState(0); // 0 - FirstRenderWithoutFiltersMovies. > 0 renders with filters

  const changePage = (page) => {
    setPage(page);
  }

  const showTop = () => {
    setFetchType(0);
  }

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
      fetchingMovies(page);
    }
    if (fetchType > 0){
      fetchingFilteredMovies();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchType, page])


  return (
    <div>
      <Layout>
        <SearchQuerry/>
        <Filter
        fetchType = {fetchType}
        setFetchType = {setFetchType}
        filters = {filters}
        setFilters = {setFilters}
        setPage = {setPage}
        />
        {error &&
          <h1 className='error'>Произошла ошибка! {error}</h1>
        }
        {(isLoading === true || (fetchType > 0 && isFilteredLoading))
          ? <Loader></Loader>
          : <div>
              {fetchType>0 ? <div className='showTopBtn-wrapper'><MyButton onClick={showTop}>Show top 250 movies</MyButton></div> : <div></div>}
              <MovieList movies = {movies}></MovieList>
              <Pagination
                totalPage={totalPage}
                page={page}
                changePage={changePage}
              />
            </div>
        }
      </Layout>
    </div>
  );
}

export default Movies;