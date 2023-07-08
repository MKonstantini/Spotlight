import { useEffect, useState } from "react";
import { Movie, Show } from "./api_interfaces";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YWZjZDYyZGUxOGFhMDNiZDZhOTYwMjgwNjM0OTlkOSIsInN1YiI6IjY0OGRiOWVjNTU5ZDIyMDBjNTc2NWEzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7vEj0vQae9ytrY7WL3sTBNCHARuUBJJAqyFllDQcWEw'
    }
}

// RETURNS TRENDING MOVIES THIS WEEK
export function useFetch_TrendingMovies() {
    let [trendingMovies, setTrendingMovies] = useState<Movie[]>([])

    useEffect(() => {
      fetch('https://api.themoviedb.org/3/movie/popular', options)
        .then(response => response.json())
        .then(data => setTrendingMovies(data.results))
        .catch(err => console.error(err));
    }, [])

    return trendingMovies
}

// RETURNS MOVIES IN CINEMAS
export function useFetch_MoviesInCinemas() {
    let [moviesInCinema, setMoviesInCinema] = useState<Movie[]>([])

    useEffect(() => {
      fetch('https://api.themoviedb.org/3/movie/now_playing', options)
        .then(response => response.json())
        .then(data => setMoviesInCinema(data.results))
        .catch(err => console.error(err));
    }, [])

    return moviesInCinema
}

// RETRUNS TOP RATED SHOWS
export function useFetch_showsTopRated() {
    let [showsTopRated, setShowsTopRated] = useState<Show[]>([])

    useEffect(() => {
      fetch('https://api.themoviedb.org/3/tv/top_rated', options)
        .then(response => response.json())
        .then(data => setShowsTopRated(data.results))
        .catch(err => console.error(err));
    }, [])

    return showsTopRated
}

// RETURNS PATH TO TRAILER
export function useFetch_TrailerPath(id: string) {
    let [trailerPath, setTrailerPath] = useState('')

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}}/videos`, options)
        .then((response) => response.json())
        .then((data) => setTrailerPath(
            `https://www.youtube.com/embed/${data.results[0].key}`
        ))
        .catch(err => console.log(err))
    }, [])

    return trailerPath
}