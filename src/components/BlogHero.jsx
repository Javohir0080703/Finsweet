import React from 'react'
import blogimg from '../img/blogheroimg.png'
import { Link } from 'react-router-dom'
const logHero = () => {
  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <section className='py-[128px] '>
        <div className='containerb'>
           <h1 className='text-#282938 text-5xl font-semibold leading-[64px] mb-4 text-center'>
           A UX Case Study on Creating a <br /> Studious Environment for Students
           </h1>
          <div className=' mb-8 flex items-center justify-center'>
            <p className='text-#282938 text-base font-medium leading-7 opacity-[0.87] '>Andrew Jonson</p>
            <p className='text-#282938 text-base font-medium leading-7 opacity-[0.87] '>Posted on 27th January 2021</p>
          </div>
           <img className='w-full max-w-[1280px] mb-12 mx-auto' src={blogimg} alt="blog-img" />
           <p className='text-#282938 text-base leading-7 mb-4 text-center'>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the <br /> stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the <br /> spectator on a hillside.</p>
           <Link onClick={handleButtonClick} to="/about" className='text-#2405F2 text-base leading-7 opacity-[0.7] flex items-center justify-center
           '>Read more</Link>
        </div>
    </section>
  )
}

export default logHero