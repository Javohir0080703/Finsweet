import React, { useState } from 'react'
// import sendToTelegram from '../TelegramBot';
import { ourblog } from '../styles';
import { Link } from 'react-router-dom';
import axios from 'axios';

const HomeAccordion = () => {
  const [open, setOpen] = React.useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  const handleButtonClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // input
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert("Iltimos malumotni to'ldiring")
    } else {
       alert("Malumot yuborildi")
      const telegram_bot_id = '6449286041:AAHA1VJlhGPS3QKrpeGowx9wGPjhgJ6W53Q';
      const chat_id = '5659934636';

      const telegramMessage = `Ismi: ${name}\nEmail: ${email}\nFigma design URL: ${message}`;

      axios
        .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
          chat_id,
          text: telegramMessage,
        })
        .then((response) => {
          console.log(response.data);
          setName('');
          setEmail('');
          setMessage('');
        })
      // .catch((error) => {
      //   console.error(error);
      // });
    };
    if (!validateEmail(email)) {
      setError('Hatolik! Malumot email formatida emas');
      return;
    }
  }



  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


  return (
    <section className='qqq:pb-[128px] eee:pb-[50px] pb-8 bg-white z-0'>
      <div className='containerb'>

        <div className=' bg-white/[0.05]'>
          <div className='mb-10 block sss:hidden'>
            <h2 className='text-#1C1E53 text-2xl mb-6 aaa:text-[40px] eee:text-[54px] font-semibold  aaa:leading-[50px] eee:leading-[74px] text-center '>Building stellar <br className='hidden eee:block' /> websites for <br  className='hidden eee:block' /> early startups</h2>
            <p className='text-#1C1E53 text-xs aaa:text-base font-medium leading-5 aaa:leading-7 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br  className='hidden eee:block' /> sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua ut enim.</p>
          </div>
          <div className='flex   items-center sm:mb-[60px] mb-10 lg:mb-[128px]'>
            <div className='z-10  relative bg-home-input w-full max-w-[624px]   bg-whidth h-full min-h-[651px] pt-[96px] px-[96px] hidden sss:block '>
              <div className='absolute z-[-10] bg-home-input-blur  w-full max-w-[624px]   bg-whidth h-full min-h-[651px] pt-[96px] px-[96px] hidden sss:block top-0 left-0 '>

              </div>
              <h2 className='text-white text-sm aaa:text-xl ddd:text-3xl  eee:text-[54px] z-50 font-medium ddd:font-semibold leading-10 ddd:leading-[74px] mb-6'>
                Building stellar <br /><br />  websites for <br /><br /> early startups
              </h2>
              <p className='z-50 text-white text-base font-medium leading-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
            </div>
            <div className=' w-full max-w-[624px] mx-auto sss:mx-0 bg-#1C1E53 h-full min-h-[651px]  ddd:py-[50px] ddd:px-[50px] eee:pb-0 px-[25px] py-[25px] eee:pt-[96px] eee:px-[96px]'>
              <h2 className='z-50 text-white text-xl ddd:text-[32px] font-medium leading-10 ddd:leading-[48px] mb-4'>Send inquiry</h2>
              <p className='z-50 text-#F4F6FC text-xs ddd:text-base font-medium leading-5 ddd:leading-7 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>

              <form onSubmit={handleSubmit} className='space-y-4 mb-7'>
                <input value={name}
                  onChange={(e) => setName(e.target.value)} className='text-white pl-8 py-[18px] w-full max-w-[432px] rounded-lg border-[2px] border-white/[0.05] bg-transparent' type="text" placeholder='Your Name' />
                <input value={email}
                  onChange={(e) => setEmail(e.target.value)} className='text-white pl-8 py-[18px] w-full max-w-[432px] rounded-lg border-[2px] border-white/[0.05] bg-transparent' type="email" placeholder='Email' />
                  {error}
                <input value={message}
                  onChange={(e) => setMessage(e.target.value)} className='text-white pl-8 py-[18px] w-full mb-10 max-w-[432px] rounded-lg border-[2px] border-white/[0.05] bg-transparent' type="url" placeholder='Paste your Figma design URL' />

                <button type="submit" className='py-4 mt-10 aaa:px-[51px] px-5 mx-auto  w-full max-w-[200px] aaa:max-w-[432px] block bg-#FCD980 rounded-[41px] text-#1B1C2B text-sm aaa:text-lg font-semibold leading-8'>Send an Inquiry</button>
              </form>

              <Link to="/contact" onClick={handleButtonClick} className='text-white w-full text-xs leading-4 aaa:max-w-[244px] max-w-[164px] font-normal  mx-auto aaa:text-lg aaa:font-medium aaa:leading-8 flex items-center'>
                Get in touch with us
                <svg className='ml-5' xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                  <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#F4F6FC" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className=''>
          <h2 className='text-#282938 text-center www:text-left text-3xl ddd:text-5xl font-semibold leading-[64px] mb-16'>
            Our blog
          </h2>

          <ul className='grid grid-cols-1 www:grid-cols-3 gap-8 space-y-5 www:space-y-0'>
            {
              ourblog.map((blog) => {
                return (
                  <li key={blog.id} className='w-full max-w-[405px] mx-auto www:mx-auto'>
                    <img className='w-full max-w-[405px] mb-10' src={blog.img} alt="img" />
                    <p className='text-#282938 text-sm ddd:text-base font-medium leading-7 opacity-[0.7] mb-4'>{blog.data}</p>
                    <p className='text-#282938 aaa:text-lg text-sm ddd:text-2xl font-medium leading-4 aaa:leading-6 ddd:leading-9 mb-4'>{blog.text}</p>
                    <p className='text-#282938 aaa:text-sm text-xs ddd:text-base leading-5 ddd:leading-7 mb-8'>{blog.p}</p>
                    <Link to={`/our_blog/${blog.id}`} onClick={handleButtonClick} className='text-#282938 text-base font-medium leading-7 flex items-center'>
                      Read More
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
      </div>
    </section>
  )
}

export default HomeAccordion