import React from 'react';
import { clients } from '../constants';

const Client = () => {
    return (
        <section id='clients' className='my-4 flex items-center justify-center'>
            <div className='flex w-full flex-wrap items-center justify-center'>
                {clients.map((item) => (
                    <div
                        key={item.id}
                        className='flex min-w-[100px] flex-1 items-center justify-center sm:min-w-[192px]'
                    >
                        <img
                            src={item.logo}
                            alt='client logo'
                            className='w-[100px] object-contain sm:w-[192px]'
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Client;
