import React from 'react'
import { benefitsdata } from '../styles'

const Benefits = () => {
    return (
        <section className='pt-[128px] bg-white z-0'>
            <div className='containerb'>
                <h2 className='text-#282938 text-xl ddd:text-3xl www:text-5xl font-semibold text-center leading-6 ddd:leading-10 www:leading-[64px] mb-12'>The benefits of working <br /> with us</h2>

                <ul className='grid grid-cols-1 qqq:grid-cols-3 gap-8 mb-12'>
                    {
                        benefitsdata.map((e) => {
                            return (
                                <li className='w-full mx-auto qqq:mx-0 max-w-[405px] bg-#F4F6FC pt-[50px] pb-12 pl-12 pr-8' key={e.id}>
                                    <img className='mb-[22px]' src={e.img} alt="" />
                                    <h3 className='text-#282938 text-lg ddd:text-2xl font-medium leadidng-[36px] mb-3'>
                                        {e.title}
                                    </h3>
                                    <p className='text-#282938 text-xs ddd:text-base leading-5 ddd:leading-7  opacity-[0.7]'>{e.text}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Benefits