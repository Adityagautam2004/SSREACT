import React from 'react'
import Form from './components/Form'
import Cards from './components/cards'

function App() {
   const[users , setUsers] = useState([])
  return (
    <>
     <div className='w-full h-screen bg-zinc-200 flex items-center jutify-center'>
      <div className='container mx-auto'>
      <Cards users={users}/>    
      <Form/>

      </div>
     </div>
    </>
  )
}

export default App