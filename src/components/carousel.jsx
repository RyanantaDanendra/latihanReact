import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
    const settings = {
        dots : false,
        infinite : false,
        speed : 500,
        slideToShow : 1,
        slideToScroll : 1,
    };

    return (
        <Slider {...settings}>
            <div className="image">
                <h1>Image 1</h1>
            </div>
            <div className="image">
                <h1>Image 2</h1>
            </div>
            <div className="image">
                <h1>Image 2</h1>
            </div>
        </Slider>
    )
}

export default Carousel;