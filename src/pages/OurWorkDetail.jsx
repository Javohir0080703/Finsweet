import React from 'react'
import { useParams } from 'react-router-dom';
import { ourWorkDetailData } from '../styles';

const OurWorkDetail = () => {
    const { id } = useParams();
    const faqData = ourWorkDetailData.find((faq) => faq.id.toString() === id);
    return (
        <div>
            <section className='py-[108px]'>
                <div className='containerb'>
                    <h1 className='text-center 640px:text-[75px] font-semibold mb-8 text-5xl'>About project</h1>
                    <p className='640px:text-[60px] text-2xl ddd:text-4xl leading-7 ddd:leading-10 640px:leading-[60px] font-medium text-center mb-10'>{faqData.title}</p>
                    <img className='w-full max-w-[1064px] border-[30px] 640px:border-[60px] border-[#F4EDE1] mb-12 mx-auto' src={faqData.img} alt="detailimg" />
                    <p className='text-#282938 text-center text-2xl font-medium  mb-12 mx-auto'>{faqData.text}</p>
                </div>
            </section>
        </div>
    )
}

export default OurWorkDetail