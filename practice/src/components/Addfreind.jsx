import React from 'react'

function Addfreind({data, index ,handleCLick}) {
    const {name, profession, freinds, image} = data;
  return (
    <div className='w-52 bg-white rounded-md overflow-hidden'>
        <div className='w-full h-40 bg-sky-200'>
            <img className='w-full h-full object-cover object-[center_top]' src={image} alt="" />
        </div>
        <div className='w-full p-3'>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <h5 className='text-xs'>{profession}</h5>
            <button  onClick={()=>handleCLick(index)} className={`mt-4 px-3 py-1 text-xs text-white ${freinds ? "bg-green-600" : "bg-blue-500"} font-semibold rounded-md`}>{freinds === true? "Freinds" : "Add Freind"}</button>
        </div>
    </div>
  )
}

export default Addfreind