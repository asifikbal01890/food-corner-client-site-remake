import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import './NavBar.css';


const NavBar = () => {
    const {user, logOut} = useContext(AuthContext)
return (
    <div>
        <nav className="navbar nav-bg navbar-expand-lg">
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <Link to={'/'} className="navbar-brand" >
            <div className='d-flex align-items-center'>
                        <div>
                            <img className='w-10 rounded-circle' src="https://i.pinimg.com/originals/4e/95/ff/4e95ff2406e7914e70cbbba6dd9c51d2.jpg" alt=""/>
                        </div>
                        <div className='ps-2 fw-bold fs-3 text-orange m-back f-corner'>
                            Corner
                        </div>
                    </div>
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto gap-3">
                <li className="nav-item">
                <Link to={'/'} className="nav-link fs-5 custom-nav-button" aria-current="page" >Home</Link>
                </li>
                <li className="nav-item">
                <Link to={'/Foods'} className="nav-link fs-5 custom-nav-button" aria-current="page" >Foods</Link>
                </li>
                <li className="nav-item">
                <Link to={'/blog'} className="nav-link fs-5 custom-nav-button" aria-current="page" >Blog</Link>
                </li>
                <li>
                <Link to={'/addService'} className="nav-link fs-5 custom-nav-button" aria-current="page" >Add Service</Link>
                </li>
                <li className="nav-item">
                {
                    user?.uid ?
                    <Link to={'/myReview'} className="nav-link fs-5 custom-nav-button" aria-current="page" >My Review</Link>
                    :
                    <>

                    </>
                }
                </li>
                <li className="nav-item d-lg-none">
                {
                    user?.uid ?
                    <Link onClick={logOut} className="nav-link active fs-5 btn-orange px-3 py-2" >Logout</Link>
                    :
                    <>
                    <Link to={'/login'} className="nav-link active fs-5 btn-orange text-white px-3 py-2" aria-current="page" >Login</Link>
                    </>
                }
                </li>
            </ul>
            </div>
            <div className="d-none d-lg-flex">
                {
                    user?.uid ?
                    <Link onClick={logOut} className="nav-link active fw-semibold fs-5 btn-orange text-white px-3 py-2" >Logout</Link>
                    :
                    <>
                    <Link to={'/login'} className="nav-link active fs-5 btn-orange px-4 py-2 text-white" aria-current="page" >Login</Link>
                    </>
                }
            </div>
        </div>
        </nav>
    </div>
    );
};

export default NavBar;