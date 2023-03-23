import React, { useState } from 'react'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {logo} from '../../assets/index'
import { allitems } from '../../constants';
import HeaderBottom from './HeaderBottom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [showAll, setShowAll]=useState(false)
  // const products = useSelector((steat)=>steat.amazonReducer.products)
 
  return (
      <div className='w-full sticky top-0 z-50'> 
        <div className='w-full bg-amazon_blue text-white px-4 py-3 flex items-center gap-4'> 
          {/* ===== Images start here ===== */}
          <Link to='/'>
            <div className='headerHover'>
              <img className='w-24 mt-2' src={logo} alt='' />
            </div>
          </Link>
          {/* ===== Images End here ===== */}
          {/* ===== Deliver start here ===== */}
          <div  className='headerHover hidden lg:inline-block'>
            <LocationOnOutlinedIcon />
            <p className='text-sm text-lightText font-light flex flex-col'>Deliver to {" "} <span className='text-sm font-semibold -mt-1 text-whiteText'>Bangladesh</span></p>
          </div>
          {/* ===== Deliver End here ===== */}
          {/* ===== Sarch start here ===== */}
          <div className='h-10 rounded-md hidden lgl:flex flex-grow relative'>
            <span onClick={()=>{setShowAll(!showAll)}} className='w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md '>All <span><ArrowDropDownOutlinedIcon /> </span></span>
            {
              showAll && (
                <div>
                  <ul className='absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex-col gap-1 z-50'>
                      {
                        allitems.map((itme)=>(
                          <li key={itme._id} className='text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200'>{itme.title}</li>
                        ))
                      }
                  </ul>
                </div>
              )
            }
            <input className='h-full text-base text-amazon_blue flex-grow outline-none px-2' type="text" />
            <span className='h-full w-12 flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] durtion-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md '>
              <SearchOutlinedIcon />
            </span>
          </div>
          {/* ===== Sarch End here ===== */}
          {/* ===== Signin start here ===== */}
          <Link to='/signin'>
            <div className='flex flex-col items-start justify-center headerHover'>
              <p className='text-sm mdl:text-xs text-white mdl:text-lightText font-light'>Hello, sign in</p>
              <p className='text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex'>Accouns & Lists{" "} <span><ArrowDropDownOutlinedIcon /> </span></p>
            </div>
          </Link>
          {/* ===== Signin End here ===== */}
          {/* ===== Order start here ===== */}
          <div className='hidden lgl:flex flex-col items-start justify-center headerHover'>
            <p className='text-xs text-lightText font-light'>Returns</p>
            <p className='text-sm font-semibold -mt-1 text-whiteText'>& Orders</p>
          </div>
          {/* ===== Order End here ===== */}
          {/* ===== Cart start here ===== */}
          <div className='flex items-start justify-center headerHover relative'>
            <ShoppingCartOutlinedIcon />
            <p className='text-xs font-semibold mt-3 text-whiteText'>Cart <span className='absolute text-xs -top-1 left-6 p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center font-semibold'>{products.lenght > 0 ?products.lenght:0 }</span></p>
          </div>
          {/* ===== Cart End here ===== */}
        </div>
        <HeaderBottom />
      </div>
  )
}

export default Header