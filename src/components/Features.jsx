import React from 'react'
import { featur } from '../styles'
const Features = () => {
  return (
    <section className='qqq:py-[128px] eee:py-[50px] py-8 bg-#F4F6FC z-0'>
        <div className='containerb'>
            <span className='text-#282938 text-base font-medium leading-7 text-center block mb-3'>Features</span>
            <h2 className='eee:text-5xl text-lg aaa:text-2xl text-center font-semibold leading-6 aaa:leading-[35px] eee:leading-[64px] mb-12'>
            Design that solves <br className='850px:block hidden'/>  problems, one product at <br className='850px:block hidden'/> a time
            </h2>

            <ul className='grid grid-cols-1  eee:grid-cols-2 850px:grid-cols-3 gap-8'>
                {
                    featur.map((e)=>{
                        return(
                            <li key={e.id} className='w-full max-w-[405px] bg-white pt-10 aaa:pt-[58px] pb-12 pl-7 aaa:pl-12 pr-5 aaa:pr-8' >
                                <img className='mb-[22px] w-full aaa:max-w-[32px] max-w-[20px]' src={e.img} alt={e.title} />
                                <h3 className='text-#282938 text-lg aaa:text-2xl font-medium leading-5 aaa:leadidng-[36px] mb-3'>
                                    {e.title}
                                </h3>
                                <p className='text-#282938 aaa:text-base text-xs leading-5 aaa:leading-7  opacity-[0.7]'>{e.text}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default Features