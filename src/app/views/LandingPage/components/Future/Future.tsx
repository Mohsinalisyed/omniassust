import React from "react";
import FutureCard from "../FutureCard";

const Future = () => {
  return (
    <div id={"aboutus"} className="max-w-[846px] mx-auto px-4 md:px-0">
      <div className="w-full flex flex-col items-center">
        <div className="w-full pt-[240px] flex flex-col justify-center items-center gap-4 ">
          <h1 className="text-40">
            Built for the
            <span className="bg-text_gradient_one text-transparent bg-clip-text">
              {" "}
              Future{" "}
            </span>
          </h1>
          <p className="text-16 leading-5 text-center text-gray_two text-[16px] hidden md:block">
            Enterprise-grade technology powers every interaction
          </p>
        </div>
      </div>
      <FutureCard />
    </div>
  );
};

export default Future;
