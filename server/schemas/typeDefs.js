const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Movie {
    imdbID: String!
    title: String
    rating: Float
    posterPath: String
    releaseDate: String
    reviews: [Review]
  }

  type Review {
    id: ID!
    content: String
    rating: Float
    author: User
    movie: Movie
  }

  type User {
    _id: ID!
    username: String
    email: String
    collection: [Movie]
    reviews: [Review]
    watchlist: [Movie]
  }

  type Query {
    # Movie Queries
    searchMovies(query: String!): [Movie]
    getReviews(movieId: ID!): [Review]
    getWatchlist: [Movie]
  }

  type Mutation {
    # Movie Mutations
    addMovieToWatchlist(imdbID: String!): Movie
    rateMovie(imdbID: String!, rating: Float!): Movie

    # Review Mutations
    addReview(movieId: ID!, content: String!, rating: Float!): Review

    # User Mutations
    addUser(username: String!, email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }

  type AuthPayload {
    token: String
    user: User
  }
`;

module.exports = typeDefs;
