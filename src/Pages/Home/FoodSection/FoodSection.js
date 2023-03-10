import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import FoodsCard from '../../Foods/FoodsCard/FoodsCard';

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
                    foodItems.map(foodItem => <FoodsCard
                        key={foodItem.id}
                        foodItem={foodItem}
                    ></FoodsCard>)
                }
                <Link to={`/foods/`} className='text-decoration-none'>
                <div className='d-flex justify-content-center'>
                    {/* <Link to={'/foods'}><button type="button" className="btn btn-outline-light text-black border fs-5 fw-semibold px-5 pb-2 rounded-2">See All <FaArrowRight></FaArrowRight> </button></Link> */}
                    <div className="col">
                        {/* data-aos="zoom-in-down" */}
                        <div className='card-div'>
                            <div className="card">
                                <img src='https://img.freepik.com/free-photo/fried-fish-carp-fresh-vegetable-salad-wooden-table-flat-lay-top-view_2829-19929.jpg?w=1380&t=st=1667943455~exp=1667944055~hmac=bd52719294c5b7c8b0c995f30a13d886b637d3279d6915e6747bf41e87b7ce21' className="card-img-top" alt="..." />
                            </div>
                            <div className='button-div d-flex justify-content-end align-items-end'>
                                <div className='button-group d-flex justify-content-center align-items-center gap-4'>
                                  
                                    <div><button className='icon-button d-flex justify-content-center align-items-center border-0 text-black'>10 + More</button></div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body d-flex justify-content-between my-2">
                            <h5 className="card-title fw-bolder text-orange fs-4">Fried Fish</h5>
                            <p className='fw-semibold fs-5'><span className='pe-2'></span>$26</p>
                        </div>
                        <div></div>
                    </div>
                </div>
                </Link>
            </div>
        </div>
    );
};

export default FoodSection;