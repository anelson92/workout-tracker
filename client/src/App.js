import './App.css';
import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/Homepage';
import Login from './pages/Login'; 

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  
  const handleNavClick = (page) => {
    setCurrentPage(page);
  };
  
  return (
    <div className="App">
      <nav>
        <button onClick={() => handleNavClick('dashboard')}>Dashboard</button>
        <button onClick={() => handleNavClick('home')}>Home</button>
        <button onClick={() => handleNavClick('login')}>Login</button>
      </nav>
      {currentPage === 'dashboard' && <Dashboard />}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'login' && <Login />}
    </div>
  );
}
export default App;
