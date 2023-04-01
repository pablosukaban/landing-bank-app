import React from 'react';
import { card } from '../assets';
import Button from './Button';

const CardDeal = () => {
    return (
        <section className='flex flex-col py-6 sm:py-16 md:flex-row'>
            <div className='flex flex-1 flex-col items-start justify-center'>
                <h2 className='w-full font-poppins text-[40px] font-semibold leading-[67px] text-white xs:text-5xl xs:leading-[77px]'>
                    Find a better card deal <br className='hidden sm:block' />{' '}
                    in few easy steps.
                </h2>
                <p className='mt-6 max-w-[470px] font-poppins text-lg font-normal leading-[30px] text-dimWhite'>
                    Arcu tortor, purus in mattis at sed integer faucibus.
                    Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices
                    ac, ametau.
                </p>
                <Button text='Get started' styles='mt-4' />
            </div>

            <div className='relative ml-0 mt-10 flex flex-1 items-center justify-center md:ml-10 md:mt-0'>
                <img src={card} alt='card' className='h-full w-full' />
            </div>
        </section>
    );
};

export default CardDeal;
