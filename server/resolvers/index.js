const movieResolvers = require('./movieResolvers');
const userResolvers = require('./userResolvers');
const reviewResolvers = require('./reviewResolvers');

const resolvers = {
  Query: {
    ...movieResolvers.Query,
    ...userResolvers.Query,
    ...reviewResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
    ...reviewResolvers.Mutation
  }
};

module.exports = resolvers;
