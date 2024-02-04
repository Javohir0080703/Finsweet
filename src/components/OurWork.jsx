import React, { useState } from 'react'
import card from '../img/Card.png'
import card2 from '../img/homecard.png'
import card3 from '../img/homecard2.png'
import { Link } from 'react-router-dom'

const OurWork = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [showMessagetwo, setShowMessageTwo] = useState(false);
    const [showMessagetree, setShowMessagetree] = useState(false);
    const handleButtonClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

    const handleMouseOver = () => {
        setShowMessage(true);
    };

    const handleMouseLeave = () => {
        setShowMessage(false);
    };
    const handleMouseOvertwo = () => {
        setShowMessageTwo(true);
    };

    const handleMouseLeavetwo = () => {
        setShowMessageTwo(false);
    };
    const handleMouseOvertree = () => {
        setShowMessagetree(true);
    };

    const handleMouseLeavtree = () => {
        setShowMessagetree(false);
    };

    return (
        <section className='py-[128px] bg-white z-0'>
            <div className='containerb'>
                <div className='md:flex block items-center justify-between mb-[64px]'>
                    <h2 className='text-#282938  text-center md:text-left text-xl aaa:text-3xl  640px:text-5xl leading-10 640px:leading-[64px] font-semibold'>
                        View our projects
                    </h2>
                    <Link to="/faq" onClick={handleButtonClick} className='flex items-center text-#282938 text-sm aaa:text-base font-medium leading-7 w-full max-w-[130px] mx-auto md:mx-0'>
                        View More
                        <svg className='ml-5' xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                            <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#282938" />
                        </svg>
                    </Link>
                </div>

                <div className='md:flex block md:space-x-6 space-x-0 md:space-y-0 space-y-10'>
                    <div className='relative '>
                        <img
                            onMouseOver={handleMouseOver}
                            onMouseLeave={handleMouseLeave}
                            className='w-full max-w-[500px] mx-auto md:mx-0 md:max-w-[843px]' src={card} alt="card"
                        />

                        {showMessage &&
                            <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className=' hidden  w-full ddd:pb-14 pb-3 aaa:pb-8 270px:flex flex-col justify-end pl-6 ddd:pl-12 pr-[35px] absolute top-0 max-w-[396px] h-full max-h-[600px] bg-lanier'>
                                <h3 className='text-white text-xs aaa:text-base ddd:text-2xl font-medium ddd:font-semibold leading-5 ddd:leading-9 mb-0.5 aaa:mb-2 ddd:mb-4'>Workhub office Webflow Webflow Design</h3>
                                <p className='text-white text-xs ddd:text-base font-medium leading-5 ddd:leading-7 mb-1.5 aaa:mb-4 ddd:mb-10'>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                                <Link onClick={handleButtonClick} to="/faq" className='text-[#FCD980] text-xs aaa:text-base font-medium leading-7 flex items-center'>
                                    View project
                                    <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                                        <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#FCD980" />
                                    </svg>
                                </Link>
                            </div>
                        }
                    </div>

                    <div className='flex items-center justify-between md:block'>
                        <div className='relative 640px:mb-8 mb-0 mr-5'>
                            <img
                                onMouseOver={handleMouseOvertwo}
                                onMouseLeave={handleMouseLeavetwo}
                                className='w-full max-w-[250px] md:max-w-[405px]' src={card2} alt="card"
                            />

                            {showMessagetwo &&
                                <div onMouseOver={handleMouseOvertwo} onMouseLeave={handleMouseLeavetwo} className='hidden 640px:flex  w-full flex-col justify-end pb-4 tabletmax:pb-7 pl-8   tabletmax:pl-[56px]  pr-9 absolute top-0 left-0 max-w-[405px] h-full max-h-[284px] bg-lanier'>
                                    <h3 className='text-white text-lg tabletmax:text-2xl font-semibold tabletmax:leading-9 mb-4'>Unisaas Website <br /> Design</h3>
                                    <Link onClick={handleButtonClick} to="/faq" className='text-[#FCD980] text-base font-medium leading-7 flex items-center'>
                                        View portfolio
                                        <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                                            <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#FCD980" />
                                        </svg>
                                    </Link>
                                </div>
                            }
                        </div>
                        <div className='relative'>
                            <img
                                onMouseOver={handleMouseOvertree}
                                onMouseLeave={handleMouseLeavtree}
                                className='w-full max-w-[250px] md:max-w-[405px]' src={card3} alt="card"
                            />

                            {showMessagetree &&
                                <div onMouseOver={handleMouseOvertree} onMouseLeave={handleMouseLeavtree} className=' w-full pt-[129px] pl-[56px]  pr-9 absolute top-0 left-0 max-w-[405px] h-full min-h-[284px] bg-lanier hidden 640px:block'>
                                    <h3 className='text-white text-2xl font-semibold leading-9 mb-4'>Unisaas Website <br /> Design</h3>
                                    <Link onClick={handleButtonClick} to="/faq" className='text-[#FCD980] text-base font-medium leading-7 flex items-center'>
                                        View portfolio
                                        <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                                            <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#FCD980" />
                                        </svg>
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
    )
}

export default OurWork