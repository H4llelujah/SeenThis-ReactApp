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