import React from 'react'
import { FooterLogoIcon, TopArrowIcon } from '../Icons'
import { FooterData, FooterWebData, NavbarData } from '../Content'
import './style.css'
import Twitter from '@/app/svg/Twitter'
import Facebook from '@/app/svg/Facebook'
import Discord from '@/app/svg/Discord'
import Telegram from '@/app/svg/Telegram'
const Footer = () => {
    return (
      <div className="w-full relative overflow-hidden   pt-[200px]">
        <div className="bg-footer"></div>
        <div className="container flex flex-col justify-between py-8">
          <div className="flex justify-between">
            <div className="flex  flex-col w-full md:w-[522px]">
              <div className="mb-20 self-start flex items-center gap-4 text-[32px]">
                <FooterLogoIcon /> Omniassist.ai
              </div>

              <h1 className="text-[24px] leading-24 md:text-32 md:leading-9 text-gray_two font-medium mb-8 md:mb-14 md:max-w-full">
                Sign up for the newsletter and <br /> stay up-to-date on all
                things Omni
              </h1>
              <div className="flex flex-col gap-3 max-w-full">
                <h6 className="text-16 font-medium">Sign up for news</h6>
                <div className="rounded-[48px] h-12 relative mb-[40px]  max-h-12 p-1">
                  <input
                    type="text"
                    className="bg-[#ffffff3d] text-gray_two  inset-0 absolute w-full h-full rounded-[48px] border-none outline-none px-5 placeholder:text-gray_two"
                    placeholder="Email Address"
                    style={{ border: "1px solid rgba(255, 255, 255, 0.24)" }}
                  />
                  <button className="rounded-[40px] bg-orange absolute right-[4px] top-[4px] flex items-center justify-center text-16 text-white py-[12px] px-[25px] font-bold">
                    Submit
                  </button>
                </div>
              </div>
              <div className="hidden md:flex gap-8 md:mb-8">
                <Twitter />
                <Facebook />
                <Discord />
                <Telegram />
              </div>
              <div className="flex flex-row-reverse w-full justify-between md:hidden">
                <div className="md:hidden flex-col flex gap-4 md:mb-8 mr-6">
                  <Twitter />
                  <Facebook />
                  <Discord />
                  <Telegram />
                </div>
                <div className="flex flex-col md:hidden gap-4 justify-center mb-12">
                  <h5 className="font-bold text-20">Omni Network</h5>
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
          <div className=" flex flex-col gap-6 z-10 md:py-10 xl:py-0">
            <div
              className="border-t-[#FFFFFF66] border-t-[1px] w-full  mt-12 md:mt-0"
            />
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