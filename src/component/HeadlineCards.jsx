import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-6 py-16 grid md:grid-cols-3 gap-6'>
       {/* Cards */}
      
       <div className='relative rounded-md'>
        {/* Overlay */}
    
        <div className='absolute w-full h-full bg-black/40 rounded-xl'>
            <p className='text-white text-2xl px-2 pt-4 '>Creamy Shawarma </p>
        
            <button className='bg-white border-white p-2 rounded-md text-black mx-2 absolute bottom-4 right-4 hover:bg-yellow-400 hover:text-white'>Order now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] rounded-xl lg:max-h-[250px] w-full h-full object-cover'  src="https://media.istockphoto.com/id/1181234009/photo/shawarma-with-chicken-on-wooden-board-closeup-with-space-for-text.jpg?s=612x612&w=0&k=20&c=OetSmt2dQ-d92ebEy98kIcaJ7pmdzM9akXaeViDqloQ=" alt="" />
       </div>
       
       
       <div className='relative rounded-md'>
    
        <div className='absolute w-full h-full bg-black/40 rounded-xl'>
            <p className='text-white text-2xl px-2 pt-4 '> Pizza </p>
       
            <button className='bg-white border-white p-2 rounded-md text-black mx-2 absolute bottom-4 right-4 hover:bg-yellow-400 hover:text-white'>Order now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] rounded-xl lg:max-h-[250px] w-full h-full object-cover'  src='https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=800' alt="" />
       </div>
       
       <div className='relative rounded-md'>
        
   
    
        <div className='absolute w-full h-full bg-black/40 rounded-xl'>
            <p className='text-white text-2xl px-2 pt-4 '>Spagetti </p>
           
            <button className='bg-white border-white p-2 rounded-md text-black mx-2 absolute bottom-4 right-4 hover:bg-yellow-400 hover:text-white'>Order now</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] rounded-xl lg:max-h-[250px] w-full h-full object-cover'  src="https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
       </div>
    </div>
  )
}

export default HeadlineCards
