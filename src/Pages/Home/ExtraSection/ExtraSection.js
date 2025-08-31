import React from 'react';

const ExtraSection = () => {
    return (
        <div>
            <div className='container my-5 py-5'>
                <div className="mb-3">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src="https://img.freepik.com/premium-vector/chef-cooker-man-cooking-kitchen-restaurant-vector-illustration_605517-170.jpg?w=826" className="w-75" alt="..." />
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="card-body">
                                <h1 className='f-corner'>HEllO!</h1>
                                <h2>I am <strong className='f-corner text-orange'>Peter Parker</strong></h2>
                                <p className="card-text">We can say that a chef is an all-in-all person who manages restaurant matters diligently. From deciding the menu of the restaurant to buying the food supplies and managing the food preparation, a chef ensures that visitors and guests receive the best cuisines.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container my-5 py-5'>
                <div className="mb-3">
                    <div className="flex-md-row row g-0 flex-column-reverse ">
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="card-body">
                                <h1 className='f-corner'>KNOW!</h1>
                                <h2>Benefits of <strong className='f-corner text-orange'>Healthy Food</strong></h2>
                                <p className="card-text">Healthy food does not have merely one but numerous benefits. It helps us in various spheres of life. Healthy food does not only impact our physical health but mental health too. When we intake healthy fruits and vegetables that are full of nutrients, we reduce the chances of diseases.</p>

                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="https://img.freepik.com/free-vector/healthy-vs-unhealthy-food-flat-illustration_74855-18384.jpg?w=996&t=st=1668060385~exp=1668060985~hmac=fa5e4ae8db1fdf4279d955734d4210139f1589ff36fe4fedf541526c0567ff79" className="w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;