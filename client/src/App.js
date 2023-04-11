import './App.css';
import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import HomePage from './pages/Homepage';
import Login from './pages/Login'; 
import Navbar from './components/Navbar'
import styles from './styles/globals.css'

function App() {
  // const [currentPage, setCurrentPage] = useState('home');
  
  // const handleNavClick = (page) => {
  //   setCurrentPage(page);
  // };

  const [currentPage, setCurrentPage] = useState('Home')

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  
  return (
    <div className="App">
      <Navbar onPageChange={handlePageChange}></Navbar> 
      {currentPage === 'Home' && <HomePage />}
      {currentPage === 'Dashboard' && <Dashboard />}
      {currentPage === 'Login' && <Login />}
    </div>
  );
}
export default App;
