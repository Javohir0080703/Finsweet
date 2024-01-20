import React from 'react'
import Illustration from '../img/Illustration.svg'
import heroImg from '../img/Feature-hero.svg'
const HomeHero = () => {
    return (
        <section className='py-[128px] bg-#1C1E53 '>
            <div className='containerb block qqq:flex items-center justify-between'>
                <div>
                    <h2 className='sss:text-[54px] text-center qqq:text-left text-[40px] font-semibold leading-[55px] sss:leading-[74px] text-white mb-6'>
                    All the features <br className='hidden qqq:block' /> you need
                    </h2>
                    <p className='text-white text-base leading-7 mb-12  text-center qqq:text-left'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br className='hidden qqq:block' />  eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='sss:flex block space-y-5 sss:space-y-0 items-center'>
                        <button className=' w-full max-w-[189px] qqq:max-w-[240px]  qqq:mx-0 mx-auto  block  text-#1B1C2B text-lg font-semibold leading-8 bg-#FCD980 py-4 px-[30px] sss:px-[56px] rounded-[41px]'>
                            View our work
                        </button>
                    </div>
                </div>

                <img className='w-full hidden qqq:block max-w-[350px] qqq:max-w-[450px] sss:max-w-[638px] ' src={heroImg} alt="Illustration" />
            </div>
        </section>
    )
}

export default HomeHero