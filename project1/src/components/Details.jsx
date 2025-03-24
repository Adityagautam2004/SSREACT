import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import { useNavigate } from 'react-router-dom'
 


function Details() {
    const navigate = useNavigate();
    const [ products, setProducts ] = React.useContext(ProductContext);
    const [product, setProduct] = useState(null)
    
    const {id}= useParams()
    // const getsingleproduct = async () => {
    //     try{
    //         const {data} = await axios(`/products/${id}`)
    //         setProduct(data)
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
      if(!product) {
        setProduct(products.filter((product) => product.id == id)[0])
      }

        //getsingleproduct()
    }, [])

    const ProductDeleteHandler = (id) => {
      const FilterProducts = products.filter((product) => product.id !== id)
      setProducts(products)
      localStorage.setItem('products', JSON.stringify(FilterProducts))
      navigate('/')
    }



  return product ? (
    <div className='w-[70%] flex h-full justify-between items-center margin-auto p-[10%]'> 
      <img 
      className='object-contain w-[80%] h-[40%]'
      src={`${product.image}`} 
      alt="" 
      />
      <div className='w-[50%]'>
        <h1 className='text-4xl '>
        {`${product.title}`} 
        </h1>
        <h3 className='text-zinc-400 my-5'>{`${product.category}`} </h3>
        <h2 className='text-red-300 mb-3'>{`${product.price}`} </h2>
        <p className='mb-[5%]'>
        {`${product.description}`} 
        </p>
        <Link to={`/edit/${product.id}`} className='mr-5 py-2 px-5 border rounded border-blue-400 text-blue-300'>
            Edit
        </Link>
        <button 
            onClick={() => ProductDeleteHandler(product.id)} className='py-2 px-5 border rounded border-red-300 text-red-300'>
            Delete
        </button>
      </div>

    </div>
  ): (
    <Loading/>
  )
}

export default Details