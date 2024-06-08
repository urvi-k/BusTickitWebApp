import React, { useState } from 'react';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="login-container">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSItVagF6MbVNzlqENNVqTFFwXv0ouZwRdGg&s" alt="Bus Smiley" className="bus-smiley" />
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;

