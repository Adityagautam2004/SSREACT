import React, { useState } from 'react';
import { ProductContext } from '../utils/Context';
import { nanoid } from 'nanoid';
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {
    const [ products, setProducts ] = React.useContext(ProductContext);
    const navigate = useNavigate();
    const {id}= useParams()
    const [ product, setProduct ] = useState({
        title: '',
        price: '',
        description: '',
        image: '',
        category: '',

    });

    const ChangeHandler = (e) => {
        setProduct({...product, [e.target.name]: e.target.value})
    }

    React.useEffect(() => {
        
            setProduct(products.filter((product) => product.id == id)[0])
        }, [id])
    
        
  const AddProductHandler = (e) => {
    e.preventDefault();
    if (!product.title || !product.price || !product.description || !product.image || !product.category) {
      alert('Please fill all the fields');
      return;
    }
 
    const pi= products.findIndex((p) => p.id == id);
    const copyData = [...products];
    copyData[pi] = {...products[pi], ...product};

    setProducts(copyData);
    localStorage.setItem('products', JSON.stringify([...products, product]));
    navigate(-1);
  };

  return (
    <>
    <form className='flex flex-col items-center p-[5%] w-screen h-screen' onSubmit={AddProductHandler}>
      <h1 className='mb-5 w-1/2 text-3xl'>Edit Product</h1>
      <input
        type='text'
        placeholder='Product Name'
        className='text-1xl bg-zinc-100 rounded w-1/2 p-3 mb-3'
        name="title"
        onChange={ChangeHandler}
        value={product && product.title}
      />
      <input
        type='number'
        placeholder='Product Price'
        className='text-1xl bg-zinc-100 rounded w-1/2 p-3 mb-3'
        name="price"
        onChange={ChangeHandler}
        value={product && product.price}
      />
      <input
        type='url'
        placeholder='Product Image'
        className='text-1xl bg-zinc-100 rounded w-1/2 p-3 mb-3'
        name="image"
        onChange={ChangeHandler}
        value={product && product.image}
      />
      <input
        type='text'
        placeholder='Product Category'
        className='text-1xl bg-zinc-100 rounded w-1/2 p-3 mb-3'
        name="category"
        onChange={ChangeHandler}
        value={product && product.category}
      />
      <textarea
        placeholder='Product Description'
        className='text-1xl bg-zinc-100 rounded w-1/2 p-3 mb-3'
        name="description"
        onChange={ChangeHandler}
        value={product && product.description}
        rows='10'
      />
      <button className='bg-blue-500 text-white text-2xl p-3 rounded w-1/4' type='submit'>
        Edit Product
      </button>
    </form>
    </>
  )
}

export default Edit