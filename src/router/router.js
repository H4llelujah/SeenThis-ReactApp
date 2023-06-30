import About from "../pages/About";
import Login from "../pages/Login";
import MovieNamePage from "../pages/MovieNamePage";
import Movies from "../pages/Movies";
import MyMovies from "../pages/MyMovies";
import Registration from "../pages/Registration";





export const publicRoutes = [
    {path: '/about', component: <About/>},
    {path: '/home', component: <Movies/>},
    {path: '/myMovies', component: <MyMovies/>},
    {path: '/login', component: <Login/>},
    {path: '/movie/:name', component: <MovieNamePage/>},
    {path: '/registration', component: <Registration/>},
    {path: '*', component: <Movies/>}
]