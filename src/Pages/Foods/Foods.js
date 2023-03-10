import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FoodsCard from './FoodsCard/FoodsCard';

const Foods = () => {

    const foodItems = useLoaderData();

    return (
        <div className='my-5 py-5 container text-center'>
        <h1 className='f-corner text-orange'>Welcome to our Foods Container</h1>
        <p className='f-corner fs-5 pb-4'>All the foods here is prepared by me. I hope you like it</p>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
            {
                foodItems.map( foodItem => <FoodsCard
                    key={foodItem.id}
                    foodItem={foodItem}
                ></FoodsCard>)
            }
        </div>
    </div>
    );
};

export default Foods;