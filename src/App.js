import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import Login from './components/Login';
import Signup from './components/Signup';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [view, setView] = useState('login');

  /*useEffect(() => {
    fetch('/api/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);*/

  useEffect(() => {
    // Fetching mock data from local JSON file
    fetch('/posts.json')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleLogout = () => {
    setUser(null);
    setView('login');
  };

  if (!user) {
    return (
      <div className="app">
        {view === 'login' ? <Login setUser={setUser} setView={setView} /> : <Signup setUser={setUser} />}
      </div>
    );
  }

  /*const addPost = (post) => {
    fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post),
    })
      .then(response => response.json())
      .then(data => setPosts([...posts, data]))
      .catch(error => console.error('Error adding post:', error));
  };*/

  const addPost = (post) => {
    // For now, this will just add to the state without saving permanently
    setPosts([...posts, { ...post, id: posts.length + 1, date: new Date().toISOString() }]);
  };

  return (
    <div className="app">
      <Header />
      <main>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
        <PostForm addPost={addPost} />
        <PostList posts={posts} />
      </main>
    </div>
  );
}

export default App;
