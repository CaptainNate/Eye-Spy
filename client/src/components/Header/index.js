import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/Auth";

// logo image
import logo from "../../images/eye-spy-500x500.png";

// react-bootstrap imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    // logout handler
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        // <header>
        //     <div className="d-flex justify-content-between">
        // <Link to="/">
        //     <img src={logo} alt="Eye Spy Logo" height={175} width={175}></img>
        // </Link>

        //         <nav className="navbar justify-content-end align-items-center pb-3 px-5">
        // {Auth.loggedIn() ? (
        //     <>
        //         <Link to="/dashboard">My Dashboard</Link>
        //         <Link to='/add-destination'>Add A Destination</Link>
        //         <Link to='/destinations'>View All Destinations</Link>
        //         <a href="/" onClick={logout}>
        //             Logout
        //         </a>
        //     </>
        // ) : (
        //     <>
        //                     <div className="text-center">
        //                         <div className="">
        //                             <Link to="/login" className="font-color px-3 text-decoration-none fs-6">Login</Link>
        //                             <Link to="/signup" className="font-color px-3 text-decoration-none fs-6">Signup</Link>
        //                             <Link to="/activity-search" className="font-color px-3 text-decoration-none fs-6">Destination Search</Link>
        //                             <Link to="/about-us" className="font-color px-3 text-decoration-none fs-6">About Us</Link>
        //                             <Link to="/contact-us" className="font-color px-3 text-decoration-none fs-6">Contact Us</Link>

        //                             this must be taken out once the login auth is functioning on the backend
        //                             <Link to="/add-destination" className="font-color px-3 text-decoration-none fs-6">Add Destination</Link>
        //                             <Link to="/dashboard" className="font-color px-3 text-decoration-none fs-6">Dashboard</Link>

        //                             search results will only display when the submit button is clicked in the SearchBar
        //                             <Link to="/search-results" className="font-color px-3 text-decoration-none fs-6">Search Results</Link>
        //                         </div>
        //                     </div>
        //                 </>
        //             )}
        //         </nav>
        //     </div>
        // </header>


        <header>

            <Navbar collapseOnSelect expand="lg">
                <Container className="d-flex">
                    <Navbar.Brand href="/">
                        <Link to="/">
                            <img src={logo} alt="Eye Spy Logo" height={175} width={175}></img>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav>
                            {Auth.loggedIn() ? (
                                <>
                                    <Nav.Link href="/dashboard" className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end">My Dashboard</Nav.Link>
                                    <Nav.Link href='/add-destination' className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end">Add A Destination</Nav.Link>
                                    <Nav.Link href='/destinations' className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end">View All Destinations</Nav.Link>
                                    <a href="/" onClick={logout}>
                                        Logout
                                    </a>
                                </>
                            ) : (
                                <>
                                    <Nav.Link href="/login" className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end">Login</Nav.Link>
                                    <Nav.Link href="/sign-up" className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end">Sign Up</Nav.Link>
                                    <Nav.Link href="/activity-search" className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end">Destination Search</Nav.Link>
                                    <Nav.Link href="/about-us" className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end">About Us</Nav.Link>
                                    <Nav.Link href="/contact-us" className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end">Contact Us</Nav.Link>

                                    {/* this must be taken out once the login auth is functioning on the backend */}
                                    <Nav.Link href="/add-destination" className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end">Add Destination</Nav.Link>
                                    <Nav.Link href="/dashboard" className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end">Dashboard</Nav.Link>

                                    {/* search results will only display when the submit button is clicked in the SearchBar */}
                                    <Nav.Link href="/search-results" className="font-color px-3 text-decoration-none fs-6 d-flex justify-content-end">Search Results</Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </header>
    )
}

export default Header;
