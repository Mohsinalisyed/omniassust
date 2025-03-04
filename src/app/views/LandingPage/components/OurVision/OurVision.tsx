import React from 'react'
import img from '../../../../assets/images/visionimg.png'
import Image from 'next/image';
import './style.css'
import BackgroundGardientColor from '@/app/components/BackgroundGardientColor';
import GlobalBorderGradient from '@/app/svg/GlobalBorderGradient';
const OurVision = () => {
    return (
      <div className="md:h-[70vh] pt-[200px]">
        <div className="container flex justify-center items-center">
          <div className="max-w-[1064px] relative overflow-hidden bg-vision flex justify-between w-full bg-no-repeat bg-cover bg-left gap-10  rounded-[8px] flex-col md:flex-row">
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
                <button className="h-[40px] relative top-[-5px] min-w-[155px]   px-1 bg-orange text-white text-14  text-center rounded-[40px] shadow-[0px_2px_12px_0px_#0101013D">
                  <div className="absolute"></div>
                  Start Your AI Journey
                </button>
                <button className="h-[40px] min-w-[155px] pb-[5px] px-1 relative   text-white text-14  text-center rounded-[40px] shadow-[0px_2px_12px_0px_#0101013D">
                  <div className="absolute top-[-5px]">
                    <GlobalBorderGradient />
                  </div>
                  Join The Waitlist
                </button>
                <button className="h-[40px] min-w-[155px] pb-[5px] px-1 relative   text-white text-14  text-center rounded-[40px] shadow-[0px_2px_12px_0px_#0101013D">
                  <div className="absolute top-[-5px]">
                    <GlobalBorderGradient />
                  </div>
                  Read Docs
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