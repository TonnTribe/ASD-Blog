import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_POST } from '../utils/queries';

const SinglePost = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { postId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_POST, {
    // pass URL parameter
    variables: { postId: postId },
  });

  const post = data?.post || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3" >
      <h3 className="card-header text-default p-2 m-0" >
        {post.postAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          had this post on {post.createdAt}
        </span>
      </h3>
      <div className="bg-dark py-2" style={{ border: '1px solid #1a1a1a' }}>
        <blockquote
          className="bg-dark py-2"
          style={{
            fontSize: '1.25rem',
            lineHeight: '.5',
          }}
        >
          {post.postText}
        </blockquote>
      </div>

      <div className="my-2">
        <CommentList comments={post.comments} />
      </div>
      <div className="p-2" style={{ border: '1px solid #1a1a1a' }}>
        <CommentForm postId={post._id} />
      </div>
    </div>
  );
};

export default SinglePost;
