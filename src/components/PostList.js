import React from 'react';
import Post from './Post';
import './../styles/PostList.css';

function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
