import React from 'react';
import { arrowUp } from '../assets';

const GetStarted = () => {
  return (
    <div
      className={`flex justify-center items-center w-[140px] h-[140px] rounded-full bg-blue-gradient cursor-pointer p-[3px]`}
    >
      <div className="flex justify-center items-center w-full h-full rounded-full bg-primary">
        <div className="flex justify-center items-start flex-col">
          <p className="flex font-poppins font-medium text-lg leading-6">
            <span className="text-gradient">Get</span>
            <img
              src={arrowUp}
              alt="arrow"
              className={`w-6 h-6 object-contain`}
            />
          </p>
          <p className="flex font-poppins font-medium text-lg leading-6">
            <span className="text-gradient">Started</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
