import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerOne from './../../images/banner-1.jpg';
import bannerTwo from './../../images/banar-2.jpg'
// import bannerThree from './../../images/banner-3.jpg'

const Carosel = () => {
    return (
        <div style={{ height: '100vh', overflow: 'hidden' }}>


            <Carousel fade >
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={bannerOne}
                        alt="First slide"
                    />
                    <div className='pt-15'>
                        <Carousel.Caption className='text-dark'>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-75"
                        src={bannerTwo}
                        alt="Second slide"
                    />
                    <Carousel.Caption className='text-dark'>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        // src={bannerThree}
                        src="https://www.designhill.com/design-blog/wp-content/uploads/2017/08/Advance.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption className='text-dark'>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default Carosel;