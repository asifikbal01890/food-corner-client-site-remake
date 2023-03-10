import React from 'react';
import { Link } from 'react-router-dom';
import './EventCard.css'

const EventCard = ({ blog }) => {
    const { eventDate, eventMonth, header, posterName, _id } = blog;
    return (
        <div data-aos="fade-left">
            <div className="card mb-3 border-0 bg-transparent">
                <div className="card-body text-center">
                    <div className='w-event bg-danger mx-auto text-white d-flex align-items-center justify-content-center'>
                    <div className='text-white'>
                        <h3 className='mb-0'>{eventDate}</h3>
                        <h5>{eventMonth}</h5>
                    </div>
                    </div>
                    <Link to={`/blog/${_id}`} className='text-decoration-none text-event'><h2 className="card-title mt-5">{header}</h2></Link>
                    <p className="card-text mt-3"><small className="text-muted">
                        <div className='d-flex justify-content-center align-items-center gap-2 text-uppercase'>
                            <p className='fw-semibold'>SUB CATEGORY 1</p>
                            <p>|</p>
                            <p className='fw-semibold'>Post by {posterName}</p>
                        </div>
                        </small></p>
                </div>
            </div>
        </div>
    );
};

export default EventCard;