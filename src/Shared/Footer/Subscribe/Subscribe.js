import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className='container mt-4 pt-5 pb-4'>
            <div className="text-center bg-transparent rounded border-color">
                <div className="grid row justify-content-between align-items-center px-xl-5 py-lg-5 py-4 mx-5 gap-4">
                    <h5 className="fs-2 f-corner text-white col-lg-4 px-0">Newsletter Subscribe</h5>
                    <input type="email" placeholder='Your email address' className="input-subscribe bg-transparent col-lg-5"/>
                    <button className="btn-orange text-white px-4 py-2 rounded-3 fw-semibold fs-5 col-lg-2">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;