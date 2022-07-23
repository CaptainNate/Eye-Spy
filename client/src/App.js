import React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// bootstrap styling
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Contact from "./components/ContactUs";

// CONNECTION TO BACKEND SERVERS
const httpLink = createHttpLink({
  uri: 'http://localhost:3000',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header />
          <div className="container">
            <LandingPage />
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/contact-us" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
