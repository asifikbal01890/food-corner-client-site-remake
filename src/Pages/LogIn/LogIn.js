import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle, IconName } from "react-icons/fc"
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider';
import './LogIn.css';


const LogIn = () => {
    const [error, setError] = useState('');
    const { signIn, googleSingIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });

            })
            .catch(e => setError(e.message));
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSingIn = () => {
        googleSingIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(e => setError(e.message))
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='p-5 rounded-4 w-25'>
                <div className='d-flex justify-content-center'>
                    <h2>Please Login</h2>
                </div>
                <form onSubmit={handleSubmit} className='pt-5'>
                    <div className="row mb-3">
                        <div className="w-100">
                            <input type="email" className="fs-5 py-2 w-100 login-form px-3" name="email" placeholder='Email address' required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="w-100">
                            <input type="password" className="fs-5 py-2 w-100 login-form px-3" name="password" placeholder='Password' required />
                        </div>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type="submit" className="btn-login">Login</button>
                    </div>
                </form>
                <div className='d-flex justify-content-center'>
                    <span className='text-danger'>{error}</span>
                </div>
                <div className='p-4 d-flex justify-content-center'>
                    <p>Don't have an account?</p>
                    <Link className='text-decoration-none ps-2' to={'/register'}>Sign up</Link>
                </div>
                <div className='d-block'>
                    <div className='d-flex justify-content-center'>
                        <button onClick={handleGoogleSingIn} type="button" className="btn btn-light py-3 border rounded-0 w-100 "><span><FcGoogle></FcGoogle></span> Sing In by Google</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LogIn;