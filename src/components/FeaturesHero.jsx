import React from 'react'
import heroImg from '../img/Feature-Hero.svg'
import { Link } from 'react-router-dom'
const HomeHero = () => {
    const handleButtonClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    return (
        <section className='qqq:py-[128px] eee:py-[50px] py-8 bg-#1C1E53 z-0'>
            <div className='containerb block qqq:flex items-center justify-between'>
                <div>
                    <h2 className='sss:text-[54px] text-center qqq:text-left text-2xl eee:text-[40px] font-semibold leading-7 eee:leading-[55px] sss:leading-[74px] text-white mb-6'>
                    All the features <br className='hidden qqq:block' /> you need
                    </h2>
                    <p className='text-white text-xs eee:text-base leading-5 eee:leading-7 mb-12  text-center qqq:text-left'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br className='hidden qqq:block' />  eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='sss:flex block space-y-5 sss:space-y-0 items-center'>
                       <div className='flex justify-center'>
                       <Link to="/pricing" onClick={handleButtonClick} className=' w-full text-center max-w-[189px] qqq:max-w-[240px]  flex justify-center   text-#1B1C2B text-sm eee:text-lg font-semibold leading-6 eee:leading-8 bg-#FCD980 py-3 eee:py-4 px-6 eee:px-[30px] sss:px-[56px] rounded-[41px]'>
                            View our work
                        </Link>
                       </div>
                    </div>
                </div>

                <img className='w-full hidden qqq:block max-w-[350px] qqq:max-w-[450px] sss:max-w-[638px] ' src={heroImg} alt="Illustration" />
            </div>
        </section>
    )
}

export default HomeHero