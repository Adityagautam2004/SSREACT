import React, { useState } from 'react'
import { IoIosAirplane } from "react-icons/io";

function Card() {
    const [val ,setVal] = useState(false)
  return (
    <>
    <div className='w-full h-screen bg-zinc-300 flex justify-center items-center'>
        <div className='relative w-60 h-32 rounded-md flex overflow-hidden'>
            <img className={`shrink-0  transition-transform duration-700 ease-in-out ${val === false? "-translate-x-[0]" : "-translate-x-[100%]"} w-full h-full object-cover`} src="https://cdni.pornpics.com/460/7/578/36847556/36847556_047_3a9b.jpg" alt="" />

            <img className={`shrink-0 transition-transform duration-700 ease-in-out ${val === false ? "-translate-x-[0]" : "-translate-x-[100%]"} w-full h-full object-cover`} src="https://cdni.pornpics.com/460/7/632/93587224/93587224_071_502b.jpg" alt="" />
            
            <span onClick={()=> setVal(()=> !val)} className='absolute flex items-center rounded-full justify-center bg-[#dadada8b] w-8 h-8 bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[30%]'>
               <IoIosAirplane size={".9em"}/>
            </span>
        
        </div>
        
    </div>
    </>
  )
}

export default Card