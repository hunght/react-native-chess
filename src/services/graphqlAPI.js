import gql from 'graphql-tag';
export const GET_ME = gql`
  query GetMe {
    me {
      id
      posts {
        id
      }
    }
  }
`;
