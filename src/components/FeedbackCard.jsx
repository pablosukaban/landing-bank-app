import React from 'react';
import { quotes } from '../assets';

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="quotes"
        className="w-[42px] h-[27px] object-contain m-0"
      />
      <p className="font-pippins font-normal text-lg leading-[32px] text-white m-0 my-10 tracking-[2%]">
        {content}
      </p>

      <div className="flex items-center gap-4">
        <img src={img} alt="avatar" className="w-12 h-12 rounded-full" />
        <div className="flex flex-col">
          <h4 className="text-white font-poppins font-normal text-xl leading-8">
            {name}
          </h4>
          <p className="text-dimWhite font-poppins font-normal text-base leading-6">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
