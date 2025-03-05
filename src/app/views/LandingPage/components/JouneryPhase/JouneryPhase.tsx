import React from 'react'
import PhaseSlider from './component/PhaseSlider';

    
const JouneryPhase = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto'>
      <div id={"aboutus"} className="w-full max-w-[846px] mx-auto mb-[80px] px-4 md:px-0">
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex flex-col justify-center items-center gap-4 ">
            <h1 className="heading-font">
              Our
              <span className="bg-text_gradient_one text-transparent bg-clip-text">
                {" "}
                Journey{" "}
              </span>
              Forward
            </h1>
            <p className="text-16 leading-5 text-center text-gray_two text-[16px]">
              A clear path to revolutionizing customer support{" "}
            </p>
          </div>
        </div>
      </div>
      <PhaseSlider />
    </div>
  );
}

export default JouneryPhase