const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Movie {
    id: ID!
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
    id: ID!
    username: String
    email: String
    collection: [Movie]
    reviews: [Review]
    watchlist: [Movie]
  }

  type Query {
    # Movie Queries
    searchMovies(query: String!): [Movie]

    # Review Queries
    getReviews(movieId: ID!): [Review]

    # User Queries
    getWatchlist: [Movie]
  }

  type Mutation {
    # Movie Mutations
    addMovieToWatchlist(imdbID: ID!): Movie
    rateMovie(imdbID: ID!, rating: Float!): Movie

    # Review Mutations
    addReview(movieId: ID!, content: String!, rating: Float!): Review

    # User Mutations
    register(username: String!, email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
  }

  type AuthPayload {
    token: String
    user: User
  }
`;

module.exports = typeDefs;
