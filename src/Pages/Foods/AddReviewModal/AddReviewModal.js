import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Rating } from 'react-simple-star-rating';
import { AuthContext } from '../../../Contexts/AuthProvider';

const AddReviewModal = ({ food, refetch }) => {

    const [rating, setRating] = useState(0);

    const { _id, name, img } = food;

    const { user } = useContext(AuthContext);

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'Unregistered';
        const userName = user?.displayName || 'Unknown';
        const picture = user?.photoURL || 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
        const text = form.text.value;

        const review = {
            id: _id,
            foodName: name,
            email,
            name: userName,
            rating,
            text,
            picture,
            img
        }
        console.log(review)

        if (!user) {
            return toast.error("Login First");
        }

        fetch('https://food-corner-server-site-remake.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
               toast.success('Successful');
                form.reset();
                refetch();
            }
        })
        .catch(e => console.error(e));
    
    }

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)

        // other logic
    }

    return (
        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header border-bottom-0">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <h4 className='text-start ps-5 ms-1'>Give Feedback</h4>
                        <p className='text-start ps-5 ms-1'>How would you rate this food?</p>
                        <form onSubmit={handleReview} >
                            <div>
                                <Rating onClick={handleRating} />
                            </div>
                            <div className='bg-body rounded  mt-4'>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label pe-4 me-1">Do you have any thoughts you'd like to share?</label>
                                    <textarea name='text' className="form-control form-control-lg mx-auto w-75" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    
                                </div>
                            </div>
                                <div className='mt-5'>
                                    <p className='text-start ms-5 ps-2'>May we follow you up on your feedback?</p>
                                <div className='d-flex ms-5 ps-2'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" for="flexRadioDefault1">
                                            Yes
                                        </label>
                                    </div>
                                    <div className="form-check ms-4">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            No
                                        </label>
                                    </div>
                                </div>
                                </div>
                                <div className='d-flex justify-content-center gap-3 w-75 mx-auto mb-5 mt-3'>
                                    <button type="submit" className='btn-orange text-white border rounded py-2 fw-semibold mt-4 w-100'>Send</button>
                                    <button type="reset" className='btn btn-outline-light text-black border py-2 fw-semibold mt-4 w-100'>Cancel</button>
                                </div>
                        </form >
                    </div>
                </div>
            </div>
        </div>


    );
};

export default AddReviewModal;