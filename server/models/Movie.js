const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  rating: Number,  // Custom user rating
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review'
    }
  ]
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;
