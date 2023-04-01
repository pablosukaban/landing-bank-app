import React, { useState } from 'react';
import { menu, close, logo } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <nav className='navbar flex w-full items-center justify-between py-6'>
            <img src={logo} alt='hoobank' className='h-[32px] w-[124px]' />

            <ul className='hidden flex-1 list-none items-center justify-end sm:flex'>
                {navLinks.map((item, index) => (
                    <li
                        key={item.id}
                        className={`cursor-pointer font-poppins text-base font-normal text-white ${
                            index !== navLinks.length - 1 && 'mr-10'
                        }`}
                    >
                        <a href={`#${item.id}`}>{item.title}</a>
                    </li>
                ))}
            </ul>

            <div className='flex flex-1 items-center justify-end sm:hidden'>
                <img
                    alt='menu'
                    className='h-[28px] w-[28px] object-contain'
                    src={isOpened ? close : menu}
                    onClick={() => setIsOpened((prev) => !prev)}
                />

                <div
                    className={`${
                        isOpened ? 'flex' : 'hidden'
                    } bg-black-gradient mw sidebar absolute top-20 right-0 mx-4 my-2 rounded-xl p-6`}
                >
                    <ul className='flex flex-1 list-none flex-col items-center justify-end'>
                        {navLinks.map((item, index) => (
                            <li
                                key={item.id}
                                className={`cursor-pointer font-poppins text-base font-normal text-white ${
                                    index !== navLinks.length - 1 && 'mb-4'
                                }`}
                            >
                                <a href={`#${item.id}`}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
