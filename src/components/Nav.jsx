 import {headerLogo} from '../assets/images'
 import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
import ResponsiveNav from './ResponsiveNav'
import { useState } from 'react'
export default function Nav() {

const [display,setDisplay]=useState(false)
const [topNav,setTopNav]=useState(true)

function navbarOpen(){
  setTopNav((e)=>(!e))
  setDisplay((e)=>(!e))
}

  return (
    <div >
      <header className={`padding-x py-8 ${topNav?'absolute':''} z-10 w-full  `} >
      {/* <header className='padding-x py-8 z-10 w-full  ' > */}

        <nav className='flex justify-between items-center max-container' >
            <a href="/" >
               <img
                src={headerLogo}
                alt='logo'
                width={130}
                height={29}
               />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden' >
             {navLinks.map((items)=>(<li key={items.label} ><a className='font-monts text-lg text-slate-gray errat leading-normal hover:text-black' href={items.href} >{items.label}</a></li>))}
            </ul>
            <div className='focus:ring focus:ring-slate-600 hidden max-lg:block' >
                <img
                   src={hamburger} 
                   alt='hamburger'
                   width={25}
                   height={25}
                   className='cursor-pointer'
                   onClick={navbarOpen}
                />
            </div>
        </nav>
      </header>
      <ResponsiveNav display={display} />
    </div>
  )
}
