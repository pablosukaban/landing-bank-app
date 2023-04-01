import React from 'react';
import { google, apple, bill } from '../assets';

const Billing = () => {
    return (
        <section
            id='product'
            className='flex flex-col-reverse gap-20 py-6 sm:py-16 md:flex-row'
        >
            <div className='relative mr-0 mt-10 flex flex-1 items-center justify-center md:mr-10 md:mt-0'>
                <img
                    src={bill}
                    alt='billing'
                    className='relative z-10 h-full w-full'
                />

                <div className='white__gradient absolute -left-1/2 top-0 z-[3] h-1/2 w-1/2 rounded-full' />
                <div className='pink__gradient absolute -left-1/2 bottom-0 z-[0] h-1/2 w-1/2 rounded-full' />
            </div>

            <div className='flex flex-1 flex-col items-start justify-center '>
                <h2 className='w-full font-poppins text-[40px] font-semibold leading-[67px] text-white xs:text-5xl xs:leading-[77px]'>
                    Easily control your <br className='hidden md:block' />{' '}
                    billing & invoicing.
                </h2>
                <p className='mt-5 max-w-[470px] font-poppins text-lg font-normal leading-8 text-dimWhite'>
                    Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                    ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                    integer platea placerat.
                </p>

                <div className='mt-6 flex flex-wrap gap-6 sm:mt-10'>
                    <a
                        target='_blank'
                        href='https://www.apple.com/app-store/'
                        rel='noreferrer'
                    >
                        <img
                            alt='app store'
                            src={apple}
                            className='h-[42px] w-[128px] cursor-pointer object-contain'
                        />
                    </a>
                    <a
                        target='blank'
                        href='https://play.google.com/store/games?hl=ru&gl=US'
                    >
                        <img
                            alt='google play'
                            src={google}
                            className='h-[42px] w-[128px] cursor-pointer object-contain'
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Billing;
