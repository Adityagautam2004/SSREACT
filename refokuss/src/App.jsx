import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marqees from './components/Marqees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'

function App() {
  const locomotiveScroll=new LocomotiveScroll()
  return (
    <>
    <div className='w-full bg-zinc-900 font-["Poppins", sans-serif]'>
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marqees />
      <Cards />
      <Footer  />
    </div>
    </>
  )
}

export default App