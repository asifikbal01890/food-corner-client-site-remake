import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {header, img, describe} = service;
    return (
            <div data-aos="fade-up" className="col">
                <div className="card bg-transparent border-0">
                    <img src={img} className="card-img-top w-service-img mx-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title my-3 fs-4 fw-bolder f-corner"><Link to={'/foods'}><button className='service-btn border-0 bg-transparent'>{header}</button></Link></h5>
                        <p className="card-text">{describe}</p>
                    </div>
                </div>
            </div>
    );
};

export default Service;