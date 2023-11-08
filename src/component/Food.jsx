import React, { useState } from 'react'
import {data} from '../data/data.js'

const Food = () => {
const [food,setFood]= useState(data)
// Filter Type Burgers/Pizza/Fastfood
const filterType = category =>{
    setFood(
        data.filter((item)=>{
        return item.category === category
        })
    );
};

const filterPrice = price =>{
    setFood(
        data.filter((item)=>{
            return item.price === price
        })
    )
}




  return (
    <div className='max-w-[1640px] mx-auto px-4 py-16  '>
      <h1 className='text-yellow-400 text-4xl sm:text-6xl font-bold text-center'>Top Rated Menu items</h1>

      {/* filter row */}
      <div className='flex flex-col lg:flex-row justify-between py-6  '>
        {/* filter type */}
        <div  >
        <p className='font-bold text-gray-700 p-3'> Filter Type</p>
        <div className='flex flex-row gap-x-2  mx-auto'>
        <button  onClick={()=> setFood(data)}className='p-3 border border-yellow-400  bg-white text-yellow-400 hover:bg-yellow-400 hover:text-white rounded-xl'>All</button>
        <button onClick={() => filterType('burger')} className='p-1 border border-yellow-400  bg-white text-yellow-400 hover:bg-yellow-400 hover:text-white rounded-xl'>Burgers</button>
        <button onClick={() => filterType('pizza')} className='p-1 border border-yellow-400  bg-white text-yellow-400 hover:bg-yellow-400 hover:text-white rounded-xl'>Pizzas</button>
        <button onClick={() => filterType('Fast food')} className='p-1 border border-yellow-400  bg-white text-yellow-400 hover:bg-yellow-400 hover:text-white rounded-xl'>Fast food</button>
        <button onClick={() => filterType('Smoothie')} className='p-1 border border-yellow-400  bg-white text-yellow-400 hover:bg-yellow-400 hover:text-white rounded-xl'>Smoothie</button>
        
        </div>
        </div>
        {/* filter price */}
        <div>
            <p className='font-bold text-gray-700 p-3'>Filter Price</p>
            <div className='flex  gap-x-2 flex-wrap max-w-[390px] w-full'>
         <button onClick={()=> filterPrice('4000₦')} className='p-2  border border-yellow-400  bg-white text-yellow-400 hover:bg-yellow-400 hover:text-white rounded-xl'>4000₦</button>
         <button onClick={()=> filterPrice('5000₦')} className='p-2 border border-yellow-400  bg-white text-yellow-400 hover:bg-yellow-400 hover:text-white rounded-xl'>5000₦</button>
         <button onClick={()=> filterPrice('8000₦')} className='p-2 border border-yellow-400  bg-white text-yellow-400 hover:bg-yellow-400 hover:text-white rounded-xl'>8000₦ </button>
         <button onClick={()=> filterPrice('10000₦')} className='p-2 border border-yellow-400  bg-white text-yellow-400 hover:bg-yellow-400 hover:text-white rounded-xl'>10000₦</button>
         </div>
        </div>
      </div>
      {/* display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
    {food.map((item,index)=> (
        <div key={index} className='border shadow-lg rounded-xl hover:scale-105 duration-500'>
            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
            <div className='p-2 flex justify-between'> 
                <p className='font-bold'>{item.name}</p>
                <p><span className= 'bg-yellow-400 text-white p-1 border rounded-md cursor-pointer m-1'>{item.price}</span>  </p>
            </div>
        </div>
    ))}
      </div>

    </div>
  )
}

export default Food