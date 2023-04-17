import "./App.css";
import React, { useState } from "react";
import { ApolloClient, 
        InMemoryCache, 
        ApolloProvider,
        createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";

 
// i think this is the way this is done, pulled from activity 26 in the mern module
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // not sure what to put for this value to get this connection to work
  link: authLink.concat(httpLink),
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
          <Route path="*" element={<h1>Wrong page!</h1>} />
        </Routes>

      </div>
      
    </ApolloProvider>

  );
}
export default App;
