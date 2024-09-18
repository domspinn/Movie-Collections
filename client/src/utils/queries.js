import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      username
      watchedList {  # Changed from watchedList to watchlist to match the typedefs and resolvers
        title
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      username
      watchedList {  # Changed from watchedList to watchlist to match the typedefs and resolvers
        title
      }
    }
  }
`;
