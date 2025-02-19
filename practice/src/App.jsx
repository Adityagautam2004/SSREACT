import Addfreind from './components/Addfreind'
// import Card from './components/Card'
import React, { useState } from 'react'



function App() {
  const raw = [
    {name: 'John Doe', profession: 'painter' , image :"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , freinds: false},
    {name: 'Jane Doe', profession: 'chutia' , image : "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , freinds: false},
    {name: 'Suyash', profession: 'gand marwa' , image :"https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8fHww" , freinds: false},
    {name: 'kanhaiya', profession: 'tel chatai' , image : "https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" , freinds: false},
    {name: 'Shubham', profession: 'harami' , image : "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" , freinds: false},
  ];
  //  const handleAddFriend = (cardindex) => {
  //   setdata((prev)=>{
  //     return prev.map((item,index)=>{
  //       if(index === cardindex){
  //         return {...item, freinds: !item.freinds}
  //       }
  //       return item; 
  //     })
  //  })
  // }
  //  const[realdata , setdata] = useState(data);
  const [data ,setData] = useState(raw);

  const handleClick= (changingindex) => {
    setData((prev)=>{
      return prev.map((item,index)=>{
        if(index === changingindex) return {...item, freinds: !item.freinds};
        return item;
      })
    })
  }

  return (
    <>
     <div className='w-full h-screen bg-zinc-400 flex gap-4 items-center justify-center'>
      {data.map((item,index)=> (
        <Addfreind key={index} index= {index} handleCLick={handleClick} data={item}/>
      ))}

     </div>
    </>
  )
}

export default App;
