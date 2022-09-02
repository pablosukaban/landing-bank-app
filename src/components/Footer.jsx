import React from 'react';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center sm:pt-16 pt-6 pb-[30px]">
      <div className="flex justify-center gap-[140px] items-start md:flex-row flex-col mb-8 w-full">
        <div>
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className="font-poppins font-normal text-dimWhite text-lg max-w-xs mt-8">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] flex flex-wrap justify-between md:mt-0 mt-10 w-full">
          {footerLinks.map((item) => (
            <div
              key={item.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins font-medium text-lg text-white">
                {item.title}
              </h4>
              <ul>
                {item.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-base text-dimWhite hover:text-secondary ${
                      index === 0 ? 'mt-6' : 'mt-3'
                    }`}
                  >
                    <a target="_blank" href={link.link} rel="noreferrer">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <footer className="flex justify-between items-center w-full md:flex-row flex-col pt-[30px] border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-lg text-dimWhite">
          <span className="font-abel">Copyright</span> © 2021 HooBank. All
          Rights Reserved.
        </p>

        <div className="flex md:mt-0 mt-6">
          {socialMedia.map((item, index) => (
            <a
              key={index}
              target="_blank"
              href={item.link}
              rel="noreferrer"
              className={`${index === 0 ? 'ml-0' : 'ml-[30px]'}`}
            >
              <img
                src={item.icon}
                alt="social media icon"
                className="w-[21px] h-[21px] object-contain"
              />
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
};

export default Footer;
