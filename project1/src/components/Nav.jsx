import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../utils/Context'
import { Link } from 'react-router-dom'
 
 function Nav() {
    const [products]=useContext(ProductContext)

    let distintCategories = products && products.reduce((acc, cv) => [...acc, cv.category], [])
    distintCategories = [...new Set(distintCategories)]

    const color = ()=>{
        return `rgba(${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},${(Math.random()*255).toFixed()},0.4)`
    }
 

   return (
     <> 
        <nav className='w-[15%] h-full bg-zinc-300 flex flex-col items-center pt-5'> 
        <a className='py-3 px-5 border rounded border-blue-400 text-blue-300' href="/create">
          Add new products
        </a>
        <hr className='my-3 w-[80%]' />
        <h1 className='text-2xl mb-3 w-[80%]'>Category filter</h1>
        <div className='w-[80%]'>

            {distintCategories.map((cat, index) => (
                <Link to={`/?category=${cat}`} className='flex items-center mb-3' key={index}>
                <span style={{backgroundColor : color()}}  className='rounded-full mr-2 w-[15px] h-[15px] ' ></span>{' '}
                {cat}
                </Link>
            ))}
        </div>
      </nav>
     </>
   )
 }
 
 export default Nav