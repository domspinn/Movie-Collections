const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    // Ensure the environment variable is correctly loaded
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/movie-collection';
    if (!mongoURI) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    // Connect to MongoDB
    await mongoose.connect(mongoURI);


    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
