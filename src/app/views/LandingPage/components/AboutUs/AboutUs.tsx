import React from 'react'
import { AzureIcon, TwilioIcon, EthIcon } from '@/app/components/Icons'
import { AboutUsData } from '@/app/components/Content'
import AboutUsSection from './components/AboutusCard'
const AboutUs = () => {
    return (
      <div id={"aboutus"} className="max-w-[846px] mx-auto pt-[0px] md:pt-[10vh] px-4 md:px-0">
        <div className="w-full flex flex-col items-center">
          <div className="flex  items-center justify-between flex-wrap w-full">
            <TwilioIcon />
            <AzureIcon />
            <EthIcon />
          </div>
          <div className="w-full max-w-[1070px] pt-[120px] pb-[40px] md:pt-[136px] md:pb-[64px] flex flex-col justify-center items-center gap-4 ">
            <h1 className="heading-font">
              Why{" "}
              <span className="bg-text_gradient_one text-transparent bg-clip-text">
                Traditional Support
              </span>{" "}
              Falls Short
            </h1>
            <p className="text-16 leading-5 text-center text-gray_two text-[16px]">
              Modern businesses face critical challenges with conventional
              support systems
            </p>
          </div>
        </div>
        <AboutUsSection AboutUsData={AboutUsData} />
      </div>
    );
}

export default AboutUs