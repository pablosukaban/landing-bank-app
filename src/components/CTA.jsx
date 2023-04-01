import React from 'react';
import Button from './Button';

const CTA = () => {
    return (
        <section className='bg-black-gradient-2 box-shadow my-6 flex flex-col items-center justify-center rounded-[20px] px-6 py-4 sm:my-16 sm:flex-row sm:px-[97px] sm:py-[72px]'>
            <div className='flex flex-1 flex-col'>
                <h2 className='w-full font-poppins text-5xl font-semibold leading-[67px] text-white'>
                    Let’s try our service now!
                </h2>
                <p className='mt-5 max-w-[470px] font-poppins text-lg font-normal tracking-[1%] text-dimWhite'>
                    Everything you need to accept card payments and grow your
                    business anywhere on the planet.
                </p>
            </div>
            <div className='ml-0 mt-10 flex items-center justify-center sm:ml-10 sm:mt-0'>
                <Button text='Get started' />
            </div>
        </section>
    );
};

export default CTA;
