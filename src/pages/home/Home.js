import React from 'react';
import Contact from '../../contact/Contact';
import Carosel from '../carosel/Carosel';
import Hotels from '../hotel/Hotels';
import Services from '../services/Services';
const Home = () => {
    return (
        <div id='home'>
            <Carosel></Carosel>
            <h2 className='m-4'>Top Destinations</h2>
            <Services></Services>
            <Hotels></Hotels>
            <br />
            <Contact></Contact>
        </div>
    );
};

export default Home;