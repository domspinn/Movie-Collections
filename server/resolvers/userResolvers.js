const User = require('../models/User');
const Movie = require('../models/Movie');

const userResolvers = {
  Query: {
    // Resolver to get user's movie collection
    userCollection: async (_, __, { user }) => {
      if (!user) {
        throw new Error('Not authenticated');
      }
      const currentUser = await User.findById(user.id).populate('collection');
      return currentUser.collection;
    }
  },

  Mutation: {
    // Resolver to add a movie to the user's collection
    addMovieToCollection: async (_, { movieId, title, rating }, { user }) => {
      if (!user) {
        throw new Error('Not authenticated');
      }

      // Check if the movie already exists in the database
      let movie = await Movie.findOne({ movieId });
      if (!movie) {
        movie = new Movie({ movieId, title, rating });
        await movie.save();
      }

      // Add the movie to the user's collection
      const currentUser = await User.findById(user.id);
      if (!currentUser.collection.includes(movie._id)) {
        currentUser.collection.push(movie);
        await currentUser.save();
      }

      return movie;
    }
  }
};

module.exports = userResolvers;
