import React, {useState,} from 'react'
import axios from './Axios'

export const ProductContext = React.createContext()
function Context(props) {
    const [products, setProducts] = useState( JSON.parse(localStorage.getItem('products')) || null)

  // const getproducts = async () => {
  //   try{
  //       const {data} = await axios('/products')
  //       setProducts(data)
  //   } catch (error) {
  //       console.log(error)
  //   }
  // }
  //    console.log(products)

  //   React.useEffect(() => {
  //       getproducts()
  //   }, []) 

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default Context