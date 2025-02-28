import { ForBusinessesData, ForUsersData } from '@/app/components/Content'
import React from 'react'

const OurFeatures = () => {
    return (
        <div id={'features'} className='w-full h-full xl:h-[120vh] 3xl:h-screen bg-gray_two py-10 md:py-20 md:px-5'>
            <div className='container'>
                <div className='flex flex-col items-center justify-center h-full '>
                    <h1 className="text-40 font-bold bg-text_gradient_one text-transparent bg-clip-text mb-20">
                        Our Features
                    </h1>
                    <div className='flex flex-col xl:flex-row w-full gap-6 '>
                        <div className='flex flex-col items-center justify-center'>
                            <h4 className="text-24 font-bold bg-text_gradient_one text-transparent bg-clip-text mb-6">
                                For Businesses
                            </h4>
                            <div className='flex flex-wrap gap-6 xl:max-h-[540px]'>
                                {
                                    ForBusinessesData.map((item, index) => (
                                        <div className='p-4 flex flex-col xl:min-w-[48%] min-h-[234px] justify-between w-full xl:max-w-[48%] rounded-[24px] bg-gray_three ' key={`${item.heading} ${index}`}>
                                            <h4 className='text-20 leading-6 font-bold '>
                                                {item.heading}
                                            </h4>
                                            <ul className='list-disc pl-5'>
                                                {
                                                    item.points.map((point, index) => (
                                                        <li key={`${point}${index}`} className='text-16 leading-5 text-white '>
                                                            {
                                                                point
                                                            }
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                        <div className='features-gradient h-inherit w-1' />
                        <div className='flex flex-col items-center justify-center'>
                            <h4 className="text-24 font-bold bg-text_gradient_one text-transparent bg-clip-text mb-6">
                                For End Users
                            </h4>
                            <div className='flex flex-wrap gap-6 xl:max-h-[540px] justify-center'>
                                {
                                    ForUsersData.map((item, index) => (
                                        <div className='p-4 flex flex-col justify-between rounded-[24px] w-full xl:min-w-[46%] 3xl:min-w-[48%] xl:max-w-[46%] min-h-[234px] bg-gray_three ' key={`${item.heading} ${index}`}>
                                            <h4 className='text-20 leading-6 font-bold '>
                                                {item.heading}
                                            </h4>
                                            <ul className='list-disc pl-5'>
                                                {
                                                    item.points.map((point, index) => (
                                                        <li key={`${point}${index}`} className='text-16 leading-5 text-white '>
                                                            {
                                                                point
                                                            }
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurFeatures