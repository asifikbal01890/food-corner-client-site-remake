import React from 'react';
import { Outlet } from 'react-router-dom';
import AnotherNav from '../Shared/AnotherNav/AnotherNav';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <AnotherNav></AnotherNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;