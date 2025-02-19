import React, { useState } from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';

function App() {
   
  const data=[
    {image:"https://plus.unsplash.com/premium_photo-1682614326274-cfd671708af7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8" ,name:"chut maar",artist:"Aditya", added: false},
    {image:"https://images.unsplash.com/photo-1521417531039-75e91486cc40?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8" ,name:"chut maar",artist:"Aditya", added: true},
    {image:"https://images.unsplash.com/photo-1505282722405-413748d3de7a?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D" ,name:"chut maar",artist:"Aditya", added: false},
    {image:"https://images.unsplash.com/photo-1517170892483-6c610b295c4a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8" ,name:"chut maar",artist:"Aditya", added: false},
    {image:"https://plus.unsplash.com/premium_photo-1682614326274-cfd671708af7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8" ,name:"chut maar",artist:"Aditya", added: false},
    {image:"https://images.unsplash.com/photo-1521417531039-75e91486cc40?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8" ,name:"chut maar",artist:"Aditya", added: true},
    {image:"https://images.unsplash.com/photo-1505282722405-413748d3de7a?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D" ,name:"chut maar",artist:"Aditya", added: false},
    {image:"https://images.unsplash.com/photo-1517170892483-6c610b295c4a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8" ,name:"chut maar",artist:"Aditya", added: false},
    {image:"https://plus.unsplash.com/premium_photo-1682614326274-cfd671708af7?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8" ,name:"chut maar",artist:"Aditya", added: false},
    {image:"https://images.unsplash.com/photo-1521417531039-75e91486cc40?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8" ,name:"chut maar",artist:"Aditya", added: true},
    {image:"https://images.unsplash.com/photo-1505282722405-413748d3de7a?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2luZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D" ,name:"chut maar",artist:"Aditya", added: false},
    {image:"https://images.unsplash.com/photo-1517170892483-6c610b295c4a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIzfHx8ZW58MHx8fHx8" ,name:"chut maar",artist:"Aditya", added: false},
    
  ];

  const [songData ,setSongData ]=useState(data);
  const handleClick = (index) => {
    setSongData(prevData =>  {
      return prevData.map((item , itemindex) => {
       if(itemindex === index ) 
         return {...item, added: !item.added};
         return item;
      })
   })
  };

  return (
    <>
    <div className='w-full h-screen bg-zinc-300 '>
     <Navbar data={songData}/>
       
       <div className='px-11 flex gap-7 mt-10 flex-wrap'>
         {songData.map((obj,index)=>(
           <Card data={obj} handleClick={handleClick} index={index} key={index} />
         ))}
       </div>
    </div>
    </>
  )
}

export default App;