import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { ADD_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

import loginImg from '../images/login-signup-img.png';

const SignUp = () => {

    // const [formState, setFormState] = useState({
    //     username: '',
    //     email: '',
    //     password: '',
    // });
    // const [addUser, { error }] = useMutation(ADD_USER);

    // // update state based on form input changes
    // const handleChange = (event) => {
    //     const { name, value } = event.target;

    //     setFormState({
    //         ...formState,
    //         [name]: value,
    //     });
    // };

    // // submit form
    // const handleFormSubmit = async (event) => {
    //     event.preventDefault();

    //     try {
    //         const { data } = await addUser({
    //             variables: { ...formState },
    //         });

    //         Auth.login(data.addUser.token);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // };

    return (
        <main className="container p-5 mb-5">
            <div className="d-flex justify-content-center align-items-center">
                <div className="px-5 mx-5">
                    <div>
                        <img src={loginImg} alt="couple paddle boarding" />
                    </div>
                </div>
                {/* need to add following line to form once mutations are complete */}
                {/* onSubmit={handleFormSubmit} */}
                <form className="px-5 mx-5 col">
                    <div className="d-flex row">
                        <div>
                            <h2 className="mb-5 pb-3 border-bottom border-dark text-center">Sign Up Today!</h2>
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
                                // value={formState.email}
                                // onChange={handleChange}
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
                                // value={formState.password}
                                // onChange={handleChange}
                            />
                        </div>
                        {/* submit login data */}
                        <div className="text-center">
                            <button className="all-btns p-2 rounded" type="submit" id="submit-login">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
                {/* catch signup error */}
                {/* {error && <div>Signup failed</div>} */}
            </div>
        </main>
    )
}

export default SignUp;