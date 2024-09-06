const { fetchPopularMovies, searchMovies, fetchMovieById } = require('../utils/fetchMovies');

const movieResolvers = {
  Query: {
    // Fetch popular movies (adjusted to use the OMDb API's search functionality)
    popularMovies: async () => {
      const movies = await fetchPopularMovies();
      return movies.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        rating: movie.imdbRating || "N/A",
        posterPath: movie.Poster,
        releaseDate: movie.Released || "Unknown"
      }));
    },

    // Search movies by title
    searchMovies: async (_, { query }) => {
      const movies = await searchMovies(query);
      return movies.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        rating: movie.imdbRating || "N/A",
        posterPath: movie.Poster,
        releaseDate: movie.Released || "Unknown"
      }));
    }
  }
};

module.exports = movieResolvers;
