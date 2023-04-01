import React from 'react';
import { stats } from '../constants';

const Stats = () => {
    return (
        <section className='mb-6 flex flex-row flex-wrap items-center justify-center sm:mb-20'>
            {stats.map((item) => (
                <div
                    key={item.id}
                    className='m-4 flex flex-1 items-center justify-start'
                >
                    <h4 className='font-poppins text-[30px] font-semibold leading-[43px] text-white xs:text-[40px] xs:leading-[53px]'>
                        {item.value}
                    </h4>
                    <p className='text-gradient ml-3 font-poppins text-[15px] font-normal uppercase leading-[21px] xs:text-[20px] xs:leading-[26px]'>
                        {item.title}
                    </p>
                </div>
            ))}
        </section>
    );
};

export default Stats;
