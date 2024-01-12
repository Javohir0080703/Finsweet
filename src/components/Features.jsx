import React from 'react'
import { featur } from '../styles'
const Features = () => {
  return (
    <section className='py-[128px] bg-#F4F6FC'>
        <div className='containerb'>
            <span className='text-#282938 text-base font-medium leading-7 text-center block mb-3'>Features</span>
            <h2 className='eee:text-5xl text-2xl text-center font-semibold leading-[35px] eee:leading-[64px] mb-12'>
            Design that solves <br className='850px:block hidden'/>  problems, one product at <br className='850px:block hidden'/> a time
            </h2>

            <ul className='grid grid-cols-1  eee:grid-cols-2 850px:grid-cols-3 gap-8'>
                {
                    featur.map((e)=>{
                        return(
                            <li className='w-full max-w-[405px] bg-white pt-[58px] pb-12 pl-12 pr-8' key={e.id}>
                                <img className='mb-[22px]' src={e.img} alt="" />
                                <h3 className='text-#282938 text-2xl font-medium leadidng-[36px] mb-3'>
                                    {e.title}
                                </h3>
                                <p className='text-#282938 text-base leading-7  opacity-[0.7]'>{e.text}</p>
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