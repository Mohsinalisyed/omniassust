import React from 'react'
import img from '../../../../assets/images/visionimg.png'
import Image from 'next/image';
import './style.css'
import BackgroundGardientColor from '@/app/components/BackgroundGardientColor';
import Documentaion from '@/app/svg/Documentation';

const OurVision = () => {
    return (
      <div className="pt-[160px] md:pt-[360px]">
        <div className="container flex justify-center items-center">
          <div className="border-mask p-4 max-w-[1064px] relative overflow-hidden bg-vision flex justify-between w-full bg-no-repeat bg-cover bg-left gap-10  rounded-[12px] flex-col md:flex-row">
            <BackgroundGardientColor />
            <div className=" py-12 max-w-[482px] z-10">
              <h3 className="text-24 md:text-24 font-medium pb-4 text-gray_two">
                Begin Your Support Evolution
              </h3>
              <p className="text-14 leading-5 pb-6 text-gray_two">
                Join thousands of businesses transforming their customer
                experience with AI-powered innovation.
              </p>
              <div className="flex flex-col gap-4 justify-between md:flex-row">
                <button className="h-[40px] relative top-[-5px] min-w-[155px]   px-1 bg-orange text-white text-14  text-center rounded-[40px] shadow-[0px_2px_12px_0px_#0101013D hover:bg-orange_hover">
                  <div className="absolute"></div>
                  Start Your AI Journey
                </button>
                <button className="h-[40px] min-w-[155px] border-mask hover:bg-gray_five">
                  Join The Waitlist
                </button>
                <button className="h-[40px] min-w-[155px] flex items-center gap-1 justify-center border-mask hover:bg-gray_five">
                  <Documentaion /> Read Docs
                </button>
              </div>
            </div>
            <div className="vision-img">
              <Image src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
}

export default OurVision