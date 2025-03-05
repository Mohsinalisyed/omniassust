"use client";

import GradientBorder from "@/app/svg/GradientBorder";
import "./style.css";
import CursorBox from "@/app/hooks/CursorBox";

const HeroSection = () => {
  return (
    <>
      <div className="relative w-full max-w-[1920px] min-h-screen mx-auto overflow-hidden">
        <div className="hero-bg-image"></div>
        <section
          id="home"
          className="md:pt-[144px] pt-[129px] px-4 md:px-0 absolute"
        >
          <div className="grid-container hidden md:grid">
            <CursorBox />
            {/* Create grid items */}
            {[...Array(1000)].map((_, index) => (
              <div key={index} className="grid-box"></div>
            ))}
          </div>
          <div className="min-h-[90vh] w-full h-full relative flex justify-center items-center z-[102]">
            <div className="flex flex-col max-w-[1063px] items-center min-h-[398px] pb-10 md:pb-0">
              <div className="relative">
                <div className="absolute top-[-5px]">
                  <GradientBorder />
                </div>
                <div className="service-border-gradient ">
                  Service Revolution
                </div>
              </div>

              <div className="text-gray_two text-40 md:text-[56px] text-center mt-[40px] mb-[24px] leading-[44px] md:leading-[61px]">
                Transforming CSaaS with{" "}
                <span className="bg-text_gradient_one text-transparent bg-clip-text">
                  AI
                </span>
                <span className="text-gray_two">,</span>
                <br />
                <span className="text-orange">Blockchain</span>, and{" "}
                <span className="text-orange">Multi-Channel</span> <br />{" "}
                Innovation
              </div>
              <p className="text-center text-gray_two text-[16px]">
                Revolutionize business interactions through automation,
                blockchain security, and token-based incentives. Our AI-powered
                platform enhances customer engagement while ensuring data
                integrity.
              </p>
              <div className="flex justify-center mt-[40px] gap-4">
                <button className="h-[44px] min-w-[152px]  bg-orange text-white text-16  text-center rounded-[40px] shadow-[0px_2px_12px_0px_#0101013D] hover:bg-orange_hover">
                  Join Now
                </button>
                <div className="relative">
                  <button className="h-[44px] min-w-[152px] border-mask hover:bg-gray_five">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
