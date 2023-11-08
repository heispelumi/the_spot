import React from 'react'

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto  p-8">
        <div className='max-h-[400px] relative'>
      {/* OVERLAY */}
      <div className='absolute w-full h-full text-gray-100 max-h-[400px] bg-black/30 justify-center flex flex-col '>
     <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl px-4 font-bold'>The <span className='text-yellow-400'>Best</span></h1>
     <h1 className='text-4xl sm:text-5xl md:text-6xl px-4 font-bold'> <span className='text-yellow-400'>Foods</span> Delivered</h1>
      </div>
     
      <img className='w-full object-cover max-h-[400px]' src="https://media.istockphoto.com/id/1253882812/photo/fast-food-burger-menu-french-fries-and-ketchup-sauce.jpg?s=612x612&w=0&k=20&c=vlfdHi4u6wb9FTQ8oNnGccO0pgDg68m46rRE_jgaTO8=" alt="" />

      </div>
    </div>
  )
}

export default Hero
