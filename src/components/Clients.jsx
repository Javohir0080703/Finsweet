import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { clients } from "../styles";

const Clients = () => {

    return (
        <section className='py-[129px]   bg-#F4F6FC/[0.5] z-0'>
            <div className='containerb block sss:flex justify-between'>
                <div>
                    <h2 className='text-#282938 text-center sss:text-left text-2xl ddd:text-[38px] font-semibold leading-8 ddd:leading-[56px] mb-4 '>
                        What our clients <br className="hidden ddd:block" /> say about us
                    </h2>
                    <p className='text-#282938 text-base leading-7 text-center sss:text-left mb-10 sss:mb-0'>Lorem ipsum dolor sit amet, consectetur <br className="hidden ddd:block" /> adipiscing elit sed.</p>
                </div>
                <div className="w-full max-w-[843px] mx-auto relative">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {
                            clients.map((slideTitle) => {
                                return (
                                    <SwiperSlide  key={slideTitle.id} >
                                        <p className="w-full max-w-[823px] md:text-[32px] text-base ddd:text-2xl  font-medium leading-6 ddd:leading-[30px] eee:leading-[48px] mb-10">{slideTitle.text}</p>
                                        <div className="flex items-center ">
                                            <img className="w-full max-w-[58px]     mr-2.5 rounded-[96px]" src={slideTitle.img} alt={slideTitle.name} />
                                            <div>
                                                  <p className="text-#282938 text-lg font-medium leading-8 ">{slideTitle.name}</p>
                                                  <p className="text-#282938 text-xs font-medium leading-7">{slideTitle.work}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Clients