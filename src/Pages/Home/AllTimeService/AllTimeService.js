import React from 'react';
import globally from '../../../img/ShopGlobally.png';
import reduction from '../../../img/resuction.png';
import timeService from '../../../img/24service.png';
import money from '../../../img/money.png';
import TimeService from './TimeService';

const AllTimeService = () => {

    const items = [
        {
            id: '01',
            header: 'Shop Globally',
            paragraph: 'Dropship worldwide',
            img: globally
        },
        {
            id: '02',
            header: 'Items Reduction',
            paragraph: 'Save big every order',
            img: reduction
        },
        {
            id: '03',
            header: '24/7 Service',
            paragraph: 'One on one support',
            img: timeService
        },
        {
            id: '04',
            header: 'Return Money-Back',
            paragraph: 'Cancel order anytime',
            img: money
        }
    ]
    return (
        <div className='bg-section py-5'>
            <div className='row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 my-4 container mx-auto'>
                {
                    items.map(item => <TimeService
                        key={item.id}
                        item={item}
                    ></TimeService>)
                }
            </div>
        </div>
    );
};

export default AllTimeService;