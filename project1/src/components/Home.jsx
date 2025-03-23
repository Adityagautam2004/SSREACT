import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Nav from './Nav'
import { useContext ,useEffect ,useState } from 'react'
import { ProductContext } from '../utils/Context'
import Loading from './Loading'
import axios from '../utils/Axios'


function Home() {
    const [products]=useContext(ProductContext)

    const {search} =useLocation()
    const category = decodeURIComponent(search.split('=')[1])

    const [filteredProducts, setFilteredProducts] = useState(null)

    const getproductscategory = async () => {
      try{
        const {data} = await axios.get(`/products/category/${category}`)
        setFilteredProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
      if(!filteredProducts || category == 'undefined') setFilteredProducts(products)
      if(category != "undefined" )getproductscategory()
    }, [category ,products])

  return products ? (
    <>
        <Nav />

        <div className='w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto'>
        {filteredProducts &&
        filteredProducts.map((products, index) => (
             <Link key={products.id} to={`/details/${products.id}`} className=' mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justifty-center items-center'>
             <div 
             className='hover:scale-110 w-full h-[80%] bg-contain bg-no-repeat bg-center '
             style={{backgroundImage: `url(${products.image})`
             }}>
          </div>
          <h1 className='hover:text-blue-400'>
            {products.title}
          </h1>
        </Link>
        
        ))}
        
       
      </div>
    </>
  ) : (
   <Loading />
  );
}

export default Home