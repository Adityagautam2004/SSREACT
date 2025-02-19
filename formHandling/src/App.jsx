import React from 'react'
import Form from './components/Form'
import Card from './components/card'
import Cards from './components/cards'

function App() {

  return (
    <>
     <div className='w-full h-screen bg-zinc-200 flex items-center jutify-center'>
      <div className='container mx-auto'>
      <Card/> 
      <Cards/>    
      <Form/>

      </div>
     </div>
    </>
  )
}

export default App