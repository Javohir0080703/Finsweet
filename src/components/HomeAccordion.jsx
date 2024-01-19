import React from 'react'

import { mainFaqs, ourblog } from '../styles';


const HomeAccordion = () => {

  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <section className='pb-[128px] bg-white '>
      <div className='containerb'>

        <div className=' bg-white/[0.05]'>
        <div className='mb-10 block sss:hidden'>
            <h2 className='text-#1C1E53 mb-6 text-[54px] font-semibold leading-[74px] text-center'>Building stellar <br /> websites for <br /> early startups</h2>
            <p className='text-#1C1E53 text-base font-medium leading-7 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua ut enim.</p>
          </div>
          <div className='flex   items-center mb-[128px]'>
            <div className='bg-home-cta w-full max-w-[624px]   bg-whidth h-full min-h-[691px] pt-[96px] px-[96px] hidden sss:block '>
              <h2 className='text-#1C1E53 text-[54px] font-semibold leading-[74px] mb-6'>
                Building stellar websites for early startups
              </h2>
              <p className='text-#1C1E53 text-base font-medium leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
            </div>
            <div className='w-full max-w-[624px] mx-auto sss:mx-0 bg-#1C1E53/[0.8] h-full min-h-[653px]  ddd:py-[50px] ddd:px-[50px] eee:pb-0 px-[25px] py-[25px] eee:pt-[96px] eee:px-[96px]'>
              <h2 className='text-white text-[32px] font-medium leading-[48px] mb-4'>Send inquiry</h2>
              <p className='text-#F4F6FC text-base font-medium leading-7 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

              <form className='space-y-4 mb-7'>
                <input className='pl-8 py-[18px] w-full max-w-[432px] rounded-lg border-[2px] border-white/[0.05] bg-transparent' type="text" placeholder='Your Name' />
                <input className='pl-8 py-[18px] w-full max-w-[432px] rounded-lg border-[2px] border-white/[0.05] bg-transparent' type="email" placeholder='Email' />
                <input className='pl-8 py-[18px] w-full mb-10 max-w-[432px] rounded-lg border-[2px] border-white/[0.05] bg-transparent' type="url" placeholder='Paste your Figma design URL' />

                <button className='py-4 mt-10 aaa:px-[51px] px-5  w-full max-w-[200px] aaa:max-w-[432px] block bg-#FCD980 rounded-[41px] text-#1B1C2B text-sm aaa:text-lg font-semibold leading-8'>Send an Inquiry</button>
              </form>

              <button className='text-white w-full text-sm aaa:leading-4 aaa:max-w-[244px] max-w-[150px]  mx-auto aaa:text-lg font-medium leading-8 flex items-center'>
                Get in touch with us
                <svg className='ml-5' xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                  <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#F4F6FC" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className=''>
          <h2 className='text-#282938 text-5xl font-semibold leading-[64px] mb-16'>
            Our blog
          </h2>

          <ul className='grid grid-cols-1 www:grid-cols-3 gap-8 space-y-5 www:space-y-0'>
            {
              ourblog.map((blog) => {
                return (
                  <li key={blog.id} className='w-full max-w-[405px] mx-auto www:mx-auto'>
                    <img className='w-full max-w-[405px] mb-10' src={blog.img} alt="img" />
                    <p className='text-#282938 text-base font-medium leading-7 opacity-[0.7] mb-4'>{blog.data}</p>
                    <p className='text-#282938 text-2xl font-medium leading-9 mb-4'>{blog.text}</p>
                    <p className='text-#282938 text-base leading-7 mb-8'>{blog.p}</p>
                    <button className='text-#282938 text-base font-medium leading-7 flex items-center'>
                      Read More
                      <svg className='ml-3' xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                        <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#282938" />
                      </svg>
                    </button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HomeAccordion