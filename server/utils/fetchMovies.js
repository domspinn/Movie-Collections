const fetch = require('node-fetch');

const API_KEY = process.env.OMDB_API_KEY;  // Store your OMDb API key in the .env file
const BASE_URL = 'http://www.omdbapi.com/';

// Fetch popular movies (OMDb doesn't have a direct "popular" endpoint, so you may modify the logic)
async function fetchPopularMovies() {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=popular&type=movie`);
  const data = await response.json();
  return data.Search;  // OMDb returns results in 'Search' key for list-type responses
}

// Search movies by title
async function searchMovies(query) {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}&type=movie`);
  const data = await response.json();
  return data.Search;  // OMDb returns results in 'Search' key
}

// Fetch movie details by movie ID (IMDb ID)
async function fetchMovieById(imdbID) {
  const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${imdbID}`);
  const data = await response.json();
  return {
    id: data.imdbID,
    title: data.Title,
    rating: data.imdbRating,
    posterPath: data.Poster,
    releaseDate: data.Released,
    overview: data.Plot
  };
}

module.exports = { fetchPopularMovies, searchMovies, fetchMovieById };
