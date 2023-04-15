// log in credentials
import React, { useState } from 'react';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Handle login logic here, such as making an API call to authenticate user credentials
  };

  return (
    <form onSubmit={handleSubmit}>

      <label>
        Email:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>

      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>

      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>

      <button type="submit">Login</button>
    </form>
  );
}

export default SignUp;
