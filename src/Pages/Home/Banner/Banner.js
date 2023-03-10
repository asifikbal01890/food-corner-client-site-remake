import React from 'react';
import { Fa500Px, FaRegClock, FaWallet } from 'react-icons/fa';
import './Banner.css';

const Banner = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img className='vh-100 position-relative d-block' src="https://smartslider3.com/wp-content/uploads/slider/cache/ece3c866a4834c1005e5bbfb1b5dc27d/cookingslide1.webp" alt="..." />
                    <div className='absolute'>
                        <div className=''>
                            <h2 className='d-none d-lg-flex f-corner'>Make the Perfect Creamy</h2>
                            <h4 className='d-none d-md-flex d-lg-none f-corner'>Make the Perfect Creamy</h4>
                            <h6 className='d-flex d-md-none f-corner'>Make the Perfect Creamy</h6>
                            <h2 className='d-none d-lg-flex f-corner'><strong className='pe-3 text-orange'>Lemon Pie</strong>Like a Chef</h2>
                            <h4 className='d-none d-md-flex d-lg-none f-corner'><strong className='pe-3 text-orange'>Lemon Pie</strong>Like a Chef</h4>
                            <h6 className='d-flex d-md-none f-corner'><strong className='pe-3 text-orange'>Lemon Pie</strong>Like a Chef</h6>
                        </div>
                        <div className='d-flex pt-3'>
                            <div className='fs-2 text-orange align-items-center'>
                                <FaRegClock></FaRegClock>
                            </div>
                            <div className='ps-2 align-items-center pt-2'>
                                <h6 className='mb-0'>TIME</h6>
                                <p className='fw-light fst-italic'>20 mins</p>
                            </div>
                        </div>
                        <div className='d-none d-md-flex pt-2 '>
                            <div className='fs-2 text-orange align-items-center'>
                                <FaWallet></FaWallet>
                            </div>
                            <div className='ps-2 align-items-center pt-2'>
                                <h6 className='mb-0'>BUDGET</h6>
                                <p className='fw-light fst-italic'>Under $30</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img className='position-relative d-block vh-100' src="https://smartslider3.com/wp-content/uploads/slider/cache/1b12c106ed43fc5a46f6f1276be0d570/cookingslide2.webp" alt="..." />
                    <div className='absolute'>
                        <div className=''>
                            <h2 className='d-none d-lg-flex f-corner'>Basic Formulas for Marking</h2>
                            <h4 className='d-none d-md-flex d-lg-none f-corner'>Basic Formulas for Marking</h4>
                            <h6 className='d-flex d-md-none f-corner'>Basic Formulas for Marking</h6>
                            <h2 className='d-none d-lg-flex f-corner'><strong className='pe-3 text-orange'>Homemade</strong>Spice</h2>
                            <h4 className='d-none d-md-flex d-lg-none f-corner'><strong className='pe-3 text-orange'>Homemade</strong>Spice</h4>
                            <h6 className='d-flex d-md-none f-corner'><strong className='pe-3 text-orange'>Homemade</strong>Spice</h6>
                        </div>
                        <div className='d-flex pt-3'>
                            <div className='fs-2 text-orange align-items-center'>
                                <FaRegClock></FaRegClock>
                            </div>
                            <div className='ps-2 align-items-center pt-2'>
                                <h6 className='mb-0'>TIME</h6>
                                <p className='fw-light fst-italic'>10 mins</p>
                            </div>
                        </div>
                        <div className='d-flex pt-2'>
                            <div className='fs-2 text-orange align-items-center'>
                                <FaWallet></FaWallet>
                            </div>
                            <div className='ps-2 align-items-center pt-2'>
                                <h6 className='mb-0'>BUDGET</h6>
                                <p className='fw-light fst-italic'>Under $10</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="carousel-item">
                    <img className='position-relative d-block pe-more vh-100' src="https://smartslider3.com/wp-content/uploads/slider/cache/e37956be8f89fc62f048473513f3a928/cookingslide3.webp" alt="..." />
                    <div className='absolute'>
                        <div className=''>
                            <h2 className='d-none d-lg-flex f-corner'><strong className='pe-3 text-orange'>Breakfast Recipes</strong>You</h2>
                            <h4 className='d-none d-md-flex d-lg-none f-corner'><strong className='pe-3 text-orange'>Breakfast Recipes</strong>You</h4>
                            <h6 className='d-flex d-md-none f-corner'><strong className='pe-3 text-orange'>Breakfast Recipes</strong>You</h6>
                            <h2 className='d-none d-lg-flex f-corner'>Can Use Everyday</h2>
                            <h4 className='d-none d-md-flex d-lg-none f-corner'>Can Use Everyday</h4>
                            <h6 className='d-flex d-md-none f-corner'>Can Use Everyday</h6>
                        </div>
                        <div className='d-flex pt-3'>
                            <div className='fs-2 text-orange align-items-center'>
                                <FaRegClock></FaRegClock>
                            </div>
                            <div className='ps-2 align-items-center pt-2'>
                                <h6 className='mb-0'>TIME</h6>
                                <p className='fw-light fst-italic'>5 mins</p>
                            </div>
                        </div>
                        <div className='d-flex pt-2'>
                            <div className='fs-2 text-orange align-items-center'>
                                <FaWallet></FaWallet>
                            </div>
                            <div className='ps-2 align-items-center pt-2'>
                                <h6 className='mb-0'>BUDGET</h6>
                                <p className='fw-light fst-italic'>Under $10</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;