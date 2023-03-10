import React from 'react';
import { ConfirmToast } from 'react-confirm-toast';
import StarRatings from 'react-star-ratings';
import { MdDeleteForever } from "react-icons/md";
import './NewReview.css';

const NewReview = ({ review, handleRemove }) => {
    const { text, img, rating, foodName, _id } = review;

    return (
        <div className="card mb-3 container my-4">
            <div className="row g-0">
                <div className="col-lg-2 col-4">
                    <img src={img} className="size m-3" alt="..." />


                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{foodName}</h5>
                        <p className="card-text">{text}</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                <div className='col-lg-2 col-md-3'>
                    <div className='d-grid gap-3 my-2 text-end'>

                        <div className='row-md-1'>
                            <StarRatings
                                rating={rating}
                                starRatedColor="orange"
                                starDimension="25px"
                                starSpacing="2px"
                            />
                        </div>
                        <div className='row-md-1'>
                            <ConfirmToast
                                asModal={true}
                                customCancel={'No'}
                                customConfirm={'Yes'}
                                customFunction={() => handleRemove(_id)}
                                message={'Do you want to delete?'}
                                position={'top-left'}
                                showCloseIcon={false}
                                theme={'snow'}
                            >
                                <button className='delete-button'><MdDeleteForever></MdDeleteForever></button>

                            </ConfirmToast>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div data-aos="fade-up" className='w-75 mx-auto'>
        //     <div className="mb-3 w-75 mx-auto">
        //         <div className="row g-0 shadow p-3 mb-5 bg-body rounded">
        //             <div className="col-md-2">
        //                 <img src={user.photoURL} className="w-user rounded-circle" alt="..." />
        //                 <h5 className='fw-bolder pt-2'>{name}</h5>
        //             </div>
        //             <div className="col-md-10">
        //                 <h4 className='fw-bold'>{foodName}</h4>
        //                 <p className="card-text fw-semibold">{text}</p>

        //             </div>
        //             <div className='d-flex justify-content-between'>
        //                 <div>
        //                     <ConfirmToast
        //                         asModal={true}
        //                         customCancel={'No'}
        //                         customConfirm={'Yes'}
        //                         customFunction={() => handleRemove(_id)}
        //                         message={'Do you want to delete?'}
        //                         position={'top-left'}
        //                         showCloseIcon={false}
        //                         theme={'snow'}
        //                     >
        //                         <button className='btn-orange text-white fs-5 fw-semibold px-5 py-2  rounded-2'>Delete</button>
        //           
        //                     </ConfirmToast>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default NewReview;