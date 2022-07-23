import React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

// bootstrap styling
import "bootstrap/dist/css/bootstrap.min.css";

// component imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Contact from "./components/ContactUs";

// page imports
import Login from "./pages/Login";
import SignUp from "./pages/Signup";

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
            <Routes>
              {/* need to fix landing page to display when site first loads */}
              {/* but still dynamically change when clicking to different pages */}
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/contact-us" element={<Contact />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
