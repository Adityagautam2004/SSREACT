import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'

function App() {
  return (
    <>
    <div className='w-full h-screen bg-zinc-900 font-["Poppins", sans-serif]'>
      <Navbar />
      <Work />
    </div>
    </>
  )
}

export default App