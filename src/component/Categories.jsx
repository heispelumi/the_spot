import React from 'react'
import {categories}from '../data/data.js'
const Categories = () => {
  return (


    <div className='max-w-[1640px] mx-auto px-4  py-16  bg-gray-100' >
  
      <h1 className='text-4xl sm:text-6xl text-yellow-400 text-center font-bold py-6'>Top Rated Menu Items</h1>
      {/* categories */}
      <div className=' grid  md:grid-cols-3 gap-6 py-6 ' >
     {categories.map((item,index)=>(
       <div key={index} className='p-6 flex items-center justify-between bg-white'>
        <h2 className='text-yellow-400 text 2xl font-[poppins]'>{item.name}</h2>
        <img src={item.image} alt={item.name} className='h-[250px] w-full object-cover rounded-md ' />
       </div>
     ))}
      </div>
   
    </div> 
  )
}

export default Categories
