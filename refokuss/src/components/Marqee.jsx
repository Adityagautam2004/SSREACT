import React from 'react'
import {motion} from 'framer-motion'

function Marqee({imagesurls , direction}) {
  return (
    <div className='flex flex w-full py-8  whitespace-nowrap overflow-hidden'>
      <motion.div initial={{x:direction==='left' ? '0' : '-100%'}} animate={{x:direction==='left' ? '-100%' : '0'}} transition={{ease:"linear" , duration: 15 , repeat: Infinity} }
      className='flex flex-shrink-0 gap-10 py-7 pl-10 '> 
        {imagesurls.map((item, index) => <img key={index} src={item} alt='marqee' className='' />)}
      </motion.div>
      <motion.div initial={{x:direction==='left' ? '0' : '-100%'}} animate={{x:direction==='left' ? '-100%' : '0'}} transition={{ease:"linear" , duration: 15 , repeat: Infinity} }
      className='flex flex-shrink-0 gap-10 py-7 pl-10'> 
        {imagesurls.map((item, index) => <img key={index} src={item} alt='marqee' className='' />)}
      </motion.div>
 
    </div>
  )
}

export default Marqee