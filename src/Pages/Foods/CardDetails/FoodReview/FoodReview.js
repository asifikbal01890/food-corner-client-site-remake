import React from 'react';
import StarRatings from 'react-star-ratings';
import './FoodReview.css'

const FoodReview = ({ review }) => {

    const { name, date, picture, text, rating } = review;

    const rate = rating;

    return (
        <div data-aos="fade-up">
            <div className="mb-3 w-75 mx-auto">
                <div className="row g-0 shadow p-3 mb-5 bg-body rounded">
                    <div className="col-md-2">
                        <img src={picture} className="w-user rounded-circle" alt="..." />
                        <h5 className='fw-Semibold pt-2'>{name}</h5>
                    </div>
                    <div className="col-md-10">
                        <p className="card-text pt-4 fw-semibold">{text}</p>
                        <div className='d-flex justify-content-between'>
                            <p className="card-text"><small className="text-muted">{date}</small></p>
                            {/* <p className='text-orange'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></p> */}
                            <p className='text-orange'>
                                <StarRatings
                                    rating={rate}
                                    starRatedColor="orange"
                                    starDimension="25px"
                                    starSpacing="2px"
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodReview;