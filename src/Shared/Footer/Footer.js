import React from 'react';
import { FaFacebook, FaGooglePlus, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';
import Subscribe from './Subscribe/Subscribe';


const Footer = () => {
    return (
        <div className=''>
                <footer className="text-center text-lg-start bg-footer text-footer pt-1">
                    <Subscribe></Subscribe>
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                
                    <div className="row mt-3">

                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                        <h6 className="fw-bold mb-4">
                            <i className="fas fa-gem me-3"></i>
                            <div className='d-flex align-items-center'>
                                        <div>
                                            <img className='w-10 rounded-circle' src="https://i.pinimg.com/originals/4e/95/ff/4e95ff2406e7914e70cbbba6dd9c51d2.jpg" alt=""/>
                                        </div>
                                        <div className='ps-2 fw-bold fs-2 text-orange m-back f-corner'>
                                            Corner
                                        </div>
                                    </div>
                        </h6>
                        <p>
                                Homemade food is always treated as a privilege, especially with our hectic life schedules. Now a days, people seldom cook at home and find a good reason to go out and eat.
                        </p>
                        </div>


                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 className="text-uppercase fw-bold mb-4">
                            Products
                        </h6>
                        <p>
                            <Link to={'/'} className="text-reset text-decoration-none">Angular</Link>
                        </p>
                        <p>
                            <Link to={'/'} className="text-reset text-decoration-none">React</Link>
                        </p>
                        <p>
                            <Link to={'/'} className="text-reset text-decoration-none">Vue</Link>
                        </p>
                        <p>
                            <Link to={'/'} className="text-reset text-decoration-none">Laravel</Link>
                        </p>
                        </div>



                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                        <h6 className="text-uppercase fw-bold mb-4">
                            Useful links
                        </h6>
                        <p>
                            <Link to={'/'} className="text-reset text-decoration-none">Pricing</Link>
                        </p>
                        <p>
                            <Link to={'/'} className="text-reset text-decoration-none">Settings</Link>
                        </p>
                        <p>
                            <Link to={'/'} className="text-reset text-decoration-none">Orders</Link>
                        </p>
                        <p>
                            <Link to={'/'} className="text-reset text-decoration-none">Help</Link>
                        </p>
                        </div>
                

                
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                        <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                        <p>
                            <i className="fas fa-envelope me-3"></i>
                            info@example.com
                        </p>
                        <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                        <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    
                    </div>

                    </div>
                </section>

                <div className='border container my-5'>

                </div>
                
                <div className='container'>
                    <div className='d-flex justify-content-center gap-3 fs-3'>
                    <Link to={'/'} className="text-reset text-decoration-none"><FaFacebook></FaFacebook></Link>
                    <Link to={'/'} className="text-reset text-decoration-none"><FaInstagram></FaInstagram></Link>
                    <Link to={'/'} className="text-reset text-decoration-none"><FaTwitter></FaTwitter></Link>
                    <Link to={'/'} className="text-reset text-decoration-none"><FaGooglePlus></FaGooglePlus></Link>
                    </div>
                <div className="text-center p-4">
                    ©Copyright All rights reserved.
                </div>
                </div>
                
                </footer>
        </div>
    );
};

export default Footer;