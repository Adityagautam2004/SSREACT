import React from 'react'

function Marqee({imagesurls}) {
  return (
    <div className='flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden'>
       {imagesurls.map(item => <img src={item} className="flex-shrink-0 w-[6vw]" />)}
       {imagesurls.map(item => <img src={item} className="flex-shrink-0 w-[6vw]" />)}
    </div>
  )
}

export default Marqee