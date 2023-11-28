import React from 'react'

export default function HomeCarousel() {
  return (
    <div className='mt-[50px]'>
        <div className='xxl:px-[50px] m-auto container flex items-start justify-between gap-[30px]'>
            <div className='w-[70%]'>
                <h2 className='text-secondText text-globalBlack'>Будьте в курсе происходящего</h2>
            </div>

            <div className='w-[30%]'>
                <h2 className='text-secondText text-globalBlack'>Товары дня</h2>
            </div>
        </div>
    </div>
  )
}