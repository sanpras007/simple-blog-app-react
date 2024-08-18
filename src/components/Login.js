import React, { useState } from 'react';
import './../styles/Login.css';

function Login({ setUser,setView }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Static credentials
  const staticUsername = 'admin';
  const staticPassword = 'password';

  const handleLogin = (e) => {
    e.preventDefault();
    // Check against static credentials
    if (username === staticUsername && password === staticPassword) {
      setUser(username);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login">
      <div className="login-form-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
        <p className="switch-view">
          Don't have an account? <button onClick={() => setView('signup')}>Sign Up</button>
        </p>
      </div>
    </div>
  );
}

export default Login;
