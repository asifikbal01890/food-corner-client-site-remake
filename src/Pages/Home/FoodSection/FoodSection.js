import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import FoodsCard from '../../Foods/FoodsCard/FoodsCard';
import { FaLongArrowAltRight } from 'react-icons/fa';

const FoodSection = () => {
    const foodItems = useLoaderData();
    console.log(foodItems)
    return (
        <div className='container my-5 py-5'>
            <div>
                <h1 className='f-corner text-orange text-center'>Homemade Healthy & Testy foods</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5">
                {
                    foodItems.slice(0, 5).map(foodItem => <FoodsCard
                        key={foodItem.id}
                        foodItem={foodItem}
                    ></FoodsCard>)
                }
                <div className='container mt-3'>
                    {
                        <Link to={`/foods/`} className='text-decoration-none row row-cols-2'>
                            {
                                foodItems.slice(0, 4).map(foodItem => <div className='col my-2' key={foodItem.id}>
                                    <img className='w-100 h-100' src={foodItem.img} alt={foodItem.name} />

                                </div>)
                            }
                        </Link>
                    }
                    <Link to={`/foods/`} className='text-decoration-none'>
                        <div className="card-body d-flex justify-content-between">
                            <button className='fw-bolder text-orange fs-4 border-0 bg-transparent d-flex align-items-center gap-2 mt-n'>See All <FaLongArrowAltRight className='mt-1' /></button>
                            <p className='fw-semibold text-black fs-5'>10+</p>
                        </div>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodSection;