import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/Auth";

// logo image
import logo from "../../images/eye-spy-500x500.png";

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
                            <Link to='/favorites'>My Favorites</Link>
                            <Link to='/add-destination'>Add A Destination</Link>
                            <a href="/" onClick={logout}>
                                Logout
                            </a>
                        </>
                    ) : (
                        <>
                            <div className="text-center">
                                <div className="">
                                    <Link to="/login" className="font-color px-3 text-decoration-none fs-6">Login</Link>
                                    <Link to="/signup" className="font-color px-3 text-decoration-none fs-6">Signup</Link>
                                    <Link to="/activity-search" className="font-color px-3 text-decoration-none fs-6">Destination Search</Link>
                                    <Link to="/about-us" className="font-color px-3 text-decoration-none fs-6">About Us</Link>
                                    <Link to="/contact-us" className="font-color px-3 text-decoration-none fs-6">Contact Us</Link>
                                    {/* this must be taken out once the login auth is functioning on the backend */}
                                    <Link to="/add-destination" className="font-color px-3 text-decoration-none fs-6">Add Destination</Link>
                                    {/* search results will only display when the submit button is clicked in the SearchBar */}
                                    <Link to="/search-results" className="font-color px-3 text-decoration-none fs-6">Search Results</Link>
                                </div>
                            </div>
                        </>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Header;
