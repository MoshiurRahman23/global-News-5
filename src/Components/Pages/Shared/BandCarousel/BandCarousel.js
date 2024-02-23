import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Band1 from '../../../../Assets/1.png';
import Band2 from '../../../../Assets/2.png';

const BandCarousel = () => {
    return (
        <div>
            <h1>BandCarousel</h1>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Band1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Band2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default BandCarousel;