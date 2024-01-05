import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";


export default function Header() {

const [toggle, setToggle] = useState(false)


  return (
    <>
    <div className='bg-[#5972f2] p-4'>
      <div className='max-w-[1240px]  flex justify-between items-center mx-auto py-[10px]'>
          <div className='text-3xl font-bold'>
            React Page
          </div>
         
          {
            toggle ?
            <AiOutlineMenu  onClick={()=>setToggle(!toggle)}  className='text-white text-2xl md:hidden block'/>
            :
            <AiOutlineClose onClick={()=>setToggle(!toggle)}  className='text-white text-2xl md:hidden block'/>

          }


          <ul className='hidden md:flex text-white gap-10'>
              <li>
                  Home
              </li>
              <li>
                  Company
              </li>
              <li>
                  Resources
              </li>
              <li>
                  About
              </li>
              <li>
                  Contact
              </li>
          </ul>

          <ul className={`duration-300 md:hidden w-full h-screen text-center bg-slate-300 text-zinc-700	 fixed  top-[88px] p-4
                          ${toggle ? 'left-[0]': 'left-[-100%] '}              
          `}>
              <li className='p-1'>
                  Home
              </li>
              <li className='p-1'>
                  Company
              </li>
              <li className='p-1'>
                  Resources
              </li>
              <li className='p-1'>
                  About
              </li>
              <li className='p-1'>
                  Contact
              </li>
          </ul>
      </div>
    
    
    </div>

    </>
  )
}
