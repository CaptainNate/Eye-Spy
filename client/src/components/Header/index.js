import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/Auth";

// logo image
import logo from "../../images/eye-spy-500x500.png";

// Component imports
import SearchBar from "../SearchBar";
// import Contact from "../ContactUs";

function Header() {
  // logout handler
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <div className="d-flex justify-content-between">
        <Link to="/">
          <img src={logo} alt="Eye Spy Logo" height={175} width={175}></img>
        </Link>

        <nav className="navbar justify-content-end align-items-center pb-3 px-5">
          {Auth.loggedIn() ? (
            <>
              <Link to="/dashboard">My Dashboard</Link>
              {/* <Link to='/favorites'>My Favorites</Link>
                            <Link to='/add-destination'>Add A Destination</Link>
                            <Link to='/destinations'>View All Destinations</Link> */}
              <a href="/" onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <div className="text-center">
                <div className="pb-3">
                  <Link
                    to="/login"
                    className="font-color px-3 text-decoration-none fs-6"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="font-color px-3 text-decoration-none fs-6"
                  >
                    Signup
                  </Link>
                  <Link
                    to="/about-us"
                    className="font-color px-3 text-decoration-none fs-6"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/contact-us"
                    // component={Contact}
                    className="font-color px-3 text-decoration-none fs-6"
                  >
                    Contact Us
                  </Link>
                </div>
                <div className="d-flex">
                  <SearchBar />
                </div>
              </div>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
