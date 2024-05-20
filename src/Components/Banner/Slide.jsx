import React from 'react';

const Slide = ({ image, text }) => {
    return (
        <div className="swiper-slide">
            <img src={image} alt={text} className="w-full h-[600px]" />
            <div className="swiper-text">{text}</div>
        </div>
    );
};

export default Slide;
