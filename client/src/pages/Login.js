import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

// authentication import
import Auth from '../utils/Auth';

// image import
import loginImg from '../images/login-signup-img.png';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });

        console.log(formState)
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e)
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <main className="container p-5 mb-5">
            <div className="d-flex justify-content-center align-items-center">
                <div className="px-5 mx-5">
                    <div>
                        <img src={loginImg} alt="couple paddle boarding" />
                    </div>
                </div>
                {/* will need to add the following line in the form */}
                {/* onSubmit={handleFormSubmit} */}
                <form className="px-5 mx-5 col" onSubmit={handleFormSubmit} >
                    <div className="d-flex row">
                        <div>
                            <h1 className="mb-5 pb-3 border-bottom border-dark text-center header-font">Login</h1>
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
                                value={formState.email}
                                onChange={handleChange}
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
                                value={formState.password}
                                onChange={handleChange}
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

                {/* catch login error */}
                {error && <div>Login failed</div>}
            </div>
        </main>
    )
}

export default Login;