import React from 'react'
import photo from '../img/a-man.png'
import woman from '../img/photowomen.png'

const Inspire = () => {
  return (
    <section className='qqq:py-[128px] eee:py-[50px] py-8 bg-#EEF4FA z-0'>
      <div className='containerb'>
        <div className='tabletmax:flex block items-center justify-between'>
          <div>
            <span className='text-#282938 text-base font-medium leading-7 mb-4 block text-center tabletmax:text-left '>Our Vision</span>
            <h2 className='text-#282938 text-[38px] font-semibold leading-[56px] mb-4 text-center tabletmax:text-left'>Laser focus</h2>
            <p className='text-#282938 text-base leading-7 text-center tabletmax:text-left mb-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br className='hidden tabletmax:block' /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br className='hidden tabletmax:block' /> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br className='hidden tabletmax:block' /> commodo consequat.</p>
          </div>
          <img className='w-full max-w-[515px] mx-auto tabletmax:mx-0 mb-8 tabletmax:mb-0' src={photo} alt="photo" />
        </div>
        <div className='tabletmax:flex block items-center justify-between'>
          <img className='w-full max-w-[515px] mx-auto tabletmax:mx-0 mb-8 tabletmax:mb-0' src={woman} alt="photo" />
          <div>
            <span className='text-#282938 text-base font-medium leading-7 mb-4 block text-center tabletmax:text-left '>Our Vision</span>
            <h2 className='text-#282938 text-[38px] font-semibold leading-[56px] mb-4 text-center tabletmax:text-left'>Laser focus</h2>
            <p className='text-#282938 text-base leading-7 text-center tabletmax:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br className='hidden tabletmax:block' /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br className='hidden tabletmax:block' /> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br className='hidden tabletmax:block' /> commodo consequat.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Inspire