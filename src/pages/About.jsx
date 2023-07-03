import React from 'react'
import Layout from '../components/Layout'

export default function About() {

  return (

    <div>
        <Layout>
            <div className='about wrapper'>
              <h1>This is my project that works with the <a href='https://kinopoiskapiunofficial.tech/' target='_blank' rel="noreferrer">Kinopoisk Api Unofficial"</a> and <a href='https://www.omdbapi.com/' target='_blank' rel="noreferrer">"OMDb API"</a>. Unfortunately, I couldn't implement filtering by various movie parameters because these APIs do not provide such free features. If the movie list on the "Home" page is not working for you, you can change the API key in the site files, specifically in "src/API/MovieService.js" (an additional key is indicated in the comment on the first line) (each API provides around 500 requests per day, and unfortunately, I cannot fix this otherwise).
              <span style={{color: "#bac7e8"}}> The Sign In and Registration pages currently do not have any logic.</span>
              </h1>
              <h1>Idea: My project helps you save movies to a list that you would like to watch in the future and obtain essential information about these movies, such as the plot, rating, actors, rating, duration, genre, and release year.</h1>
              <h1>I hope you find the project interesting and useful.</h1>
            </div>
        </Layout>
    </div>
  )
}
