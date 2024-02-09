import React from 'react'
import { procces } from '../styles'
import line from '../img/Line.png'
const Procces = () => {
  return (
    <section className='qqq:py-[128px] eee:py-[50px] py-8 bg-white z-0'>
        <div className='containerb'>
            <h2 className='text-#282938 text-3xl eee:text-5xl font-semibold leading-10 eee:leading-[64px] text-center mb-12'>The process we follow</h2>
            <ul className='grid grid-cols-1 ddd:grid-cols-2 850px:grid-cols-4 gap-[56px]'>
                {
                    procces.map((e)=>{
                        return(
                            <li key={e.id} className='w-full max-w-[272px] mx-auto ddd:mx-0'>
                                <img className='mb-8 w-full max-w-[272px]' src={line} alt="" />
                                <h3 className='text-#282938 text-2xl font-medium leading-9 mb-2'>{e.title}</h3>
                                <p className='text-#282938 text-base leading-7'>{e.text}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default Procces