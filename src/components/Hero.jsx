import React from 'react';
import { discount, robot } from '../assets';
import styles from '../style';

const Hero = () => {
  return (
    <section id="Home" className={`flex md:flex-row flec-col  sm:py-16 py-6`}>
      <div
        className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-xl mb-2">
          <img src={discount} alt="discount" className={`w-8 h-8`} />
          <p
            className={`font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]`}
          >
            <span className="text-white">20%</span> Discount for{' '}
            <span className="text-white">1 month </span>
            Account
          </p>
        </div>
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] leading-[75px] ss:leading-[100px] text-white">
          The next <br className="sm:block hidden" />{' '}
          <span className="text-gradient">Generation</span>
          <br className="sm:block hidden" /> Payment Method.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
