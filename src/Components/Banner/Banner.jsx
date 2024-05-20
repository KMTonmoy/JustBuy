import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

const Banner = () => {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch('bannerData.json')
            .then(response => response.json())
            .then(data => {
                const mappedSlides = data.map(photo => ({
                    image: photo.url,
                    text: photo.title
                }));
                setSlides(mappedSlides);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='container px-6 py-10 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Slide image={slide.image} text={slide?.text} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Banner;
