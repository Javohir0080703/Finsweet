import React from 'react'
import main from '../img/man-in.png'
const Ideas = () => {
  return (
    <section className='eee:pt-20   qqq:pb-[128px] eee:pb-[50px] py-8 z-0'>
        <div className='containerb'>
          <div className='tabletmax:flex tabletmax:px-20 ddd:px-10 px-5 block items-center justify-evenly   py-20 bg-#F4F5F5'>
            <div className='block mb-10 tabletmax:mb-0'>
                <span className='text-#282938 text-base font-medium leading-7 mb-1 block text-center tabletmax:text-left'>Who we are</span>
                <h2 className='text-#282938 text-2xl ddd:text-[38px] mb-4 text-center tabletmax:text-left'>Goal focussed</h2>
                <p className='ddd:text-base text-sm leading-5 ddd:leading-7 text-#282938 text-center tabletmax:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='block'>
                <h2 className='text-#282938 text-2xl ddd:text-[38px] font-semibold leading-7 ddd:leading-[56px] mb-4 text-center tabletmax:text-left'>Continuous improvement</h2>
                <p className='text-#282938 text-sm ddd:text-base leading-5 ddd:leading-7 text-center tabletmax:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut  enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>

          <img className='w-full max-w-[1280px]' src={main} alt="hero-img" />
        </div>
    </section>
  )
}

export default Ideas