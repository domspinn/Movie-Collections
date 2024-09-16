// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const { fetchMovieById, searchMovies } = require('../utils/fetchMovies');
// const Movie = require('../models/Movie');
// const User = require('../models/User');
// const Review = require('../models/Review');

// const resolvers = {
//   Query: {
//     // Movie Queries
//     searchMovies: async (_, { query }) => {
//       const movies = await searchMovies(query);
//       return movies.map(movie => ({
//         imdbID: movie.imdbID,
//         title: movie.Title,
//         rating: movie.imdbRating,
//         posterPath: movie.Poster,
//         releaseDate: movie.Released,
//       }));
//     },
    
//     // Review Queries
//     getReviews: async (_, { movieId }) => {
//       const movie = await Movie.findOne({ _id: movieId }).populate('reviews');
//       return movie ? movie.reviews : [];
//     },
    
//     // User Queries
//     getWatchlist: async (_, __, { user }) => {
//       if (!user) throw new Error('Authentication required');
//       const currentUser = await User.findById(user.id).populate('watchlist');
//       return currentUser.watchlist;
//     },
//   },

//   Mutation: {
//     // Movie Mutations
//     addMovieToWatchlist: async (_, { imdbID }, { user }) => {
//       if (!user) throw new Error('Authentication required');
//       const movie = await Movie.findOneAndUpdate(
//         { imdbID },
//         { imdbID },
//         { new: true, upsert: true }
//       );
//       const currentUser = await User.findById(user.id);
//       if (!currentUser.watchlist.includes(movie._id)) {
//         currentUser.watchlist.push(movie._id);
//         await currentUser.save();
//       }
//       return movie;
//     },

//     rateMovie: async (_, { imdbID, rating }, { user }) => {
//       if (!user) throw new Error('Authentication required');
//       const movie = await Movie.findOne({ imdbID });
//       if (!movie) throw new Error('Movie not found');
//       movie.rating = rating;
//       await movie.save();
//       return movie;
//     },

//     // Review Mutations
//     addReview: async (_, { movieId, content, rating }, { user }) => {
//       if (!user) throw new Error('Authentication required');

//       let movie = await Movie.findOne({ _id: movieId });
//       if (!movie) throw new Error('Movie not found');

//       const review = new Review({
//         content,
//         rating,
//         author: user.id,
//         movie: movie._id,
//       });
//       await review.save();

//       movie.reviews.push(review._id);
//       await movie.save();

//       const currentUser = await User.findById(user.id);
//       currentUser.reviews.push(review._id);
//       await currentUser.save();

//       return review;
//     },

//     // User Mutations
//     register: async (_, { username, email, password }) => {
//       const user = new User({ username, email, password });
//       await user.save();
//       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//       return { token, user };
//     },

//     login: async (_, { email, password }) => {
//       const user = await User.findOne({ email });
//       if (!user) throw new Error('User not found');
//       const valid = await bcrypt.compare(password, user.password);
//       if (!valid) throw new Error('Incorrect password');
//       const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
//       return { token, user };
//     },
//   },
// };

// module.exports = resolvers;
const {signToken} = require('../utils/auth')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { fetchMovieById, searchMovies } = require('../utils/fetchMovies');
const Movie = require('../models/Movie');
const User = require('../models/User');
const Review = require('../models/Review');

const resolvers = {
  Query: {
    // Movie Queries
    searchMovies: async (_, { query }) => {
      const movies = await searchMovies(query);
      return movies.map(movie => ({
        imdbID: movie.imdbID,
        title: movie.Title,
        rating: movie.imdbRating,
        posterPath: movie.Poster,
        releaseDate: movie.Released,
      }));
    },
    
    // Review Queries
    getReviews: async (_, { movieId }) => {
      const movie = await Movie.findOne({ _id: movieId }).populate('reviews');
      return movie ? movie.reviews : [];
    },
    
    // User Queries
    getWatchlist: async (_, __, { user }) => {
      if (!user) throw new Error('Authentication required');
      const currentUser = await User.findById(user.id).populate('watchlist');
      return currentUser.watchlist;
    },
  },

  Mutation: {
    // Movie Mutations
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
    },

    // Review Mutations
    addReview: async (_, { movieId, content, rating }, { user }) => {
      if (!user) throw new Error('Authentication required');

      let movie = await Movie.findOne({ _id: movieId });
      if (!movie) throw new Error('Movie not found');

      const review = new Review({
        content,
        rating,
        author: user.id,
        movie: movie._id,
      });
      await review.save();

      movie.reviews.push(review._id);
      await movie.save();

      const currentUser = await User.findById(user.id);
      currentUser.reviews.push(review._id);
      await currentUser.save();

      return review;
    },

    // User Mutations
    // addUser: async (_, { username, email, password }) => {
    //   const user = new User({ username, email, password });
    //   await user.save();
    //   const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    //   return { token, user };
    // },
    addUser: async (_, { username, email, password }) => {
      const user = new User({ username, email, password });
      await user.save();
      const token = signToken(user); // make sure you're passing the user object
      return { token, user };
    },

    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new Error('User not found');
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) throw new Error('Incorrect password');
      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;

