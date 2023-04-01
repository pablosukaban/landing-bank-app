import React from 'react';
import { arrowUp } from '../assets';

const GetStarted = () => {
    return (
        <div
            className={`bg-blue-gradient flex h-[140px] w-[140px] cursor-pointer items-center justify-center rounded-full p-[3px]`}
        >
            <div className='flex h-full w-full items-center justify-center rounded-full bg-primary'>
                <div className='flex flex-col items-start justify-center'>
                    <p className='flex font-poppins text-lg font-medium leading-6'>
                        <span className='text-gradient'>Get</span>
                        <img
                            src={arrowUp}
                            alt='arrow'
                            className={`h-6 w-6 object-contain`}
                        />
                    </p>
                    <p className='flex font-poppins text-lg font-medium leading-6'>
                        <span className='text-gradient'>Started</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
