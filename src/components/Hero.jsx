import React from 'react';
import { GetStarted } from '../components';
import { discount, robot } from '../assets';
// import styles from '../style';

const Hero = () => {
    return (
        <section
            id='home'
            className={`flex flex-col py-6 sm:py-16 md:flex-row`}
        >
            <div
                className={`flex flex-1 flex-col items-start justify-center px-6 sm:px-16 xl:px-0`}
            >
                <div className='bg-discount-gradient mb-2 flex flex-row items-center rounded-[10px] py-[6px] px-4'>
                    <img
                        src={discount}
                        alt='discount'
                        className='h-[32px] w-[32px]'
                    />
                    <p
                        className={`ml-2 font-poppins text-[18px] font-normal leading-[30.8px] text-dimWhite`}
                    >
                        <span className='text-white'>20%</span> Discount For{' '}
                        <span className='text-white'>1 Month</span> Account
                    </p>
                </div>

                <div className='flex w-full flex-row items-center justify-between'>
                    <h1 className='flex-1 font-poppins text-[52px] font-semibold leading-[75px] text-white ss:text-[72px] ss:leading-[100.8px]'>
                        The Next <br className='hidden sm:block' />{' '}
                        <span className='text-gradient'>Generation</span>{' '}
                    </h1>
                    <div className='mr-0 hidden ss:flex md:mr-4'>
                        <GetStarted />
                    </div>
                </div>

                <h1 className='w-full font-poppins text-[52px] font-semibold leading-[75px] text-white ss:text-[68px] ss:leading-[100px]'>
                    Payment Method.
                </h1>
                <p className='mt-5 max-w-[470px] font-poppins text-[18px] font-normal leading-[30.8px] text-dimWhite'>
                    Our team of experts uses a methodology to identify the
                    credit cards most likely to fit your needs. We examine
                    annual percentage rates, annual fees.
                </p>
            </div>

            <div
                className={`relative my-10 flex flex-1 items-center justify-center md:my-0`}
            >
                <img
                    src={robot}
                    alt='billing'
                    className='relative z-10 h-full w-full'
                />

                {/* -- Градиент под картинкой робота */}

                <div className='pink__gradient absolute top-0 z-[0] h-[35%] w-[40%]' />
                <div className='white__gradient absolute bottom-40 z-[1] h-[80%] w-[80%] rounded-full' />
                <div className='blue__gradient absolute right-20 bottom-20 z-[0] h-[50%] w-[50%]' />
            </div>

            <div className={`flex items-center justify-center ss:hidden`}>
                <GetStarted />
            </div>
        </section>
    );
};

export default Hero;
