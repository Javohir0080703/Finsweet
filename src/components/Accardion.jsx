import React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";
import { mainFaqs, } from '../styles';

function Icon({ id, open }) {
    return (
  
      <svg className={`${id === open ? "" : "rotate-45"} h-5 w-5 transition-transform`} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path opacity="0.7" d="M12.1495 13.1605L7.12057 8.1316L1.96717 13.285L0.711315 12.0292L5.86472 6.87575L0.835794 1.84682L1.84269 0.839932L6.87161 5.86886L12.025 0.715453L13.2809 1.9713L8.12746 7.12471L13.1564 12.1536L12.1495 13.1605Z" fill="#282938" />
      </svg>
    );
  }
const Accardion = () => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
   <section className='py-[128px] bg-white z-0'>
    <div className='containerb'>
    <div className='tabletmax:flex block justify-between '>
          <div>
            <h2 className='text-#282938 text-center tabletmax:text-left text-[38px] font-semibold leading-[56px]  mb-4'>
              Frequently <br /> asked questions
            </h2>
            <p className='text-#2405F2 text-lg font-medium leading-8 opacity-[0.87] text-center tabletmax:text-left'>Contact us for more info</p>
          </div>
          <div className='w-full max-w-[843px] mx-auto tabletmax:mx-0 mt-10 tabletmax:mt-0 transition-all'>
            {mainFaqs.slice(0, 5).map((faq) => {
              return (
                <Accordion key={faq.id} open={open === faq.id} icon={<Icon id={faq.id} open={open} />}>
                  <AccordionHeader className="flex items-center text-xs ddd:text-base eee:text-xl  py-5" onClick={() => handleOpen(faq.id)}>
                    <span className='text-#2405F2 text-base eee:text-2xl font-medium leading-4 eee:leading-9'>{faq.number}</span>  {faq.title}
                  </AccordionHeader>
                  <AccordionBody>
                    <p className='text-#282938 transition-none text-sm eee:text-lg font-medium leading-4 eee:leading-8'>{faq.text}</p>
                  </AccordionBody >
                </Accordion>
              );
            })}
          </div>
        </div>
    </div>
   </section>
  )
}

export default Accardion