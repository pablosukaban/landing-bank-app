import React from 'react';
import { features } from '../constants';
import Button from './Button';

const FeaturesCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex items-center p-6 rounded-[20px] feature-card ${
        index !== features.length - 1 && 'mb-6'
      }`}
    >
      <div
        className={`w-16 h-16 rounded-full flex justify-center items-center bg-dimBlue`}
      >
        <img src={icon} alt="icon" className="w-1/2 h-1/2 object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-5">
        <h4 className="font-poppins font-semibold text-lg text-white leading-6">
          {title}
        </h4>
        <p className="mt-1 font-poppins font-normal text-base text-dimWhite leading-7">
          {content}
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id="features" className="flex md:flex-row flex-col sm:py-16 py-6">
      <div className="flex-1 flex justify-center items-start flex-col">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[77px] leading-[67px] w-full">
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-lg leading-8 max-w-[470px] mt-5">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <Button styles="mt-10" text="Get started" />
      </div>

      <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
        {features.map((item, index) => (
          <FeaturesCard key={item.id} index={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Business;
