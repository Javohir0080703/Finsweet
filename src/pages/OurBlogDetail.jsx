import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom';
import { ourblog } from '../styles';

const OurBlogDetail = () => {
    const { id } = useParams();
    const blog = ourblog.find((blog) => blog.id.toString() === id);
  return (
   <Fragment>
    <section className='py-[128px]'>
        <div className='containerb'>
             <h1 className='text-[70px] font-semibold  text-center  leading-[85px]  mb-8'>{blog.text}</h1>
             <p className='text-center text-2xl font-medium mb-8'>{blog.data}</p>
             <img className='w-full max-w-[780px] mx-auto mb-8' src={blog.img} alt="blog_img" />
             <p className='text-3xl font-medium text-center w-full max-w-[900px] mx-auto leading-[40px]'>{blog.p}</p>
        </div>
    </section>
   </Fragment>
  )
}

export default OurBlogDetail