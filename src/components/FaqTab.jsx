import React, { useState, useEffect } from 'react';
import { faqdata } from '../styles';
import { Link } from 'react-router-dom';

const FaqTab = () => {
    const [activeTab, setActiveTab] = useState(faqdata[0].theme);

    useEffect(() => {
        setActiveTab('');
    }, []);

    const handleTabClick = (theme) => {
        setActiveTab(theme);
    };

    const handleButtonClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    return (
        <section className='pt-[96px] pb-[128px] bg-white z-0'>
            <div className='containerb'>
                <ul className='eee:flex block items-center space-y-5 eee:space-y-0  eee:space-x-8 w-full max-w-[100px]  eee:max-w-[472px] mx-auto mb-12'>
                    <li>
                        <button onClick={() => handleTabClick('')} className={`${activeTab === '' ? "text-#2405F2 opacity-1" : "opacity-[0.75] text-#282938"} whitespace-nowrap leading-8 font-medium text-lg`}>
                            All
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleTabClick(faqdata[1].theme)} className={`${activeTab === faqdata[1].theme ? "text-#2405F2 opacity-1" : "opacity-[0.75] text-#282938"} whitespace-nowrap leading-8 font-medium text-lg`}>
                            UI Design 
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleTabClick(faqdata[2].theme)} className={`${activeTab === faqdata[2].theme ? "text-#2405F2 opacity-1" : "opacity-[0.75] text-#282938"} whitespace-nowrap leading-8 font-medium text-lg`}>
                            Webflow Design
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleTabClick(faqdata[3].theme)} className={`${activeTab === faqdata[3].theme ? "text-#2405F2 opacity-1" : "opacity-[0.75] text-#282938"} whitespace-nowrap leading-8 font-medium text-lg`}>
                            Figma Design
                        </button>
                    </li>
                </ul>

                <ul className='grid md:grid-cols-2 grid-cols-1 gap-x-[34px] gap-y-6'>
                    {faqdata.map((faq) => (
                        <li className={`${activeTab === '' || activeTab === faq.theme ? "" : "hidden"} w-full max-w-[623px]`} key={faq.id}>
                            <img className='border-[33px] border-[#98B1C6] mb-6 w-full max-w-[545px]' src={faq.img} alt={faq.title} />
                            <h3 className='text-#282938 text-[38px] font-semibold leading-[56px] mb-3'>{faq.title}</h3>
                            <p className='text-#282938 text-base leading-7 mb-6'>{faq.text}</p>
                            <Link onClick={handleButtonClick} to={`/users/${faq.id}`} className='flex items-center text-#282938 text-base font-medium leading-6'>
                                Read case study
                                <svg className='ml-3' xmlns="http://www.w3.org/2000/svg" width="25" height="16" viewBox="0 0 25 16" fill="none">
                                    <path d="M24.7071 8.7071C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289L18.3431 0.928931C17.9526 0.538406 17.3195 0.538406 16.9289 0.928931C16.5384 1.31946 16.5384 1.95262 16.9289 2.34314L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.7071ZM8.74228e-08 9L24 9L24 7L-8.74228e-08 7L8.74228e-08 9Z" fill="#282938" />
                                </svg>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default FaqTab;