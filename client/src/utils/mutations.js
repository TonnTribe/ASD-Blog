import { gql } from '@apollo/client';

export const ADD_THOUGHT = gql`
  mutation addThought($PostText: String!, $PostAuthor: String!) {
    addThought(PostText: $PostText, PostAuthor: $PostAuthor) {
      _id
      PostText
      PostAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;
