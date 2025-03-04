import Image, { StaticImageData } from 'next/image';
import React from 'react'
export interface IPhaseData {
  heading: string;
  description:string[];
  img: StaticImageData;
}
const SlideCard:React.FC<IPhaseData>= ({heading, description, img}) => {
  return (
    <div className="max-w-[277px] mr-8 p-2 min-h-[164px] border border-white/30 bg-card_background  border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
      <Image src={img} alt="" width={24} height={24} />
      <div className="text-[20px] mt-4 font-semibold tracking-tight text-gray_two dark:text-white">
        {heading}
      </div>
      <ul className="list-disc pl-5 pt-3">
        {description.map((desc, i) => (
          <li key={i} className="text-[14px] text-gray_two whitespace-nowrap">
            {desc}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SlideCard