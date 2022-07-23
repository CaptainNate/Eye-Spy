import React, { useState } from 'react';

// will need these once mutations are functioning
// import { useMutation } from '@apollo/client';
// import { LOGIN_USER } from '../utils/mutations';

// image import
import loginImg from '../images/login-signup-img.png';

const Login = () => {

    // add in login conditional statements

    return (
        <main className="container p-5 mb-5">
            <div className="d-flex justify-content-center align-items-center">
                <div className="px-5 mx-5">
                    <div>
                        <img src={loginImg} alt="couple paddle boarding" />
                    </div>
                </div>
                <form className="px-5 mx-5 col">
                    <div className="d-flex row">
                        <div>
                            <h2 className="mb-5 pb-3 border-bottom border-dark text-center">Login</h2>
                        </div>
                        {/* input email */}
                        <div>
                            <label htmlFor='email' className="form-label pe-3">Email</label>
                            <input
                                className="form-control p-1 mb-4"
                                placeholder="Your email"
                                name="email"
                                type="email"
                                id="email"
                            />
                        </div>
                        {/* input password */}
                        <div>
                            <label htmlFor='password' className="form-label pe-3">Password</label>
                            <input
                                className="form-control p-1 mb-4"
                                placeholder="********"
                                name="password"
                                type="password"
                                id="password"
                            />
                        </div>
                        {/* submit login data */}
                        <div className="text-center">
                        <button className="all-btns p-2 rounded" type="submit" id="submit-login">
                            Submit
                        </button>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login;