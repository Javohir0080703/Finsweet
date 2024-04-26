import React from 'react'
import { blogData } from '../styles';
import { useParams } from 'react-router-dom';
import Cta from '../components/Cta'
const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogData.find((faq) => faq.id.toString() === id);
  return (
    <div>
        <section className='pt-32 pb-24'>
            <div className='containerb'>
               <h1 className='text-#282938 mx-auto text-center  text-sm aaa:text-lg ddd:text-2xl eee:text-3xl qqq:text-5xl font-semibold leading-5 aaa:leading-6 ddd:leading-8 eee:leading-10 qqq:leading-[64px] mb-4 w-full max-w-[949px]'>{blog.detailtitle}</h1>
               <div className='eee:flex items-center justify-center mb-12'>
                <p className='text-#282938 text-sm eee:text-base font-medium leading-7 opacity-[0.87]  text-center '>{blog.detaildatatitle}</p>
                <p className='text-#282938 text-sm eee:text-base font-medium leading-7 opacity-[0.87] ml-1.5 text-center'>{blog.detaildata}</p>
               </div>
               <img className='w-full max-w-[1280px] h-full max-h-[500px] mb-20' src={blog.img} alt="detail-img" />
               <div className='w-full max-w-[840px] mx-auto px-5'> 
               <h2 className='text-#282938 text-center sm:text-xl md:text-[38px] font-semibold  leading-6 sm:leading-10 md:leading-[56px] mb-8'>{blog.detailtitle2}</h2>
                   <p className='text-#282938 text-center text-xs sm:text-base leading-5 sm:leading-7 opacity-[0.7] mb-10'>{blog. detailtitle2text}</p>
                   <h2 className='text-#282938 text-center text-xs sm:text-base leading-5 sm:leading-7 opacity-[0.7] mb-6'>{blog.detailtitle3}</h2>
                   <ul className='space-y-3 pl-4 mb-6'>
                    <li className='list-disc text-#282938 text-xs sm:text-base leading-5 sm:leading-7  opacity-[0.7]'>{blog.detailtitleabout1}</li>
                    <li className='list-disc text-#282938 text-xs sm:text-base leading-5 sm:leading-7 opacity-[0.7]'>{blog.detailtitleabout2}</li>
                    <li className='list-disc text-#282938 text-xs sm:text-base leading-5 sm:leading-7 opacity-[0.7]'>{blog.detailtitleabout3}</li>
                   </ul>
                   <p className='text-#282938 text-xs sm:text-base  sm:leading-7 leading-7 opacity-[0.7] mb-8'>{blog.detailtitle3text2}</p>
                   <img className='w-full max-w-[839px] mx-auto mb-14' src={blog.detailimg} alt="detail-img" />
                   <h2 className='text-#282938 text-center sm:text-xl md:text-[38px] font-semibold leading-6 sm:leading-10 md:leading-[56px] mb-8'>{blog.detailTitle4}</h2>
                   <p className='text-#282938 text-center text-xs sm:text-base  sm:leading-7 leading-7 opacity-[0.7]'>{blog. detailtitle4text}</p>
               </div>
            </div>
        </section>
        <Cta/>
    </div>
  )
}

export default BlogDetail