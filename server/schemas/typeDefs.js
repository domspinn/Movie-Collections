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
  }

  type Query {
    # Movie queries
    popularMovies: [Movie]
    searchMovies(query: String!): [Movie]

    # User queries
    userCollection: [Movie]

    # Review queries
    getReviews(movieId: ID!): [Review]
  }

  type Mutation {
    # User mutations
    addMovieToCollection(movieId: ID!, title: String!, rating: Float!): Movie

    # Review mutations
    addReview(movieId: ID!, content: String!, rating: Float!): Review
  }
`;

module.exports = typeDefs;
