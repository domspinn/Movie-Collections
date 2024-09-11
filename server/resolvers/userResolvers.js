// const User = require('../models/User');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const Movie = require('../models/Movie');

// const userResolvers = {
//   Mutation: {
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
//     }
//   },
//   Query: {
//     getWatchlist: async (_, __, { user }) => {
//       if (!user) throw new Error('Authentication required');
//       const currentUser = await User.findById(user.id).populate('watchlist');
//       return currentUser.watchlist;
//     }
//   }
// };

// module.exports = userResolvers;
