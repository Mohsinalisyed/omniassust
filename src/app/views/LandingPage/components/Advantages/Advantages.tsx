import React from "react";
import { AdvantagesData } from "@/app/components/Content";
import AboutUsSection from "../AboutUs/components/AboutusCard";
const Advantages = () => {
  return (
    <div id={"aboutus"} className="max-w-[846px] mx-auto px-4 md:px-0">
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-[1070px] py-[100px] flex flex-col justify-center items-center gap-4 ">
          <h1 className="text-40 text-center">
            The Omniassist
            <span className="bg-text_gradient_one text-transparent bg-clip-text">
              {" "}
              Advantage
            </span>
          </h1>
          <p className="text-16 leading-5 text-center text-gray_two text-[16px] hidden md:block">
            A comprehensive suite of next-generation support tools
          </p>
        </div>
      </div>
      <AboutUsSection AboutUsData={AdvantagesData} />
    </div>
  );
};

export default Advantages;
