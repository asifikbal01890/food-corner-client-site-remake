import React from 'react';
import quality from '../../../img/quality.png';
import superTaste from '../../../img/super.png';
import delivery from '../../../img/delivery.png';
import Service from './Service';

const ServiceSection = () => {

    const services = [
        {
            id: '01',
            header: 'Quality Food',
            img: quality,
            describe: 'We take great pride in serving high-quality, fresh ingredients in all of our dishes to ensure a memorable dining experience for our guests.'
        },
        {
            id: '02',
            header: 'Super Taste',
            img: superTaste,
            describe: 'Our food is known for its exceptional flavors and culinary expertise, creating dishes that will tantalize your taste buds and leave you wanting more.'
        },
        {
            id: '03',
            header: 'Fast Delivery',
            img: delivery,
            describe: 'At our service, we prioritize efficiency and promptness in our delivery service to ensure your food arrives fresh and hot at your doorstep in record time.'
        }
    ]

    return (
        <div className='bg-section p-service'>
            <div className='text-center container'>
                <h2 className='text-orange fw-bold f-corner'>Our Amazing Services</h2>
                <p>Get a 40% discount on your next feast by watching this video</p>
                <div className='row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 mt-5'>
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;