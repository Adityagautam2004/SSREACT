import React from 'react'

function SongsCard() {

  const data=[
    {name: 'Mahiya Ve', description: 'Kuch bhi likh do bhai kya hi krna hai'},
    {name: 'Fuddi faad', description: 'Kuch bhi likh do bhai kya hi krna hai'}
  ]

  const handleClickDownload = ()=>{alert("your file is downloading...")}   


  return (
    
    <div className='w-full h-screen bg-zinc-500 flex flex-col gap-4 justify-center items-center'>
        {data.map((item, index) => (
          <div className='w-90 px-3 py-2 bg-zinc-200 rounded-md'> 
          <h3 className='font-semibold text-xl'>
            {item.name}
          </h3>
          <p className='text-xs mt-2'>{item.description}</p>
          <button onClick={handleClickDownload} className='px-2 py-1 bg-blue-400 text-xs font-semibold text-zinc-800 rounded-md mt-2'>Download Now</button>
      </div>
        ))}
    </div>
  )
}

export default SongsCard