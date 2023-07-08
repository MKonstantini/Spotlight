import "../node_modules//bootstrap//dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import './App.css';


// API Fetch
import { useFetch_MoviesInCinemas, useFetch_TrendingMovies, useFetch_showsTopRated } from './api/api_functions';
import { Movie, Show } from './api/api_interfaces';

// Components
import Navbar from './components/elements/Navbar';
import Home from './components/main/Home';
import Movies from './components/main/Movies';
import TvSeries from './components/main/TvSeries';
import Footer from './components/elements/Footer';
import Details from './components/main/Details';


function App() {
  let trendingMovies: Movie[] = useFetch_TrendingMovies()
  let moviesInCinema: Movie[] = useFetch_MoviesInCinemas()
  let showsTopRated: Show[] = useFetch_showsTopRated()

  let concatArr = [...trendingMovies, ...moviesInCinema, ...showsTopRated]

  useEffect(() => {
    document.querySelector('.pageStart')?.scrollIntoView()
  })

  return (
    <div className="App">
      <link href="https://api.fontshare.com/v2/css?f[]=chillax@600,300,400&display=swap" rel="stylesheet"></link>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home trendingMovies={trendingMovies} moviesInCinema={moviesInCinema} showsTopRated={showsTopRated} />} />

          <Route path='/movies' element={<Movies showcaseArr={trendingMovies} />} />

          <Route path='/tvseries' element={<TvSeries showcaseArr={showsTopRated} />} />

          <Route path='/details/:id' element={<Details concatArr={concatArr} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
