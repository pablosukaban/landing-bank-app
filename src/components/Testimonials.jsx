import React from 'react';
import { feedback } from '../constants';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => {
    return (
        <section
            id='clients'
            className='relative flex flex-col items-center justify-center py-6 sm:py-16'
        >
            {/* градиент */}
            <div className='blue__gradient absolute -right-[50%] bottom-40 z-[0] h-[60%] w-[60%] rounded-full' />

            <div className='relative z-10 mb-6 flex w-full flex-col items-center sm:mb-16 md:flex-row'>
                <h2 className='leading[67px] w-full font-poppins text-[40px] font-semibold text-white xs:text-5xl xs:leading-[77px]'>
                    What people are <br className='hidden sm:block' /> saying
                    about us
                </h2>
                <div className='w-full'>
                    <p className='max-w-[450px] font-poppins text-lg font-normal leading-[30px] text-dimWhite'>
                        Everything you need to accept card payments and grow
                        your business anywhere on the planet.
                    </p>
                </div>
            </div>

            <div className='feedback-container relative z-[1] flex w-full flex-wrap justify-center sm:justify-start'>
                {feedback.map((item) => (
                    <FeedbackCard key={item.id} {...item} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
