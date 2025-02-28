import React from 'react'
import { AdvertisingIcon, CoinsIcon, SaveBankIcon } from '@/app/components/Icons'
const RevenueModel = () => {
    return (
        <div className='h-screen- w-full py-[120px]-'>
            <div className='container'>
                <div className='flex flex-col justify-start items-center'>
                    <h1 className="text-32 md:text-40 font-bold bg-text_gradient_one text-transparent bg-clip-text mb-20">
                        Revenue Model
                    </h1>
                    <div className='flex flex-col md:flex-row gap-5'>
                        <div className='flex flex-col p-6 w-full md:w-[33%] justify-between bg-gray_three rounded-2xl max-h-[148px] min-h-[148px] '>
                            <div className='flex gap-3 '>
                                <CoinsIcon />
                                <h5 className='text-20 leading-6 font-bold text-white'>
                                    Subscription Plans
                                </h5>
                            </div>
                            <p className='text-16 font-medium leading-5'>
                                Flexible monthly or annual plans with AI-powered support and automation.
                            </p>
                        </div>
                        <div className='flex flex-col p-6 w-full md:w-[33%] justify-between bg-gray_three rounded-2xl max-h-[148px] min-h-[148px] '>
                            <div className='flex gap-3 '>
                                <SaveBankIcon />
                                <h5 className='text-20 leading-6 font-bold text-white'>
                                    Pay-Per-Use
                                </h5>
                            </div>
                            <p className='text-16 font-medium leading-5'>
                                Pay only for what you use—charged per AI interaction, API call, or transaction.
                            </p>
                        </div>
                        <div className='flex flex-col p-6 w-full md:w-[33%] justify-between bg-gray_three rounded-2xl max-h-[148px] min-h-[148px] '>
                            <div className='flex gap-3 '>
                                <AdvertisingIcon />
                                <h5 className='text-20 leading-6 font-bold text-white'>
                                    Tokenized Transactions
                                </h5>
                            </div>
                            <p className='text-16 font-medium leading-5'>
                                Use blockchain-powered tokens for secure AI services and automation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RevenueModel