import React from 'react'
import HomeCarousel from '../components/HomeCarousel'
import { topCategory } from '../utilits/Const'

export default function Home() {
  return (
    <div>
      <HomeCarousel/> 

      <div className='xxl:px-[50px] m-auto container pb-[50px]'>
        <div className='flex items-center justify-between mb-[35px]'>
          <h2 className='text-sliderText text-globalBlack'>Лучшие категории</h2>
          <button className=' text-miniText text-globalGreen'>Все категории</button>
        </div>

        <div className='grid grid-cols-6 gap-[30px]'>
          {
            topCategory.map((element, value) => <div key={element.value}>
              <img src={element.img} className='rounded-[10px]' alt="" />
              <h2>{element.title}</h2>
            </div>)
          }
        </div>
      </div>
    </div>
  )
}