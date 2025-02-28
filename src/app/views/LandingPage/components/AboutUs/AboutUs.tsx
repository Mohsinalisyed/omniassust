import React from 'react'
import { AzureIcon, TwilioIcon, EthIcon } from '@/app/components/Icons'
import { AboutUsData } from '@/app/components/Content'
import AboutUsSection from './components/AboutusCard'
const AboutUs = () => {
    return (
      <div id={"aboutus"} className="max-w-[846px] mx-auto px-4 md:px-0">
        <div className="w-full flex flex-col items-center">
          <div className="flex  items-end justify-between flex-wrap w-full">
            <TwilioIcon />
            <AzureIcon />
            <EthIcon />
          </div>
          <div className="w-full max-w-[1070px] py-[100px] flex flex-col justify-center items-center gap-4 ">
            <h1 className="text-40 text-center">
              Why{" "}
              <span className="bg-text_gradient_one text-transparent bg-clip-text">
                Traditional Support
              </span>{" "}
              Falls Short
            </h1>
            <p className="text-16 leading-5 text-center text-gray_two text-[16px] hidden md:block">
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