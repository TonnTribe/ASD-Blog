import { gql } from '@apollo/client';

export const ADD_POST = gql`
  mutation addPost($PostText: String!, $PostAuthor: String!) {
    addPost(PostText: $PostText, PostAuthor: $PostAuthor) {
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
