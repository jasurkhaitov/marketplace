import React from 'react'
import { buyer, company, network, partner, socialMedia } from '../utilits/Const'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="">
      <div className='w-full  bg-[#FAFAFA] py-[50px] px-[100px] grid grid-cols-5 gap-[60px] '>
          <ul className='w-[296px]'>
          <h3 className='text-secondText mb-[30px] text-[#171515] '>Покупателям</h3>
              {
                buyer.map((element, value) => { 
                  return <li key={value} className='mb-[15px] text-miniText text-[#999999] '>{element.linkName}</li> 
                })
              }
          </ul>
          <ul className='w-[296px]'>
          <h3 className='text-secondText mb-[30px] text-[#171515] '>Партнёрам</h3>
              {
                partner.map((element, value) => { 
                  return <li key={value} className='mb-[15px] text-miniText text-[#999999] '>{element.linkName}</li> 
                })
              }
          </ul>
          <ul className='w-[296px]'>
          <h3 className='text-secondText mb-[30px] text-[#171515] '>Компания</h3>
              {
                company.map((element, value) => { 
                  return <li key={value} className='mb-[15px] text-miniText text-[#999999] ' ><Link to={element.slug} >{element.linkName}</Link> </li> 
                })
              }
          </ul>
          <ul className='w-[280px]'>
          <h3 className=' text-secondText mb-[30px] text-[#171515] '>Контакты</h3>
              {
                network.map((element, value) => { 
                  return <li key={value} className='mb-[15px] text-miniText text-[#999999] '>{element.linkName}</li> 
                })
              }
          </ul>
          <div className='w-[296px]'>
            <h3 className='text-secondText mb-[30px] text-[#171515] '>Социальные сети</h3>
          <ul className='flex'>
                {
                  socialMedia.map((element, value) => { 
                    return <li key={value} className='mb-[15px] text-miniText text-[#999999] mr-[30px] '>{element.linkName}</li> 
                  })
                }
            </ul>
          </div>
      </div>
        <h4 className='text-miniText text-[#999999] text-center py-[30px]  border-t-[1px] border-[#CCCCCC] '>Milli | Bce права защищены. 2022</h4>   
    </div>

  )
}

export default Footer