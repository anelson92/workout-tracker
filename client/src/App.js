import "./App.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  // const handlePageChange = (page) => {
  //   setCurrentPage(page);
  // };

  const styles = {
    navStyles: {
      right: 0,
      width: "100%",
    },
  };

  return (
    <div className="App">
      <Navbar
        styles={styles.navStyles}
        // onPageChange={handlePageChange}
      ></Navbar>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* {currentPage === "Home" && <HomePage />}
      {currentPage === "Dashboard" && <Dashboard />}
      {currentPage === "Login" && <Login />} */}
    </div>
  );
}
export default App;
