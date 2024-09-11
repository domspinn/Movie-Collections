// const Movie = require('../models/Movie');
// const Review = require('../models/Review');
// const User = require('../models/User');

// const reviewResolvers = {
//   Query: {
//     // Fetch reviews for a specific movie
//     getReviews: async (_, { movieId }) => {
//       const movie = await Movie.findOne({ movieId }).populate('reviews');
//       return movie ? movie.reviews : [];
//     }
//   },

//   Mutation: {
//     // Add a review for a movie
//     addReview: async (_, { movieId, content, rating }, { user }) => {
//       if (!user) {
//         throw new Error('Not authenticated');
//       }

//       // Find the movie in the database
//       let movie = await Movie.findOne({ movieId });
//       if (!movie) {
//         throw new Error('Movie not found');
//       }

//       // Create a new review
//       const review = new Review({
//         content,
//         rating,
//         author: user.id,
//         movie: movie._id
//       });
//       await review.save();

//       // Add the review to the movie's review array
//       movie.reviews.push(review._id);
//       await movie.save();

//       // Add the review to the user's review history
//       const currentUser = await User.findById(user.id);
//       currentUser.reviews.push(review._id);
//       await currentUser.save();

//       return review;
//     }
//   }
// };

// module.exports = reviewResolvers;
