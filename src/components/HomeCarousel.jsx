import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';     
import { style } from '../utilits/Style';
import SliderOneImg from '../assets/img/carouselImg.png'
import ItemImg from '../assets/img/itemImg.png'

export default function HomeCarousel() {
  return (
    <div className='my-[50px] firstSlider'>
        <div className='xxl:px-[50px] m-auto container flex items-start justify-between gap-[30px]'>
            <div className='w-[75%] relative'>
                <h2 className='text-secondText text-globalBlack'>Будьте в курсе происходящего</h2>

                <Swiper slidesPerView={1} spaceBetween={50} loop={true} pagination={{ clickable: true, }} navigation= {true} modules={[Pagination, Navigation]} className="mySwiper border-[1px] border-BorderColor rounded-[10px] mt-[50px] text-center">
                  <SwiperSlide className={`${style.sliderItem}`}>
                    <div className='flex items-center gap-[30px] text-start'>
                      <div>
                        <h2 className='text-globalBlack text-sliderText'>Тяжёлое машиностроение — это вам не песнь светлого будущего</h2>
                        <p className='mt-[10px] pr-[80px] mb-[40px] text-miniText text-globalBlack'>Вот вам яркий пример современных тенденций — экономическая повестка сегодняшнего дня создаёт.</p>
                        <button className={`${style.button}`}>Узнать больше</button>
                      </div>
                      <img src={SliderOneImg} className='w-[300px]' alt="phone banner" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className={`${style.sliderItem}`}>
                    <div className='flex items-center gap-[30px] text-start'>
                      <div>
                        <h2 className='text-globalBlack text-sliderText'>Тяжёлое машиностроение — это вам не песнь светлого будущего</h2>
                        <p className='mt-[10px] pr-[80px] mb-[40px] text-miniText text-globalBlack'>Вот вам яркий пример современных тенденций — экономическая повестка сегодняшнего дня создаёт.</p>
                        <button className={`${style.button}`}>Узнать больше</button>
                      </div>
                      <img src={SliderOneImg} className='w-[300px]' alt="phone banner" />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className={`${style.sliderItem}`}>
                    <div className='flex items-center gap-[30px] text-start'>
                      <div>
                        <h2 className='text-globalBlack text-sliderText'>Тяжёлое машиностроение — это вам не песнь светлого будущего</h2>
                        <p className='mt-[10px] pr-[80px] mb-[40px] text-miniText text-globalBlack'>Вот вам яркий пример современных тенденций — экономическая повестка сегодняшнего дня создаёт.</p>
                        <button className={`${style.button}`}>Узнать больше</button>
                      </div>
                      <img src={SliderOneImg} className='w-[300px]' alt="phone banner" />
                    </div>
                  </SwiperSlide>
                </Swiper>
            </div>

            <div className='w-[25%] secondSlider'>
              <h2 className='text-secondText text-globalBlack'>Товары дня</h2>

              <Swiper slidesPerView={1} spaceBetween={50} loop={true} pagination={{ clickable: true, }} navigation= {true} modules={[Pagination, Navigation]} className="mySwiper rounded-[10px] mt-[50px] text-center border-[1px] border-BorderColor">
                  <SwiperSlide className={`${style.sliderSecondItem}`}>
                    <div className='flex flex-col items-center text-center'>
                      <img src={ItemImg} className='w-[full]' alt="phone banner" />
                      <div>
                        <p className='mt-[0px] mb-[10px] text-miniText text-globalBlack'>MacBook Pro 13 inch 8/256/A2338</p>
                        <h2 className='text-globalBlack text-secondText pb-[32px]'>14 000 000 сум</h2>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className={`${style.sliderSecondItem}`}>
                    <div className='flex flex-col items-center text-center'>
                      <img src={ItemImg} className='w-[full]' alt="phone banner" />
                      <div>
                        <p className='mt-[0px] mb-[10px] text-miniText text-globalBlack'>MacBook Pro 13 inch 8/256/A2338</p>
                        <h2 className='text-globalBlack text-secondText'>14 000 000 сум</h2>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide className={`${style.sliderSecondItem}`}>
                    <div className='flex flex-col items-center text-center'>
                      <img src={ItemImg} className='w-[full]' alt="phone banner" />
                      <div>
                        <p className='mt-[0px] mb-[10px] text-miniText text-globalBlack'>MacBook Pro 13 inch 8/256/A2338</p>
                        <h2 className='text-globalBlack text-secondText'>14 000 000 сум</h2>
                      </div>
                    </div>
                  </SwiperSlide>
              </Swiper>
            </div>
        </div>
    </div>
  )
}