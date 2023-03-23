import MenuIcon from '@mui/icons-material/Menu';
import React, { useEffect, useRef, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideNavContent from './SideNavContent';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion"


const HeaderBottom = () => {
    const ref = useRef();
    const [sidebar, setSidebar]=useState(false)
    useEffect(()=>{
        document.body.addEventListener('click',(e)=>{
            if(e.target.contains(ref.current)){
                setSidebar(false)
            }
        })
    },[ref,sidebar])
  return (
    <div className='w-full h-[36px] px-4 bg-amazon_light text-white flex items-center'>
        {/* ===== ListItems start here ===== */}
            <ul className='flex items-center gap-2 text-sm tracking-wide'>
                <li onClick={()=>setSidebar(true)} className='headerHover flex items-center gap-1'><MenuIcon /> All</li>
                <li className='headerHover hidden md:inline-flex'>Today's Deals</li>
                <li className='headerHover hidden md:inline-flex'>Customer Service</li>
                <li className='headerHover hidden md:inline-flex'>Gift Cards</li>
                <li className='headerHover hidden md:inline-flex'>Registry</li>
                <li className='headerHover hidden md:inline-flex'>Sell</li>
            </ul>
        {/* ===== SideNav start here ===== */}
        {
            sidebar && (
                <div className='w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50'>
                    <div className='w-full h-full relative'>
                        <motion.div ref={ref} initial={{x:-500, opacity:0}} animate={{x:0,opacity:1}} transition={{duration:.5}} className='w-[70%] md:w-[350px] h-full bg-white border border-black'>
                            <div className='w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4 '>
                                <AccountCircleIcon />
                                <h3 className='font-titleFont font-bold text-lg tracking-wide'>Hello, Sign in</h3>
                            </div>
                                <SideNavContent 
                                title='Digital Content & Devices' 
                                one='Amazon Music' 
                                tow='Kindle E-readers & Books' 
                                three='Amazon Appstore' />
                                <SideNavContent 
                                title='Shop By Department' 
                                one='Electronics' 
                                tow='Computers' 
                                three='Smart Home' />
                                <SideNavContent 
                                title='Programs & Features' 
                                one='Gift Cards' 
                                tow='Amazon live' 
                                three='International Shopping' />
                                <SideNavContent 
                                title='Help & Settings' 
                                one='Your Account' 
                                 />
                        </motion.div>
                        <span onClick={()=>setSidebar(false)} className='top-0  left-[280px] md:left-[360px] absolute cursor-pointer w-10 h-10 bg-gray-200 flex justify-center items-center text-black border hover:bg-red-500 hover:text-white duration-300 '><CloseIcon/></span>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default HeaderBottom