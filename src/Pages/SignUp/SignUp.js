import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';


const SignUp = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.PhotoURL.value;
        const email = form.email.value;
        const password = form.Password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                navigate(from, { replace: true })
            })
            .catch(e => {

                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => {
                setError(e.message)
            });
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className='p-5 rounded-4 w-25'>
                <div className='d-flex justify-content-center pb-3'>
                    <h2>Create Account</h2>
                </div>
                <form onSubmit={handleSubmit} className='pt-4'>
                    <div className="row mb-3">

                        <div className="col-sm-10  w-100">
                            <input type="Name" className="fs-5 py-2 w-100 login-form px-3" name="name" placeholder='Full name' />
                        </div>
                    </div>
                    <div className="row mb-3">

                        <div className="col-sm-10 w-100">
                            <input type="PhotoURL" className="fs-5 py-2 w-100 login-form px-3" name="PhotoURL" placeholder='Photo URL' />
                        </div>
                    </div>
                    <div className="row mb-3">

                        <div className="col-sm-10 w-100">
                            <input type="email" className="fs-5 py-2 w-100 login-form px-3" name="email" placeholder='Email address' required />
                        </div>
                    </div>
                    <div className="row mb-3 ">

                        <div className="col-sm-10 w-100">
                            <input type="Password" className="fs-5 py-2 w-100 login-form px-3" name="Password" placeholder='Password' required />
                        </div>
                    </div>
                    <button type="submit" className="btn-login">Register</button>
                </form>
                <span className='text-danger'>{error}</span>
                <div className='d-flex justify-content-center pt-2'>
                    <p>Already have an account?<Link className='text-decoration-none ps-2' to={'/login'}>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;