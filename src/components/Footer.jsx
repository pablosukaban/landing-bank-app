import React from 'react';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
    return (
        <section className='flex flex-col items-center justify-center pt-6 pb-[30px] sm:pt-16'>
            <div className='mb-8 flex w-full flex-col items-start justify-center gap-[140px] md:flex-row'>
                <div>
                    <img
                        src={logo}
                        alt='hoobank'
                        className='h-[72px] w-[266px] object-contain'
                    />
                    <p className='mt-8 max-w-xs font-poppins text-lg font-normal text-dimWhite'>
                        A new way to make the payments easy, reliable and
                        secure.
                    </p>
                </div>

                <div className='mt-10 flex w-full flex-[1.5] flex-wrap justify-between md:mt-0'>
                    {footerLinks.map((item) => (
                        <div
                            key={item.key}
                            className='my-4 flex min-w-[150px] flex-col ss:my-0'
                        >
                            <h4 className='font-poppins text-lg font-medium text-white'>
                                {item.title}
                            </h4>
                            <ul>
                                {item.links.map((link, index) => (
                                    <li
                                        key={link.name}
                                        className={`font-poppins text-base font-normal text-dimWhite hover:text-secondary ${
                                            index === 0 ? 'mt-6' : 'mt-3'
                                        }`}
                                    >
                                        <a
                                            target='_blank'
                                            href={link.link}
                                            rel='noreferrer'
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <footer className='flex w-full flex-col items-center justify-between border-t-[1px] border-t-[#3F3E45] pt-[30px] md:flex-row'>
                <p className='font-poppins text-lg font-normal text-dimWhite'>
                    <span className='font-abel'>Copyright</span> © 2021 HooBank.
                    All Rights Reserved.
                </p>

                <div className='mt-6 flex md:mt-0'>
                    {socialMedia.map((item, index) => (
                        <a
                            key={index}
                            target='_blank'
                            href={item.link}
                            rel='noreferrer'
                            className={`${index === 0 ? 'ml-0' : 'ml-[30px]'}`}
                        >
                            <img
                                src={item.icon}
                                alt='social media icon'
                                className='h-[21px] w-[21px] object-contain'
                            />
                        </a>
                    ))}
                </div>
            </footer>
        </section>
    );
};

export default Footer;
