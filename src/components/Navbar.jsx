import React from 'react'
import { icons } from '../utilits/Icon'

export default function Navbar() {
  return (
    <nav className='xxl:px-[50px] bg-FgrayWhite'>
        <div className='m-auto container'>

          <div className='py-2'>

            <div className='flex items-center justify-start gap-[30px]'>
              <form action="#!" className='flex items-center justify-center gap-[5px]'>
                <label htmlFor="lang">{icons.language}</label>
                <select name="language" id="lang" className='w-[90px] text-miniText text-globalBlack bg-transparent focus:outline-none'>
                  <option value="Русский" className='bg-transparent'>Русский</option>
                  <option value="English" className='bg-transparent'>English</option>
                  <option value="Uzbek" className='bg-transparent'>Uzbek</option>
                </select>
              </form>

              <button>Магазины</button>
              <button>Стать продавцом</button>
            </div>

          </div>

        </div>
    </nav>
  )
}