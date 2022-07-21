import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/Auth';

// logo image
import logo from '../../images/eye-spy-500x500.png'

function Header() {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    }

    return (
        <header>
            <div className="d-flex justify-content-between">
                <Link to="/">
                    
                    <img src={logo} alt="Eye Spy Logo" height={250} width={250}></img>
                    
                </Link>

                <nav className="navbar justify-content-end align-items-end pb-3 px-5">
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
                            <Link to="/login" className="font-color px-3 text-decoration-none fs-5">Login</Link>
                            <Link to="/signup" className="font-color px-3 text-decoration-none fs-5">Signup</Link>
                        </>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Header;