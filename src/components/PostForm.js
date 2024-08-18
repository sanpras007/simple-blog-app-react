import React, { useState } from 'react';
import './../styles/PostForm.css';

function PostForm({ addPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    addPost({ title, content, category });
    setTitle('');
    setContent('');
    setCategory('');
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h2>Create a New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default PostForm;
