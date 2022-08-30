import React, { useState } from 'react';
import { menu, close, logo } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <nav className="navbar w-full flex justify-between items-center py-6">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((item, index) => (
          <li
            key={item.id}
            className={`font-poppins font-normal cursor-pointer text-base text-white ${
              index !== navLinks.length - 1 && 'mr-10'
            }`}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          src={isOpened ? close : menu}
          onClick={() => setIsOpened((prev) => !prev)}
        />

        <div
          className={`${
            isOpened ? 'flex' : 'hidden'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 mw rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((item, index) => (
              <li
                key={item.id}
                className={`font-poppins font-normal cursor-pointer text-base text-white ${
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
