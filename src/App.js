import './styles/App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import { MovieContext } from './context';





function App() {

  const [myMovies, setMyMovies] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('myMovies')){
      setMyMovies(JSON.parse(localStorage.getItem('myMovies')))
    }
    fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/301', {
    method: 'GET',
    headers: {
        'X-API-KEY': 'c0e1e51f-e038-4f8f-87af-ebe82d35fc05',
        'Content-Type': 'application/json',
    },
})
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err))
  }, [])

  return (
    <MovieContext.Provider
    value={{
      myMovies,
      setMyMovies
    }}
    >
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </MovieContext.Provider>
  );
}

export default App;