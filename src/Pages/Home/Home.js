import React from 'react';
import Banner from './Banner';
import Manufacture from './Manufacture';
import Service from './Service';
import './Home.css';
import BusinessSummary from './BusinessSummary';
import Global from './Global';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Tools from '../Tools/Tools';

const Home = () => {
    return (
        <div className='home object-cover'>
            <Banner/>
            <Manufacture/>
            <Tools/>
            <BusinessSummary/>
            <Service/>
            <Global/>
            <Testimonials/>
            <Contact/>
        </div>
    );
};

export default Home;