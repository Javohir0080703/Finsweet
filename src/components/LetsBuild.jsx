import React from 'react'
import { Link } from 'react-router-dom'

const LetsBuild = () => {
  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <section className='qqq:py-[128px] eee:py-[50px] py-8 bg-white z-0'>
      <div className='containerb'>
        <h2 className='text-#282938 text-center text-xl aaa:text-3xl www:text-5xl font-semibold leading-6 aaa:leading-10 www:leading-[64px] mb-5'>Let's build something great <br className='hidden www:block' /> together</h2>
        <p className='text-#282938 text-center font-medium leading-5 aaa:leading-7 text-xs aaa:text-sm www:text-base mb-10 '>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies <br className='hidden www:block' /> nec dolor sit amet, scelerisque cursus purus.</p>
        <div className='flex justify-center'>
          <Link to="/contact" onClick={handleButtonClick} className=' w-full max-w-[233px] rounded-[41px]  bg-#FCD980 py-2 aaa:py-4 px-5 aaa:px-[66px] text-center text-#1B1C2B text-lg font-semibold leading-8'>Contact Us</Link>
        </div>
      </div>
    </section>
  )
}

export default LetsBuild