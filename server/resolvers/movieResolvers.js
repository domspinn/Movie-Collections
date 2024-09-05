const { fetchPopularMovies, searchMovies } = require('../utils/fetchMovies');

const movieResolvers = {
  Query: {
    // Resolver for fetching popular movies from TMDb API
    popularMovies: async () => {
      try {
        const movies = await fetchPopularMovies();
        return movies.map(movie => ({
          id: movie.id,
          title: movie.title,
          rating: movie.vote_average,
          posterPath: movie.poster_path,
          releaseDate: movie.release_date
        }));
      } catch (error) {
        throw new Error('Failed to fetch popular movies');
      }
    },

    // Resolver for searching movies from TMDb API
    searchMovies: async (_, { query }) => {
      try {
        const movies = await searchMovies(query);
        return movies.map(movie => ({
          id: movie.id,
          title: movie.title,
          rating: movie.vote_average,
          posterPath: movie.poster_path,
          releaseDate: movie.release_date
        }));
      } catch (error) {
        throw new Error('Failed to search movies');
      }
    }
  }
};

module.exports = movieResolvers;
