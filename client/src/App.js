
import "./App.css";
import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
 
const client = new ApolloClient({
  uri: 'workout-tracker-5v11-7dnl01e9f-maxholzmann.vercel.app',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">

        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </ApolloProvider>
  );
}
export default App;
