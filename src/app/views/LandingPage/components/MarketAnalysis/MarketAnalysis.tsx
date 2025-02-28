import { MarketSizeData, TargetCustomersData } from '@/app/components/Content'
import React from 'react'

const MarketAnalysis = () => {
    return (
        <div className='xl:min-h-screen w-full py-[120px]'>
            <div className='container'>
                <div className='flex flex-col justify-center items-center '>
                    <h1 className="text-32 md:text-40 font-bold bg-text_gradient_one text-transparent bg-clip-text mb-20">
                        Market Analysis
                    </h1>
                    <h4 className="text-24 font-bold bg-text_gradient_one text-transparent bg-clip-text pb-8">
                        Market Size
                    </h4>
                    <div className='flex flex-col xl:flex-row items-center justify-center gap-5 w-full xl:w-auto'>
                        {
                            MarketSizeData.map((item, index) => (
                                <div className='p-6 bg-gray_one min-h-[186px] max-h-[186px] w-full xl:w-auto flex flex-col justify-between gap-8 rounded-2xl' key={`${item.description}${index + 1}`}>
                                    <h5 className="text-20 md:text-24 font-bold bg-text_gradient_one text-transparent bg-clip-text">
                                        {item.title}
                                    </h5>
                                    <p className='text-16 leading-5 font-medium text-white'>
                                        {item.description}
                                    </p>
                                </div>

                            ))
                        }
                    </div>
                    <h4 className="text-24 font-bold bg-text_gradient_one text-transparent bg-clip-text mt-14 pb-8">
                        Target Customers
                    </h4>
                    <div className='flex flex-col xl:flex-row justify-center gap-5 w-full xl:w-auto'>
                        {
                            TargetCustomersData.map((item, index) => (
                                <div className='p-6 justify-between bg-gray_one flex min-h-[186px] max-h-[186px] flex-col rounded-2xl w-full xl:w-auto' key={`${item.description}${index + 1}`}>
                                    <h5 className="text-20 md:text-24 font-bold bg-text_gradient_one text-transparent bg-clip-text">
                                        {item.title}
                                    </h5>
                                    <p className='text-16 leading-5 font-medium text-white'>
                                        {item.description}
                                    </p>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MarketAnalysis