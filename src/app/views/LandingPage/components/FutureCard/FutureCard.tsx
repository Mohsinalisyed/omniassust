import LeftLines from '@/app/svg/LeftLine/LeftLines';
import Image from 'next/image';
import React from 'react'
import img from '../../../../assets/images/ai-integration.png'
import SecurityGrade from '@/app/svg/SecurityGrade';
import BottomScreen from '@/app/svg/BottomScreen/BottomScreen';
import Display from '@/app/svg/Display/Display';
import TopSide from '@/app/svg/BlockChianBox/TopSide';
import RightSide from '@/app/svg/BlockChianBox/RightSide';
import LeftSide from '@/app/svg/BlockChianBox/LeftSide';
import CubeRightMost from '@/app/svg/BlockChianBox/CubeRightMost';
import './style.css'
import BackgroundGardientColor from '@/app/components/BackgroundGardientColor';
const FutureCard = () => {
  return (
    <div>
      <div id={"FutureCard"} className="xl:min-h-screen w-full py-[120px]">
        <div className="flex items-center flex-col justify-between relative md:flex-row">
          <div className="hidden  md:block">
            <div className="relative w-[40%]">
              <Image
                src={img}
                alt=""
                className="absolute top-24 left-[118px]"
              />
              <LeftLines />
            </div>
            <div className="absolute top-[40%] left-10">
              <BackgroundGardientColor />
            </div>
          </div>
          <div className="w-full md:w-[60%] flex justify-center items-center flex-col relative right-0 md:right-[-20%] md:absolute">
            <p className="text-[40px] ml-[-16px] text-gray_two text-center">
              Advanced AI Integration
            </p>
            <ul className="list-disc list-bullets text-gray_two text-[16px]">
              <li>Natural Language Processing</li>
              <li>Predictive Analytics</li>
              <li>Personalized Learning</li>
              <li>Continuous Improvement</li>
            </ul>
          </div>
        </div>
      </div>
      <div id={"FutureCard"} className="xl:min-h-screen w-full py-[120px]">
        <div className=" w-full flex items-center justify-between relative">
          <div className="flex flex-col items-center w-full md:block">
            <p className="text-[40px] ml-[-16px] text-gray_two text-center md:text-start">
              Enterprise-Grade Security
            </p>
            <ul className="list-disc list-bullets text-gray_two text-[16px]">
              <li>Smart Contract Audits</li>
              <li>End-to-End Encryption</li>
              <li>Multi-Factor Authentication</li>
              <li>Real-Time Monitoring</li>
            </ul>
          </div>
          <div className="hidden  md:block">
            <div className="w-[434px] h-[491px] absolute right-[-120px] top-[40px]">
              <div className="relative">
                <div className="absolute top-[15%] left-0 z-[-1]">
                  <BackgroundGardientColor />
                </div>
                <div className="absolute top-[50%] left-24 z-[-1]">
                  <BackgroundGardientColor />
                </div>
                <div className="absolute top-[-140px] left-[180px]">
                  <Display />
                </div>
                <div className="absolute pl-8 pt-4">
                  <BottomScreen />
                </div>
                <SecurityGrade />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={"FutureCard"} className="xl:min-h-screen w-full py-[120px]">
        <div className="flex items-center justify-between relative">
          <div className="hidden  md:block">
            <div className="absolute left-[-60px]">
              <div className="relative">
                <div className="absolute left-[-65px]">
                  <LeftSide />
                </div>
                <div className="absolute top-[-160px]">
                  <TopSide />
                </div>
                <div className="absolute top-[0px] left-[120px]">
                  <RightSide />
                </div>
                <div>
                  <CubeRightMost />
                </div>

                <div className="absolute left-[-150px] top-[230px] animate-position">
                  <div className="absolute top-[0%] left-24 z-[10]">
                    <BackgroundGardientColor />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-auto  md:max-w-[521px] relative flex flex-col items-center md:block md:absolute right-0 top-[20px]">
            <p className="text-[40px] ml-[-16px] text-gray_two text-center">
              Blockchain Powered
            </p>
            <ul className="list-disc list-bullets text-gray_two text-[16px]">
              <li>Smart Contract Security</li>
              <li>Layer 2 Scalability</li>
              <li>Transparent Operations</li>
              <li>Immutable Records</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureCard