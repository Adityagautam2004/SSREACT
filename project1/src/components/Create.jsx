import React from 'react';
import { ProductContext } from '../utils/Context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Create() {
    const navigate = useNavigate();
    const [ products, setProducts ] = React.useContext(ProductContext);
    const [title, setTitle] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [image, setImage] = React.useState('');
    const [category, setCategory] = React.useState('');

  const AddProductHandler = (e) => {
    e.preventDefault();
    if (!title || !price || !description || !image || !category) {
      alert('Please fill all the fields');
      return;
    }
    const product = {
      id: nanoid(),
      title,
      price,
      description,
      image,
      category,
    };
    setProducts([...products, product]);
    localStorage.setItem('products', JSON.stringify([...products, product]));
    toast.success('Product added successfully');
    navigate('/');
  };

  console.log(products);
  return (
    <form className='flex flex-col items-center p-[5%] w-screen h-screen' onSubmit={AddProductHandler}>
      <h1 className='mb-5 w-1/2 text-3xl'>Add new Product</h1>
      <input
        type='text'
        placeholder='Product Name'
        className='text-1xl bg-zinc-100 rounded w-1/2 p-3 mb-3'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type='number'
        placeholder='Product Price'
        className='text-1xl bg-zinc-100 rounded w-1/2 p-3 mb-3'
        onChange={(e) => setPrice(e.target.value)}
        value={price}
      />
      <input
        type='url'
        placeholder='Product Image'
        className='text-1xl bg-zinc-100 rounded w-1/2 p-3 mb-3'
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type='text'
        placeholder='Product Category'
        className='text-1xl bg-zinc-100 rounded w-1/2 p-3 mb-3'
        onChange={(e) => setCategory(e.target.value)}
        value={category}
      />
      <textarea
        placeholder='Product Description'
        className='text-1xl bg-zinc-100 rounded w-1/2 p-3 mb-3'
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        rows='10'
      />
      <button className='bg-blue-500 text-white text-2xl p-3 rounded w-1/4' type='submit'>
        Add Product
      </button>
    </form>
  );
}

export default Create;