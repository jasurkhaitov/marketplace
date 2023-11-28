import React, { useContext, useState } from 'react'
import { icons } from '../utilits/Icon'
import { part } from '../utilits/Const'
import { Contexts } from '../Context/Context'
import { style } from '../utilits/Style'
import { Link } from 'react-router-dom'

export default function Navbar() {

  const {activePart, setActivePart} = useContext(Contexts)
  const [catalog, setCatalog] = useState(false)

  return (
    <nav className=' bg-FgrayWhite'>
        <div className='border-b-[1px] border-BorderColor'>
          <div className='xxl:px-[50px] m-auto container'>
            <div className='py-2 flex items-center justify-between'>

              <div className='flex items-center justify-start gap-[30px]'>
                <form action="#!" className='flex items-center justify-center gap-[5px]'>
                  <label htmlFor="lang">{icons.language}</label>
                  <select name="language" id="lang" className='w-[90px] text-miniText text-globalBlack bg-transparent focus:outline-none'>
                    <option value="Русский" className='bg-transparent'>Русский</option>
                    <option value="English" className='bg-transparent'>English</option>
                    <option value="Uzbek" className='bg-transparent'>Uzbek</option>
                  </select>
                </form>

                {
                  part.map((element, value) => {
                    return (
                      <button key={element.value} className={`${activePart === element.slug ? 'border-globalGreen text-globalGreen' : 'border-transparent text-gray'} rounded-[4px] text-miniText py-[5px] px-[10px] border-[1px]`} onClick={() => setActivePart(element.slug)}>
                        {element.linkName}
                      </button>
                    )
                  })
                }
              </div>

              <div className='flex items-center justify-end gap-[30px]'>
                <a href="tel:+99 899 999-99-99" className='text-miniText text-gray'>+998 99 999-99-99</a>
                <p className='text-miniText text-gray cursor-pointer'>Связаться с нами</p>
              </div>

            </div>
          </div>

        </div>

        <div className='xxl:px-[50px] m-auto container'>

          <div className='py-[15px] flex items-center justify-between'>

            <a href="/" className='text-logo text-globalGreen uppercase'>Logo</a>

            <button className={`${style.button}`} onClick={() => setCatalog(!catalog)}> <span className='w-[20px]'>{catalog ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#FAFAFA" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12"/></svg> : <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none"> <path d="M21.3335 7.75H3.3335C2.9235 7.75 2.5835 7.41 2.5835 7C2.5835 6.59 2.9235 6.25 3.3335 6.25H21.3335C21.7435 6.25 22.0835 6.59 22.0835 7C22.0835 7.41 21.7435 7.75 21.3335 7.75Z" fill="#FAFAFA"/> <path d="M21.3335 12.75H3.3335C2.9235 12.75 2.5835 12.41 2.5835 12C2.5835 11.59 2.9235 11.25 3.3335 11.25H21.3335C21.7435 11.25 22.0835 11.59 22.0835 12C22.0835 12.41 21.7435 12.75 21.3335 12.75Z" fill="#FAFAFA"/> <path d="M21.3335 17.75H3.3335C2.9235 17.75 2.5835 17.41 2.5835 17C2.5835 16.59 2.9235 16.25 3.3335 16.25H21.3335C21.7435 16.25 22.0835 16.59 22.0835 17C22.0835 17.41 21.7435 17.75 21.3335 17.75Z" fill="#FAFAFA"/> </svg>}</span> Каталог</button>

            <form action="#!" className='w-[33%] relative'>
              <label htmlFor="search" className='absolute top-1/2 -translate-y-1/2 right-[20px]'>{icons.searchNavbar}</label>
              <input type="text" id='search' className={`${style.inputNavbar}`} placeholder='Поиск товаров' />
            </form>

            <ul className='flex items-center justify-end gap-2'>
              <li>
                <Link className={`${style.navbarLink}`} to={'/discount'}>{icons.discount}
                <span>Акции</span></Link>
              </li>
              <li>
                <Link className={`${style.navbarLink}`} to={'/liked'}>{icons.liked}
                <span>Избранные</span></Link>
              </li>
              <li>
                <Link className={`${style.navbarLink}`} to={'/chosen'}>{icons.chosen}
                <span>Корзинка</span></Link>
              </li>
              <li>
                <Link className={`${style.navbarLink} rounded-[4px] border-[1px] border-globalGreen text-globalGreen`} to={'/profile'}>{icons.profile}
                <span>Профиль</span></Link>
              </li>
            </ul>

          </div>
          
        </div>
    </nav>
  )
}