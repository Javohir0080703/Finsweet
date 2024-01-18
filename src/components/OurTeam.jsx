import React from 'react'
import { ourteamdata } from '../styles'

const OurTeam = () => {
  return (
    <section className='py-[128px] bg-#F4F6FC '>
        <div className='containerb'>
         <h1 className='text-#282938 aaa:text-5xl  text-2xl font-semibold leading-[64px] mb-12 text-center'>Meet our team</h1>

         <ul className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1'>
          {
            ourteamdata.map((e)=>{
              return(
                <li key={e.id} className='w-full mx-auto sss:mx-0  max-w-[200px] aaa:max-w-[296px] bg-white pt-7  aaa:pt-12 mb-4 aaa:pb-8 px-7 aaa:px-11'>
                  <img src={e.img} className='w-full max-w-[168px] mx-auto mb-[30px]' alt={e.title} />
                  <h3 className='text-#1D2130 text-2xl font-medium leading-9 mb-0.5 text-center'>{e.title}</h3>
                  <p className='text-#1D2130 text-base leading-7 text-center'>{e.theme}</p>
                </li>
              )
            })
          }
         </ul>
        </div>
    </section>
  )
}

export default OurTeam