import React from 'react';
import { google, apple, bill } from '../assets';

const Billing = () => {
  return (
    <section
      id="product"
      className="flex md:flex-row flex-col-reverse gap-20 sm:py-16 py-6"
    >
      <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
        <img src={bill} alt="billing" className="w-full h-full relative z-10" />

        <div className="absolute w-1/2 h-1/2 -left-1/2 top-0 z-[3] rounded-full white__gradient" />
        <div className="absolute w-1/2 h-1/2 -left-1/2 bottom-0 z-[0] rounded-full pink__gradient" />
      </div>

      <div className="flex-1 flex justify-center items-start flex-col ">
        <h2 className="font-poppins font-semibold xs:text-5xl text-[40px] text-white xs:leading-[77px] leading-[67px] w-full">
          Easily control your <br className="md:block hidden" /> billing &
          invoicing.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-lg leading-8 mt-5 max-w-[470px]">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-wrap sm:mt-10 mt-6 gap-6">
          <a
            target="_blank"
            href="https://www.apple.com/app-store/"
            rel="noreferrer"
          >
            <img
              alt="app store"
              src={apple}
              className="w-[128px] h-[42px] object-contain cursor-pointer"
            />
          </a>
          <a
            target="blank"
            href="https://play.google.com/store/games?hl=ru&gl=US"
          >
            <img
              alt="google play"
              src={google}
              className="w-[128px] h-[42px] object-contain cursor-pointer"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Billing;
