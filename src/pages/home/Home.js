import React from 'react';
import { Container } from 'react-bootstrap';
import Carosel from '../carosel/Carosel';
import Contact from '../contact/Contact';
import Hotels from '../hotel/Hotels';
import Services from '../services/Services';
const Home = () => {
    return (
        <div id='home'>
            <Carosel></Carosel>
            <Container>
            <h2 className='m-4'>Top Destinations</h2>
            <Services></Services>
            <Hotels></Hotels>
            <br />
            <Contact></Contact>
            </Container>
        </div>
    );
};

export default Home;