import React from 'react';
import './../styles/Post.css';

function Post({ post }) {
  return (
    <div className="post">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-content">{post.content}</p>
      <div className="post-footer">
        <span className="post-category">{post.category}</span>
        <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
      </div>
    </div>
  );
}

export default Post;
