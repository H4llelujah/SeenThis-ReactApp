// const kinoApiKey = 'c0e1e51f-e038-4f8f-87af-ebe82d35fc05';
const kinoApiKey = '1a350648-ce9b-42f6-8ad5-175a48adfa5e';
// const kpURL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/';
const kpURL = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=1'
const apikey = 'cc706953';


function transformFiltersToQueryParams(filters) {
    const newFilters = filters.reduce((accumulator, filter) => {
      const key = Object.keys(filter)[0];
      const value = filter[key];
      if (key === 'year' || key === 'sortBy' || key === 'rating'){
        if (key === 'year' || key === 'rating'){
            accumulator[`${key}`] = value
        }
        if (key === 'sortBy') {
          if (value !== '' && value !==undefined){
            accumulator[`${key}`] = `order=${value}&`
          }else{
            accumulator[`${key}`] = ''
          }
        }
      }else{
        if (value !== '' && value !== undefined) {
            accumulator[`${key}`] = `${key}=${value}&`;
        }else {
            accumulator[`${key}`] = '';
        }
      }
      return accumulator;
    }, {});
    return newFilters;
  }

export default class MovieService {
    static async getTop(page){
            const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': kinoApiKey,
                    'Content-Type': 'application/json',
                }
            })

            if (!response.ok) {
                const errorMessage = `Status: ${response.status}`
                throw new Error(errorMessage);
            }

            const data = await response.json();
            return data;
        }


    static async getByName(name) {
        const response = await fetch(`https://www.omdbapi.com/?t=${name}&apikey=${apikey}`, {
            method: 'GET',
        })
        if (!response.ok) {
            const errorMessage = `Status: ${response.status}`
            throw new Error(errorMessage);
        }
        const data = await response.json();
        return data;
    }

    
    static async getFilters() {
        const response = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/filters', {
            method: 'GET',
            headers: {
                'X-API-KEY': kinoApiKey,
                'Content-Type': 'application/json',
            }
        })
        if (!response.ok) {
            const errorMessage = `Status: ${response.status}`
            throw new Error(errorMessage);
        }
        const data = await response.json();
        return data;
    }
    static async getByFilters(filters, page){

        const querryFilter = transformFiltersToQueryParams(filters);

        const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films?${querryFilter.countries}${querryFilter.genres}${querryFilter.sortBy}${querryFilter.type}ratingFrom=${querryFilter.rating[0]}&ratingTo=${querryFilter.rating[1]}&yearFrom=${querryFilter.year[0]}&yearTo=${querryFilter.year[1]}&${querryFilter.keyword}page=${page}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': kinoApiKey,
                'Content-Type': 'application/json',
            }
        })

        if (!response.ok) {
            const errorMessage = `Status: ${response.status}`
            throw new Error(errorMessage);
        }

        const data = await response.json();
        return data;
    }

    static async getSimilars(id){

        const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`, {
            method: 'GET',
            headers: {
                'X-API-KEY': kinoApiKey,
                'Content-Type': 'application/json',
            }
        })

        if (!response.ok) {
            const errorMessage = `Status: ${response.status}`
            throw new Error(errorMessage);
        }

        const data = await response.json();
        return data;
    }
}