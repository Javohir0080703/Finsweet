import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { clients } from "../styles";
import next from '../img/next.svg'
import prev from '../img/_.svg'

const Clients = () => {

    const [custom_swiper, set_swiper] = useState({});
    const nextSlide = () => {
        custom_swiper.slideNext();
    };
    const prevSlide = () => {
        custom_swiper.slidePrev();
    };

    return (
        <section className='qqq:py-[128px] eee:py-[50px] py-8   bg-#F4F6FC/[0.5] z-0'>
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
                        onInit={(ev) => {
                            set_swiper(ev);
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {
                            clients.map((slideTitle) => {
                                return (
                                    <SwiperSlide  key={slideTitle.id} >
                                        <p className="w-full max-w-[823px] md:text-[32px] text-base ddd:text-2xl  font-medium leading-6 ddd:leading-[30px] eee:leading-[48px] mb-10">{slideTitle.text}</p>
                                        <div className="flex items-center  justify-between">
                                        <div className="flex items-center ">
                                            <img className="w-full max-w-[58px]     mr-2.5 rounded-[96px]" src={slideTitle.img} alt={slideTitle.name} />
                                            <div>
                                                  <p className="text-#282938 text-lg  whitespace-nowrap font-medium leading-8 ">{slideTitle.name}</p>
                                                  <p className="text-#282938 text-xs font-medium leading-7">{slideTitle.work}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center  justify-center">
                                       
                                            <button onClick={prevSlide} className="block w-full max-w-[40px] aaa:max-w-[61px] py-[10px] aaa:py-[13px] px-[10px] aaa:px-[17.5px] bg-white rounded-[29px] mr-4">
                                                <img className="aaa:w-[20px] w-[12px] mx-auto" src={prev} alt="" />
                                            </button>
                                            <button  onClick={nextSlide} className="block w-full max-w-[40px] aaa:max-w-[61px] py-[10px] aaa:py-[13px] px-[10px] aaa:px-[17.5px] bg-[#5239FA] rounded-[29px]">
                                            <img className="aaa:w-[20px] w-[12px]" src={next} alt="" />
                                            </button>
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