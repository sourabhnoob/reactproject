import React from 'react'
import Typed from 'react-typed';
export default function Banner() {
  return (
    <div className='bg-white w-full py-[100px]'>
        <div className='max-width-w-[1240px] mx-auto text-center font-bold mt-7'>
            <div className=' text-xl md:text-2xl mt-7'>
            Learn React with us
            </div>
            <div className='text-[#5972f2] mt-9 text-3xl md:text-5xl'>
            Be an awesome developer
            </div>
            <div className=' text-xl md:text-2xl mt-7'>
            Learn
            <Typed className='pl-2'
            strings ={['ReactJs','TailwindCSS']}
            typeSpeed={40}
            loop={true}
            backSpeed={50}
            />
            
            </div>
            <button className='bg-black text-white p-3 rounded mt-5'>Get started</button>
        </div>
    
    </div>
  )
}
