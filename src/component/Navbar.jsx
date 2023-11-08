import React, { useState } from 'react'
import {AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdFavorite,MdHelp} from 'react-icons/md'
import {FaUserFriends, FaWallet} from 'react-icons/fa'

const Navbar = () => {
const [nav,setNav] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-6'>
    {/* Left */}
    <div className='flex items-center'>
    <div onClick={()=>setNav (!nav)} className='cursor-pointer'> <AiOutlineMenu  size={20}/></div>
    <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>The <span className='font-bold'>spot</span></h1>
    <div className='hidden lg:flex items-center bg-gray-200 p-1 rounded-full'>
        <p className='bg-black text-white rounded-full p-2' >Delivery</p>
        <p className='p-2'>Pickup</p>
    </div>
    </div>
    
    {/* Right */}

    <div className='flex items-center bg-gray-100 rounded-full px-2 w-[150px] sm:w-[350px] lg:w-[450px]'>
       <AiOutlineSearch size={20} className='m-2'/>
        <input  type="text" placeholder='Search foods... ' className='bg-transparent w-full p-2 focus:outline-none' />
    </div>
    <button className=' bg-black text-white p-2 rounded-xl  hidden md:flex  items-center'> 
        <BsFillCartFill className='text-white mr-1'/> Cart
    </button>


    {/* MOBILE */}
     {/* OVERLAY */}
     {nav ?<div className='bg-black/80 fixed top-0 left-0 w-full h-screen z-10'></div>:''}
     
     {/* SIDE NAV */}
     <div className={nav ? 'fixed top-0 left-0 h-screen w-[300px] bg-white z-10 duration-300':'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
    <AiOutlineClose  onClick={()=>setNav (!nav)} className='absolute top-4 right-4 cursor-pointer' size={25} />
    <h1 className='text-3xl p-3'><span className='font-bold'>The</span> spot</h1>

    <nav>
        <ul className='flex flex-col p-4 text-gray-800'>
            <li className='flex items-center text-xl py-4 '><TbTruckDelivery className='mr-3'/>Orders</li>
            <li className='flex items-center text-xl py-4 '><MdFavorite className='mr-3'/>Favourites</li>
            <li className='flex items-center text-xl py-4 '><FaWallet className='mr-3'/>Wallet</li>
            <li className='flex items-center text-xl py-4 '><MdHelp className='mr-3'/>Help</li>
            <li className='flex items-center text-xl py-4 '><AiFillTag className='mr-3'/>Best Onces</li>
            <li className='flex items-center text-xl py-4 '><FaUserFriends className='mr-3'/>Invite Friends</li>
        </ul>
    </nav>
     </div>
    </div>
  )
}
 
export default Navbar
