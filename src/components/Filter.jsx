import React from 'react';
import { useEffect, useState, memo, useCallback } from 'react';
import { useFetching } from '../hooks/useFetching';
import Loader from './UI/loader/Loader';
import MySelect from './UI/select/MySelect';
import MySlider from './UI/slider/MySlider';
import MyButton from './UI/button/MyButton';
import MovieService from '../API/MovieService';


function Filter({setFetchType, filters, setFilters, fetchType, setPage}) {
  
    const [filtersId, setFiltersId] = useState([])
  
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const [fetchingFilters, isFiltersLoading, FilterError] = useFetching( async () => {
        const response = await MovieService.getFilters()
        setFiltersId(response);
    })

    const updateFilterValue = useCallback((filterType, value) => {
      setFilters((prevFilters) =>
        prevFilters.map((filter) => {
          if (Object.keys(filter)[0] === filterType) {
            return { [filterType]: value };
          }
          return filter;
        })
      );
    }, [setFilters]);

    const acceptFilters = () => {
        setFetchType(fetchType+1);
        setPage(1);
      }
    
    const toggleFilterContent = () => {
        setIsFilterOpen(!isFilterOpen)
    }

    useEffect(() => {
        fetchingFilters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])


  return (
    <div className='filter'>
          <MyButton onClick={toggleFilterContent}>filter</MyButton>
          <div className={`collapse ${isFilterOpen ? 'active' : ''}`}>
            <div className={`filter-content ${isFilterOpen ? 'open' : ''}`}>
              {isFiltersLoading
              ? <Loader></Loader>
              : 
              <div className='selects'>
                <MySelect
                value={filters[0].genres}
                onChange={(value) => updateFilterValue('genres', value)}
                defaultValue={'genre'}
                options={filtersId.genres.map((item) => {
                  if (item.genre !== '') {
                    return {
                      value: item.id,
                      name: item.genre
                    };
                  }
                  return {
                    value: item.id,
                    name: '--'
                  };
                })}
                />
                <MySelect
                value={filters[1].countries}
                onChange={(value) => updateFilterValue('countries', value)}
                defaultValue={'country'}
                options={filtersId.countries.map(item => {
                  if (item.country !== '') {
                    return {
                      value: item.id,
                      name: item.country
                    };
                  }
                  return {
                    value: item.id,
                    name: '--'
                  };
                })}
                />
                <MySelect
                value={filters[2].type}
                onChange={(value) => updateFilterValue('type', value)}
                defaultValue={'type'}
                options={[
                  {value: 'FILM', name: 'film'},
                  {value: 'TV_SHOW', name: 'Tv-show'},
                  {value: 'TV-SERIES', name: 'tv-series'},
                  {value: 'MINI-SERIES', name: 'mini-series'},
                  {value: 'ALL', name: 'all'}
                ]}
                />
                <MySelect
                value={filters[3].sortBy}
                onChange={(value) => updateFilterValue('sortBy', value)}
                defaultValue={'Sort by'}
                options={[
                  {value: 'YEAR', name: 'Year'},
                  {value: 'RATING', name: 'Rating'}
                ]}
                />
              </div>
              }
              <div className='sliders'>
                <div className='rating-slider slider'>
                  <p>Rating</p>
                  <MySlider max={10} min={0} step={0.5} value={filters[4].rating} setValue={value => updateFilterValue('rating', value)}/>
                </div>
                <div className='year-slider slider'>
                  <p>Year</p>
                  <MySlider max={2023} min={1950} step={1} value={filters[5].year} setValue={value => updateFilterValue('year', value)}/>
                </div>
              </div>
              <div className='keyword'>
                <p>Keyword</p>
                <input
                value={filters[6].keyword}
                onChange={(event) => updateFilterValue('keyword', event.target.value)}
                placeholder='Enter movie name'
                />
              </div>
              <button className='filter_btn' onClick={acceptFilters}>Применить фильтры</button>
            </div>
          </div>
        </div>
  )
}

export default  memo(Filter);