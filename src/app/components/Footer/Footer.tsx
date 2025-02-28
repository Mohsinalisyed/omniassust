import React from 'react'
import { FooterLogoIcon, TopArrowIcon } from '../Icons'
import { FooterData, FooterWebData, NavbarData } from '../Content'
import './style.css'
const Footer = () => {
    return (
      <div className="w-full relative overflow-hidden  bg-footer pt-[200px]">
        <div className="container flex flex-col justify-between py-8">
          <div className="flex justify-between">
            <div className="flex  flex-col w-full md:w-auto">
              <div className="mb-20 self-start flex items-center gap-4">
                <FooterLogoIcon /> Omniassist.ai
              </div>

              <h1 className="text-14 leading-4 md:text-32 md:leading-9 max-w-[60%] font-medium mb-8 md:mb-14 md:max-w-full">
                Sign up for the newsletter and <br />
                stay up-to-date on all things Omni
              </h1>
              <div className="flex flex-col gap-3">
                <h6 className="text-16 font-medium">Sign up for news</h6>
                <div className="rounded-[48px] h-12 relative mb-[40px]  max-h-12 p-1">
                  <input
                    type="text"
                    className="bg-transparent  inset-0 absolute w-full h-full rounded-[48px] border-none outline-none px-5"
                    placeholder="Email Address"
                    style={{ border: "1px solid rgba(255, 255, 255, 0.24)" }}
                  />
                  <button className="rounded-[40px] bg-orange absolute right-[2px] flex items-center justify-center text-16 text-white py-[14px] px-6 font-bold top-[2px]">
                    Submit
                  </button>
                </div>
              </div>
              <div className="flex flex-col md:hidden gap-8 justify-center mb-12">
                {FooterData.map((item, index) => (
                  <a
                    href={item.id}
                    className="text-gray_two text-16 font-medium"
                    key={`${item.id}${index + 2}`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden items-start justify-end flex-col gap-4  md:flex mb-[40px]">
              <h5 className="font-bold text-20 mb-10">Omni Network</h5>
              {FooterWebData.map((item, index) => (
                <a
                  href={item.id}
                  className="text-gray_two text-16 font-medium"
                  target={
                    index + 1 === NavbarData.length ? "_blank" : undefined
                  }
                  key={`${item.id}${index + 2}`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 z-10 md:py-10 xl:py-0">
            <div className="border-gray_four border-[1px] w-full  mt-12 md:mt-0" />
            <div className="w-full flex flex-col gap-5 md:flex-row justify-between items-center">
              <p className="text-gray_two text-16 font-medium">
                Omniassist.ai 2025
              </p>
              <div className="hidden gap-6 items-center md:flex">
                <p className="text-gray_two text-16 font-medium">
                  Privacy Policy
                </p>
                <div className="bg-gray_two w-2 h-2 rounded-full" />
                <p className="text-gray_two text-16 font-medium">
                  Terms of Use
                </p>
              </div>
              <a
                href={"#home"}
                className="flex items-center gap-1 no-underline"
              >
                <TopArrowIcon />
                <p className="text-16 font-medium">Back to Top</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Footer