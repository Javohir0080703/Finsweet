import React from 'react'
import Illustration from '../img/Illustration.svg'
import { Link } from 'react-router-dom'
const HomeHero = () => {
    const handleButtonClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return (
        <section className='py-[128px] bg-#1C1E53 z-0'>
            <div className='containerb block qqq:flex items-center justify-between'>
                <div>
                    <h2 className='sss:text-[54px] text-center qqq:text-left text-xl aaa:text-2xl  eee:text-4xl font-normal aaa:font-medium qqq:font-semibold leading-7 aaa:leading-9 sss:leading-[74px] text-white mb-6'>
                        Building stellar websites <br className='hidden qqq:block' /> for early    startups
                    </h2>
                    <p className='text-white text-sm aaa:text-base leading-5 aaa:leading-7 mb-12  text-center qqq:text-left'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br className='block qqq:hidden' /> sed do <br className='hidden sss:block' /> eiusmod tempor incididunt.
                    </p>

                    <div className='tabletmax:flex block space-y-5 sss:space-y-0 items-center'>
                        <Link to="/portfolio" onClick={handleButtonClick} className=' w-full max-w-[199px] qqq:max-w-[240px]  qqq:mx-0 mx-auto  block  text-#1B1C2B text-sm aaa:text-lg font-semibold leading-8 bg-#FCD980 py-3 text-center  aaa:py-4 px-4 aaa:px-[30px] sss:px-[56px] rounded-[41px]'>
                            View our work
                        </Link>
                        <Link to="/pricing" onClick={handleButtonClick} className='text-white text-lg  flex items-center justify-center qqq:justify-normal qqq:ml-10'>
                            View Pricing

                            <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                                <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#F4F6FC" />
                            </svg>
                        </Link>
                    </div>
                </div>

                <img className='w-full hidden qqq:block max-w-[350px] qqq:max-w-[450px] sss:max-w-[638px] ' src={Illustration} alt="Illustration" />
            </div>
        </section>
    )
}

export default HomeHero