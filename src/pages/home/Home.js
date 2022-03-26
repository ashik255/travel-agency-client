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
            <Services></Services>
            <br />
            <Hotels></Hotels>
            <br />
            <Contact></Contact>
            </Container>
        </div>
    );
};

export default Home;