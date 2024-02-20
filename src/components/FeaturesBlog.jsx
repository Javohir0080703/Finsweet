import React from 'react'
import man from '../img/man-exp.png'
import  photo from '../img/photo-of-man.png'
import aman from '../img/a-man-working.png'
import person from '../img/person-using.png'
const FeaturesBlog = () => {
  return (
    <section className='z-0 '>
        <div className=' qqq:py-[128px] eee:py-[50px] py-8  '>
           <div className='containerb block sss:flex items-center justify-between'>
              <div>
                <span className='text-black text-lg font-medium leading-8 mb-4 block  text-center sss:text-center'>Use Client-first</span>
                 <h3 className='text-#232536 text-xl ddd:text-[38px] font-semibold leading-5 ddd:leading-[56px] mb-4 text-center sss:text-center'>
                 Top agencies and freelancers <br className='hidden sss:block' /> around the world use <br className='hidden sss:block' /> Client-first 
                 </h3>
                 <p className='text-#282938 text-base leading-7 text-center sss:text-center mb-8 sss:mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br className='hidden sss:block' /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br className='hidden sss:block' /> veniam, quis nostrud exercitation.</p>
              </div>
              <img className='w-full max-w-[575px] mx-auto sss:mx-0 mb-8 sss:mb-0' src={man} alt="man" />
           </div>
        </div>
        <div className='bg-#F4F6FC qqq:py-[128px] eee:py-[90px] py-10'>
           <div className='containerb sss:flex block items-center justify-between'>
           <img className='w-full max-w-[575px] mx-auto sss:mx-0'
            src={photo} alt="photo" />
              <div>
                <span className='text-black text-lg font-medium leading-8 mb-4 text-center sss:text-center block'>Use Client-first</span>
                 <h3 className='text-#232536 text-xl ddd:text-[38px] font-semibold leading-5 ddd:leading-[56px] mb-4 text-center sss:text-center'>
                 Top agencies and freelancers <br className='hidden sss:block' /> around the world use  <br className='hidden sss:block' /> Client-first 
                 </h3>
                 <p className='text-#282938 text-base leading-7 text-center sss:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br className='hidden sss:block' /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br className='hidden sss:block' /> veniam, quis nostrud exercitation.</p>
              </div>
           </div>
        </div>
        <div className='bg-white qqq:py-[128px] eee:py-[90px] py-10'>
           <div className='containerb block sss:flex items-center justify-between'>
              <div>
                <span classУВЫName='text-black text-lg font-medium leading-8 mb-4 block text-center sss:text-center'>Use Client-first</span>
                 <h3 className='text-#232536 text-xl ddd:text-[38px] font-semibold leading-5 ddd:leading-[56px] mb-4 text-center sss:text-center'>
                 Top agencies and freelancers <br className='hidden sss:block' /> around the world use  <br className='hidden sss:block' /> Client-first 
                 </h3>
                 <p className='text-#282938 text-base leading-7 text-center sss:text-center mb-8 sss:mb-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br className='hidden sss:block' /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br className='hidden sss:block' /> veniam, quis nostrud exercitation.</p>
              </div>
              <img className='w-full max-w-[575px] mx-auto sss:mx-0' src={aman} alt="man" />
           </div>
        </div>
        <div className='bg-yellow-700/[0.10] qqq:py-[128px] eee:py-[90px] py-10'>
           <div className='containerb block sss:flex items-center justify-between'>
           <img className='w-full max-w-[575px] mx-auto sss:mx-0 mb-8 sss:mb-0' src={person} alt="person" />
              <div>
                <span className='text-black text-lg font-medium leading-8 mb-4 block text-center sss:text-center'>Use Client-first</span>
                 <h3 className='text-#232536 text-xl ddd:text-[38px] font-semibold leading-5 ddd:leading-[56px] mb-4 text-center sss:text-center'>
                 Top agencies and freelancers <br className='hidden sss:block' /> around the world use  <br className='hidden sss:block' /> Client-first 
                 </h3>
                 <p className='text-#282938 text-base leading-7 text-center sss:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br className='hidden sss:block' /> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br className='hidden sss:block' /> veniam, quis nostrud exercitation.</p>
              </div>
           </div>
        </div>    
    </section>
  )
}

export default FeaturesBlog