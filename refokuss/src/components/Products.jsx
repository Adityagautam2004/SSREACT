import React from 'react'
import Product from './Product'

function Products() {
    var products = [
        {title: "arqitel", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam nostrum ut nam dolores doloribus quos ipsum itaque. Odit nulla similique !" , live : true , case: false},
        {title: "TTR", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam nostrum ut nam dolores doloribus quos ipsum itaque. Odit nulla similique !" , live : true , case: false},
        {title: "YIR 2022", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam nostrum ut nam dolores doloribus quos ipsum itaque. Odit nulla similique !" , live : true , case: true},
        {title: "Yahoo", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam totam nostrum ut nam dolores doloribus quos ipsum itaque. Odit nulla similique !" , live : true , case: true},  
    ]
  return (
    <div className='mt-32'>
        {products.map((val, index ) => 
            <Product val={val}  />
        )}
    </div>
  )
}

export default Products