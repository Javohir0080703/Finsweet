import React from 'react'
import { faqdata } from '../styles';
import { useParams } from 'react-router-dom';
import LetsBuild from '../components/LetsBuild';
import Cta from '../components/Cta'
const FaqDetail = () => {
    const { id } = useParams();
    const faqData = faqdata.find((faq) => faq.id.toString() === id);
    return (
       <div>
         <section className='py-[128px] bg-white z-0'>
            <div className='w-full max-w-[1064px] mx-auto px-5'>
            <p className='text-#282938 text-center 850px:text-left text-base aaa:text-xl ddd:text-2xl font-medium leading-5 aaa:leading-9 opacity-[0.8] mb-3'>{faqData.detailTitle}</p>
            <h2 className='text-#282938 text-center 850px:text-left text-xl aaa:text-3xl ddd:text-5xl font-semibold leading-6 aaa:leading-10 ddd:leading-[64px] mb-4 850px:w-full 850px:max-w-[646px]'>{faqData.detailTheme}</h2>
            <p className='text-#282938 text-center 850px:text-left text-xs aaa:text-sm ddd:text-base font-medium 850px:w-full 850px:max-w-[817px] mb-12'>{faqData.detailText}</p>
            <img className='w-full max-w-[1064px] border-[30px] 640px:border-[60px] border-[#F4EDE1] mb-12' src={faqData.img} alt="detailimg" />
            <ul className='850px:flex block space-y-8 850px:space-y-0 items-center justify-between pb-8 border-b border-#282938/[0.3] mb-24'>
                <li>
                    <p className='text-#282938 text-base font-medium leading-7 mb-1'>Client</p>
                    <p className='text-#282938 text-2xl font-medium leading-9 '>{faqData.detailClient}</p>
                </li>
                <li>
                    <p className='text-#282938 text-base font-medium leading-7 mb-1'>Service</p>
                    <p className='text-#282938 text-2xl font-medium leading-9 '>{faqData.detailService}</p>
                </li>
                <li>
                    <p className='text-#282938 text-base font-medium leading-7 mb-1'>Deliverable</p>
                    <p className='text-#282938 text-2xl font-medium leading-9 '>{faqData.detailDeliverable}</p>
                </li>

            </ul>
            <h2 className='text-#282938  text-center 850px:text-left text-2xl aaa:text-[38px] font-semibold leading-7 aaa:leading-[56px] mb-3'>About the project</h2>
            <p className='text-#282938 text-center 850px:text-left text-sm  ddd:text-base leading-6 ddd:leading-7 opacity-[0.7] w-full max-w-[834px] mb-6'>{faqData.detailAbout}</p>
            <ul className='space-y-4 pl-4 mb-16'>
                <li className='list-disc text-#282938 text-base leading-7 opacity-[0.7] '>
                      {faqData.detailAbout1}
                </li>
                <li className='list-disc text-#282938 text-base leading-7 opacity-[0.7] '>
                      {faqData.detailAbout2}
                </li>
                <li className='list-disc text-#282938 text-base leading-7 opacity-[0.7] '>
                      {faqData.detailAbout3}
                </li>
                <li className='list-disc text-#282938 text-base leading-7 opacity-[0.7] '>
                      {faqData.detailAbout4}
                </li>
                
            </ul>
            <img className='w-full max-w-[840px]  border-[30px] 640px:border-[60px] border-[#98B1C6] mb-16' src={faqData.detailimg} alt="detailimg" />
            <h2 className='text-#282938 text-center 850px:text-left text-[38px] font-semibold leading-[56px] mb-3'>How we do it</h2>
            <p className='text-#282938 text-center 850px:text-left text-base leading-7 opacity-[0.7] w-full max-w-[834px] mb-6'>{faqData.detailHow}</p>
            <ul className='space-y-4 pl-4 mb-16'>
                <li className='list-disc text-#282938 text-base leading-7 opacity-[0.7] '>
                      {faqData.detailHow1}
                </li>
                <li className='list-disc text-#282938 text-base leading-7 opacity-[0.7] '>
                      {faqData.detailHow2}
                </li>
                <li className='list-disc text-#282938 text-base leading-7 opacity-[0.7] '>
                      {faqData.detailHow3}
                </li>
                <li className='list-disc text-#282938 text-base leading-7 opacity-[0.7] '>
                      {faqData.detailHow4}
                </li>
                
            </ul>
            </div>
        </section>
        <LetsBuild/>
        <Cta/>
       </div>

    )
}

export default FaqDetail