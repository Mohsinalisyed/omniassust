'use client'
import { cn } from '@/lib/utils';
import { IAboutUsData } from '@/app/components/Content';
import Image from 'next/image';
import '../style.css'
interface AboutUsCardProps {
    item: IAboutUsData;
    index: number;
    mobileView?: boolean
}
interface AboutUsSectionProps {
    AboutUsData: IAboutUsData[];
}
export const AboutUsCard = ({ item, index }: AboutUsCardProps) => {
    return (
      <div
        className={cn(
          "omnicard relative flex flex-col  p-4 w-[413px] h-[559px] rounded-[24px] overflow-hidden transition-all duration-200 ease-in-out"
        )}
        key={`${item.heading}${index}`}
      >
        <div className="about-card bg-card">
          <Image src={item.img} alt="" />
        </div>
        <div>
          <div
            className={`py-6 font-bold ${
              item.description !== "" ? "text-[20px]" : "text-[24px]"
            }`}
          >
            {item.heading}
          </div>
          {Array.isArray(item.description) ? (
            <ul className="list-disc pl-5">
              {item.description.map((desc, i) => (
                <li key={i} className="text-[16px]">
                  {desc}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-[16px]">{item.description}</p>
          )}
        </div>
      </div>
    );
};

const AboutUsSection = ({ AboutUsData }: AboutUsSectionProps) => {
    return (
        <div className='w-full  items-center justify-center flex'>
            <div className='flex gap-5 flex-wrap w-full items-center justify-center'>
                {AboutUsData.map((item, index) => (
                    <AboutUsCard key={index} item={item} index={index} />
                ))}
            </div>
        </div>
    );
};

export default AboutUsSection;
