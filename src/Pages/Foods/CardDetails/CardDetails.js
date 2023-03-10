import React from 'react';
import { useQuery } from 'react-query';
import { useLoaderData } from 'react-router-dom';
import AddReviewModal from '../AddReviewModal/AddReviewModal';
import FoodReview from './FoodReview/FoodReview';

const CardDetails = () => {

    const food = useLoaderData();
    const id = food._id;

    const { data: reviews = [id], refetch } = useQuery({
        queryKey: ['reviews', id],
        queryFn: async () => {
            const res = await fetch(`https://food-corner-server-site-remake.vercel.app/reviews/${id}`)
            const data = await res.json();
            console.log(data);
            return data;
        }
    })


    console.log(reviews);

    return (
        <div className='container mt-5 text-center'>
            <div>
                <h1 className='f-corner'><span className='text-orange'>Food</span> Corner</h1>
                <p className='f-corner'>Your order is delivered within <span className='fs-5 text-orange'>30</span> minutes</p>
            </div>
            <div className='w-75 mx-auto'>
                <img className='w-75 rounded-4' src={food.img} alt="" />
                <h2 className='f-corner pt-4 text-orange'>{food.name}</h2>
                <p>{food.description}</p>
                <div>
                    <p>Price - ${food.price}</p>
                    <p></p>
                </div>
                <button className='btn-orange text-white fs-4 fw-semibold px-5 pb-2 rounded-5'>Order Now</button>
            </div>
            <div className='mt-5 border rounded-3 pt-4'>
                <div>
                    <h3 className='f-corner'>Review & More</h3>
                </div>
                <div className='pt-4'>
                    {
                        reviews ?
                            <>
                                {
                                    reviews.map(review => <FoodReview
                                        key={review._id}
                                        review={review}                                       
                                    ></FoodReview>)
                                }
                            </>
                            :
                            <>
                                <div className=''>No review for this item</div>
                            </>
                    }
                    <div className='my-5 pt-4'>
                        <a className="btn-orange text-white px-4 py-2 rounded fs-5 text-decoration-none fw-semibold" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Rating Us</a>
                        <AddReviewModal
                            key={food._id}
                            food={food}
                            refetch={refetch}
                        ></AddReviewModal>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default CardDetails;