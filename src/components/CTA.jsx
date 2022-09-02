import React from 'react';
import Button from './Button';

const CTA = () => {
  return (
    <section className="flex justify-center items-center sm:my-16 my-6 sm:px-[97px] px-6 sm:py-[72px] py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow">
      <div className="flex-1 flex flex-col">
        <h2 className="font-poppins font-semibold text-5xl text-white leading-[67px] w-full">
          Let’s try our service now!
        </h2>
        <p className="font-poppins font-normal text-lg tracking-[1%] text-dimWhite max-w-[470px] mt-5">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10">
        <Button text="Get started" />
      </div>
    </section>
  );
};

export default CTA;
