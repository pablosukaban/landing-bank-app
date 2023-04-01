import React from 'react';
import { quotes } from '../assets';

const FeedbackCard = ({ content, name, title, img }) => {
    return (
        <div className='feedback-card my-5 mr-0 flex max-w-[370px] flex-col justify-between rounded-[20px] px-10 py-12 sm:mr-5 md:mr-10'>
            <img
                src={quotes}
                alt='quotes'
                className='m-0 h-[27px] w-[42px] object-contain'
            />
            <p className='font-pippins m-0 my-10 text-lg font-normal leading-[32px] tracking-[2%] text-white'>
                {content}
            </p>

            <div className='flex items-center gap-4'>
                <img
                    src={img}
                    alt='avatar'
                    className='h-12 w-12 rounded-full'
                />
                <div className='flex flex-col'>
                    <h4 className='font-poppins text-xl font-normal leading-8 text-white'>
                        {name}
                    </h4>
                    <p className='font-poppins text-base font-normal leading-6 text-dimWhite'>
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;
