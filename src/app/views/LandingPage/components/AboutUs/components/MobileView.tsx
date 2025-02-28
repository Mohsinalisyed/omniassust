'use client'
import { AboutUsData } from '@/app/components/Content';
import React from 'react'
import Slider from 'react-slick';
import { AboutUsCard } from './AboutusCard';
const MobileView = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className='w-full py-100 flex items-center justify-center md:hidden overflow-x-hidden pt-28 pb-52'>
            <div className='slider-styled-component-about-us'>
                <Slider {...settings}>
                    {
                        AboutUsData.map((item, index) => (
                            <div key={`${item.heading}${index}`}>
                                <AboutUsCard item={item} index={index} mobileView={true} />
                            </div>
                        ))
                    }
                </Slider>
            </div >

        </div >
    )
}

export default MobileView