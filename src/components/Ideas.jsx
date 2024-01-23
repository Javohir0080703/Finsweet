import React from 'react'
import main from '../img/man-in.png'
const Ideas = () => {
  return (
    <section className='pt-20  pb-[128px] z-0'>
        <div className='containerb'>
          <div className='640px:flex block items-center justify-evenly   py-20 bg-#F4F5F5'>
            <div className='block mb-10 640px:mb-0'>
                <span className='text-#282938 text-base font-medium leading-7 mb-1 block text-center 640px:text-left'>Who we are</span>
                <h2 className='text-#282938 text-[38px] mb-4 text-center 640px:text-left'>Goal focussed</h2>
                <p className='text-base leading-7 text-#282938 text-center 640px:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br className='hidden tabletmax:block' /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br className='hidden tabletmax:block' /> enim ad minim veniam, quis nostrud exercitation ullamco <br className='hidden tabletmax:block' /> laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='block'>
                <h2 className='text-#282938 text-[38px] font-semibold leading-[56px] mb-4 text-center 640px:text-left'>Continuous improvement</h2>
                <p className='text-#282938 text-base leading-7 text-center 640px:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br className='hidden tabletmax:block' /> eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut <br className='hidden tabletmax:block' /> enim ad minim veniam, quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>

          <img className='w-full max-w-[1280px]' src={main} alt="hero-img" />
        </div>
    </section>
  )
}

export default Ideas