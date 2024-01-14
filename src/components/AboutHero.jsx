import React from 'react'
import group from '../img/group.png'
const AboutHero = () => {
  return (
    <section className='py-[130px] bg-white '>
        <div className='containerb block tabletmax:flex items-center justify-between'>
           <div>
            <span className='text-#282938 text-lg font-medium leading-8 mb-2 text-center block tabletmax:text-left  '>About us</span>
            <h2 className='text-#282938 text-3xl ddd:text-[54px] font-semibold leading-10 ddd:leading-[74px] mb-8 text-center tabletmax:text-left'>
            Our designs solve <br className='hidden tabletmax:block' /> problems
            </h2>
            <p className='text-#282938 text-xs  ddd:text-base leading-4 ddd:leading-7 text-center tabletmax:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br className='hidden tabletmax:block' /> do eiusmod tempor incididunt ut labore et dolore magna <br className='hidden tabletmax:block' /> aliqua. Ut enim ad minim veniam.</p>
           </div>
           <img className='w-full max-w-[547px] mx-auto tabletmax:mx-0 mt-10 tabletmax:mt-0' src={group} alt="group" />
        </div>
    </section>
  )
}

export default AboutHero