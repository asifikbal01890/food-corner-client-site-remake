import React from 'react';
import AllTimeService from './AllTimeService/AllTimeService';
import Banner from './Banner/Banner';
import ExtraSection from './ExtraSection/ExtraSection';
import FoodSection from './FoodSection/FoodSection';
import NewProduct from './NewProduct/NewProduct';
import ServiceSection from './ServiceSection/ServiceSection';
import UpcomingEvents from './UpcomingEvent/UpcomingEvents';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FoodSection></FoodSection>
            <ServiceSection></ServiceSection>
            <ExtraSection></ExtraSection>
            <NewProduct></NewProduct>
            <UpcomingEvents></UpcomingEvents>
            <AllTimeService></AllTimeService>
        </div>
    );
};

export default Home;