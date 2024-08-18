import React, { useState } from 'react';
import './../styles/Signup.css';

function Signup({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Static credentials for demonstration
  const staticUsername = 'admin';
  //const staticPassword = 'password';

  const handleSignup = (e) => {
    e.preventDefault();
    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Check against static credentials
    if (username === staticUsername) {
      setError('Username already exists');
    } else {
      setUser(username);
    }
  };

  return (
    <div className="signup">
      <div className="signup-form-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Signup;
