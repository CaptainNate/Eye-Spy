import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

// bootstrap styling
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'

// component imports
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/ContactUs";
import Modals from "./components/Modals";

// page imports
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import AboutUs from "./pages/AboutUs.js";
import Search from "./pages/Search";
<<<<<<< HEAD
import AddDestination from "./pages/AddDestination";
import SearchResults from "./components/SearchResults";
=======
import Dashboard from "./pages/Dashboard";
>>>>>>> 688b0540ccbefced8bc315bf7eb09cc06d570abb

// CONNECTION TO BACKEND SERVERS
const httpLink = createHttpLink({
  uri: "http://localhost:3000",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>

      <Router>
        <div className="">
          <Header />
          <div className="">
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/contact-us" element={<Contact />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route exact path="/about-us" element={<AboutUs />} />
              <Route exact path="/activity-search" element={<Search />} />
<<<<<<< HEAD
              <Route exact path="/add-destination" element={<AddDestination />} />
              <Route exact path="/search-results" element={<SearchResults />} />
=======
              <Route exact path="/dashboard" element={<Dashboard />} />
>>>>>>> 688b0540ccbefced8bc315bf7eb09cc06d570abb
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
