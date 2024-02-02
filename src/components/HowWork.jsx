import React from 'react'
import { homework } from '../styles'
import MaskGroup from '../img/Mask Group.png'
import { Link } from 'react-router-dom'

const HowWork = () => {
    const handleButtonClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    return (
        <section className='py-[128px] bg-[#F4F6FC] z-0'>
            <div className='containerb block tabletmax:flex  justify-between'>
                <div className='mb-10 tabletmax:mb-0'>
                    <h2 className='text-#282938 text-3xl aaa:text-5xl font-semibold leading-[64px] mb-4 text-center tabletmax:text-left'>
                        How we work
                    </h2>
                    <p className='text-#282938 text-sm aaa:text-base leading-6 aaa:leading-7 mb-4 text-center tabletmax:text-lef'>Lorem ipsum dolor sit amet, consectetur <br className='hidden aaa:block' /> adipiscing elit, sed do eiusmod tempor.</p>
                    <Link onClick={handleButtonClick} to="/contact" className='text-#2405F2 text-sm  aaa:text-lg font-medium leading-8 flex  items-center  w-full max-w-[188px] aaa:max-w-[244px] mx-auto tabletmax:mx-0'>
                        Get in touch with us
                        <svg className='ml-6' xmlns="http://www.w3.org/2000/svg" width="25" height="12" viewBox="0 0 25 12" fill="none">
                            <path d="M24.5303 6.53033C24.8232 6.23744 24.8232 5.76256 24.5303 5.46967L19.7574 0.696699C19.4645 0.403806 18.9896 0.403806 18.6967 0.696699C18.4038 0.989593 18.4038 1.46447 18.6967 1.75736L22.9393 6L18.6967 10.2426C18.4038 10.5355 18.4038 11.0104 18.6967 11.3033C18.9896 11.5962 19.4645 11.5962 19.7574 11.3033L24.5303 6.53033ZM0 6.75H24V5.25H0V6.75Z" fill="#2405F2" />
                        </svg>
                    </Link>
                </div>

                <ul className='grid grid-cols-1 eee:grid-cols-2 gap-y-12 gap-x-6 w-full max-w-[628px] mx-auto'>
                    {
                        homework.map((work) => {
                            return (
                                <li key={work.id} className='w-full max-w-[303px] mx-auto eee:mx-0' >
                                 <div className=' relative mb-4 w-full max-w-[50px] mx-auto eee:mx-0'>
                                    <img className='bg-#1C1E53 rounded-xl' src={MaskGroup} alt="" />
                                    <span  className=' absolute top-2 left-4  text-white text-lg font-medium leading-8'>{work.number}</span>
                                 </div>
                                    <h3 className='text-#282938 text-xl aaa:text-[32px] text-center eee:text-left font-medium leading-8 aaa:leading-[48px] mb-2'>
                                        {work.title}
                                    </h3>
                                     <p className='text-#282938 aaa:text-base text-sm leading-5 aaa:leading-7 text-center eee:text-left'>{work.text}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default HowWork