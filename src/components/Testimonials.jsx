import React from 'react';
import { feedback } from '../constants';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => {
  return (
    <section
      id="clients"
      className="sm:py-16 py-6 flex justify-center items-center flex-col relative"
    >
      {/* градиент */}
      <div />

      <div className="w-full flex items-center md:flex-row flex-col z-10 relative sm:mb-16 mb-6">
        <h2 className="font-poppins font-semibold xs:text-5xl text-[40px] text-white xs:leading-[77px] leading[67px] w-full">
          What people are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="w-full">
          <p className="font-poppins font-normal text-dimWhite text-lg leading-[30px] max-w-[450px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((item) => (
          <FeedbackCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
