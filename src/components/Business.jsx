import React from 'react';
import { features } from '../constants';
import Button from './Button';

const FeaturesCard = ({ icon, title, content, index }) => {
    return (
        <div
            className={`feature-card flex items-center rounded-[20px] p-6 ${
                index !== features.length - 1 && 'mb-6'
            }`}
        >
            <div
                className={`flex h-16 w-16 items-center justify-center rounded-full bg-dimBlue`}
            >
                <img
                    src={icon}
                    alt='icon'
                    className='h-1/2 w-1/2 object-contain'
                />
            </div>
            <div className='ml-5 flex flex-1 flex-col'>
                <h4 className='font-poppins text-lg font-semibold leading-6 text-white'>
                    {title}
                </h4>
                <p className='mt-1 font-poppins text-base font-normal leading-7 text-dimWhite'>
                    {content}
                </p>
            </div>
        </div>
    );
};

const Business = () => {
    return (
        <section
            id='features'
            className='flex flex-col py-6 sm:py-16 md:flex-row'
        >
            <div className='flex flex-1 flex-col items-start justify-center'>
                <h2 className='w-full font-poppins text-[40px] font-semibold leading-[67px] text-white xs:text-[48px] xs:leading-[77px]'>
                    You do the business, <br className='hidden sm:block' />{' '}
                    we’ll handle the money.
                </h2>
                <p className='mt-5 max-w-[470px] font-poppins text-lg font-normal leading-8 text-dimWhite'>
                    With the right credit card, you can improve your financial
                    life by building credit, earning rewards and saving money.
                    But with hundreds of credit cards on the market.
                </p>

                <Button styles='mt-10' text='Get started' />
            </div>

            <div className='relative ml-0 mt-10 flex flex-1 flex-col items-center justify-center md:ml-10 md:mt-0'>
                {features.map((item, index) => (
                    <FeaturesCard key={item.id} index={index} {...item} />
                ))}
            </div>
        </section>
    );
};

export default Business;
