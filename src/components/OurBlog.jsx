import React from 'react'
import { blogData } from '../styles'
import { Link } from 'react-router-dom'

const OurBlog = () => {
  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <section className='pb-[128px]'>
      <div className='containerb'>
        <h2 className='text-#282938 text-5xl font-semibold leading-[64px] mb-12 text-center'>Our Blog</h2>
        <ul className='grid grid-cols-3  gap-x-8 gap-y-16 '>
          {
            blogData.map((blog) => {
              return (
                <li key={blog.id} className='w-full max-w-[405px] '>
                  <img className='w-full max-w-[405px] mb-8' src={blog.img} alt="blog-img" />
                  <span className='text-#282938 text-base font-medium leading-7 mb-4 opacity-[0.7]'>{blog.numberdata}</span>
                  <h3 className='text-#282938 text-2xl font-medium leading-9 mb-4'>{blog.title}</h3>
                  <p className='text-#282938 text-base leading-7 opacity-[0.7] mb-6'>{blog.text}</p>
                  <Link onClick={handleButtonClick} to={`/about/${blog.id}`} className='flex items-center text-#1C1E53 text-base font-medium leading-7'>Read More
                    <svg className='ml-3' xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                      <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#282938" />
                    </svg>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </section>
  )
}

export default OurBlog