import React from 'react'
import { Link } from 'react-router-dom'

const LetsBuild = () => {
  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <section className='pb-[128px] bg-white z-0'>
        <div className='containerb'>
         <h2 className='text-#282938 text-center text-5xl font-semibold leading-[64px] mb-5'>Let's build something great <br /> together</h2>
         <p className='text-#282938 text-center font-medium leading-7 text-base mb-10 '>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies <br /> nec dolor sit amet, scelerisque cursus purus.</p>
        <Link to="/contact" onClick={handleButtonClick}  className='block w-full max-w-[233px] rounded-[41px] mx-auto bg-#FCD980 py-4 px-[66px] text-center text-#1B1C2B text-lg font-semibold leading-8'>Contact Us</Link>
        </div>
    </section>
  )
}

export default LetsBuild