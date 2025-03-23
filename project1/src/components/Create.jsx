import React from 'react'

function Create() {
    const [title, settitle] = React.useState('')
    const [price, setprice] = React.useState('')
    const [description, setdescription] = React.useState('')
    const [image, setimage] = React.useState('')
    const [category, setcategory] = React.useState('')
    const AddProductHandler = (e) => {
        e.preventDefault()
        const product = {
            title,
            price,
            description,
            image,
            category
        }
        console.log(product)
        settitle('')
        setprice('')
        setdescription('')
        setimage('')
        setcategory('')
    }
  return (
    <form className='flex flex-col items-center p-[5%] w-screen h-screen' onSubmit={AddProductHandler}>
        <h1 className='mb-5 w-1/2 text-3xl'>Add new Product</h1>
        <input 
            type="text"
            placeholder='Product Name'
            className=' text-1xl bg-zinc-100 rounded  w-1/2 p-3 mb-3'
            onChange={(e) => settitle(e.target.value)}
            value={title}
        />
        <input 
            type="number"
            placeholder='Product Price'
            className=' text-1xl bg-zinc-100 rounded  w-1/2 p-3 mb-3'
            onChange={(e) => setprice(e.target.value)}
            value={price}
        />
        <input
            type="url"
            placeholder='Product Image'
            className=' text-1xl bg-zinc-100 rounded  w-1/2 p-3 mb-3'
            onChange={(e) => setimage(e.target.value)}
            value={image}
        />
        <input 
            type="text"
            placeholder='Product Category'
            className=' text-1xl bg-zinc-100 rounded  w-1/2 p-3 mb-3'
            onChange={(e) => setcategory(e.target.value)}
            value={category}
        />
        <textarea 
            placeholder='Product Description'
            className=' text-1xl bg-zinc-100 rounded  w-1/2 p-3 mb-3'
            onChange={(e) => setdescription(e.target.value)}
            value={description}
            rows='10'
        />
        <button className='bg-blue-500 text-white text-2xl p-3 rounded w-1/4 '  type='submit'>Add Product</button>
    </form>
  )
}

export default Create