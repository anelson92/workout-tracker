// about site, log in button
import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to My Fitness Program!</h1>
      <p>Get fit and healthy with our personalized workout plans and nutrition programs.</p>
      <Link to="/about">About Me</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default HomePage;
