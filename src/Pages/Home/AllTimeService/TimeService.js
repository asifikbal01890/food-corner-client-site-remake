import React from 'react';
import './TimeService.css';

const TimeService = ({item}) => {
    const {header, img, paragraph} = item
    return (
        <div data-aos="fade-up" className="col">
        <div className="card bg-transparent border-0 text-center">
            <img src={img} className="card-img-top w-time mx-auto" alt="..." />
            <div className="card-body">
                <h5 className="card-title my-3 fs-4 fw-bolder f-corner">{header}</h5>
                <p className="card-text">{paragraph}</p>
            </div>
        </div>
    </div>
    );
};

export default TimeService;