import React from 'react'
import { navLinks } from '../constants'

export default function ResponsiveNav({display}) {
  return (
    <div className={`bg-gray-100 w-[90%] h-52 padding-x py-5 z-10 ml-auto mr-auto max-lg:flex-col rounded-xl ${display?'block':'hidden'}`} >
      <ul className='flex-1 text-xl flex-col justify-center items-center  ' >
             {navLinks.map((items)=>(<li className='mt-4' key={items.label} ><a className='font-monts text-lg text-slate-gray errat leading-normal hover:text-xl hover:text-black' href={items.href} >{items.label}</a></li>))}
            </ul>
    </div>
  )
}
