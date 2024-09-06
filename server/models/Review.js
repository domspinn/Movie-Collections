const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
