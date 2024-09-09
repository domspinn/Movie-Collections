const { fetchMovieById, searchMovies } = require('../utils/fetchMovies');
const Movie = require('../models/Movie');
const User = require('../models/User');

const movieResolvers = {
  Query: {
    searchMovies: async (_, { query }) => {
      const movies = await searchMovies(query);
      return movies.map(movie => ({
        imdbID: movie.imdbID,
        title: movie.Title,
        rating: movie.imdbRating,
        posterPath: movie.Poster,
        releaseDate: movie.Released
      }));
    }
  },
  Mutation: {
    addMovieToWatchlist: async (_, { imdbID }, { user }) => {
      if (!user) throw new Error('Authentication required');
      const movie = await Movie.findOneAndUpdate(
        { imdbID },
        { imdbID },
        { new: true, upsert: true }
      );
      const currentUser = await User.findById(user.id);
      if (!currentUser.watchlist.includes(movie._id)) {
        currentUser.watchlist.push(movie._id);
        await currentUser.save();
      }
      return movie;
    },
    rateMovie: async (_, { imdbID, rating }, { user }) => {
      if (!user) throw new Error('Authentication required');
      const movie = await Movie.findOne({ imdbID });
      if (!movie) throw new Error('Movie not found');
      movie.rating = rating;
      await movie.save();
      return movie;
    }
  }
};

module.exports = movieResolvers;
