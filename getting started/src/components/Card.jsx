import React from 'react'

function Card() {

    const data = [
        {image: 'https://cdni.pornpics.com/460/7/165/35597264/35597264_142_6e32.jpg' , name: "Mia khalifa" , description: "meri chut kaisi lag rahi hai janeman meri gaand maar lo na." , instock : true},
        {image: 'https://cdni.pornpics.com/460/1/307/95255356/95255356_014_f600.jpg', name: "Sunny Leone " , description: 'Aur muthalo kahi mujhe bhul to nahi gaye na , aaj bhi chaddi gili kar dungi mai', instock : true},
        {image: 'https://cdni.pornpics.com/460/7/105/83027665/83027665_076_0140.jpg', name: "Dani Daniels " , description: 'meri gaand maaro na bhadwe , kb tak sird muth maar ke kaam chalaoge', instock : false},
        {image: 'https://cdni.pornpics.com/460/7/528/75635576/75635576_051_c584.jpg', name: "Sofia Leone" , description: 'meri chut aur gaand dry hogae hai , koi bkl hai jo mujhe gila kar sake', instock : true},
        {image: 'https://cdni.pornpics.com/460/7/574/66622798/66622798_105_1751.jpg', name: "Lexie Luna" , description: 'meri to chut dekh k hi pehchan gaye hoge bhadwo face dekhne ki kya hi jarurat hai', instock : true},
        {image: 'https://cdni.pornpics.com/460/7/87/21162058/21162058_177_9f24.jpg', name: "Angela White" , description: 'gaand maaro meri gaand maaro chut lelo meri , muh me lauda daalo', instock : false},
        {image: 'https://cdni.pornpics.com/460/7/543/21213161/21213161_030_1cce.jpg', name: "Lana Rhodes" , description: 'gaand maaro meri gaand maaro chut lelo meri , muh me lauda daalo', instock : false},
        {image: 'https://cdni.pornpics.com/460/7/107/84972886/84972886_157_90c5.jpg', name: "Lena Paul" , description: 'meri gaand maaro na bhadwe , kb tak sird muth maar ke kaam chalaoge', instock : true},
        {image: 'https://cdni.pornpics.com/460/1/249/89967145/89967145_011_f46c.jpg', name: "Eva Elfi" , description: 'meri gaand maaro na bhadwe , kb tak sird muth maar ke kaam chalaoge', instock : true},
        {image: 'https://cdni.pornpics.com/460/1/385/53597069/53597069_011_c50a.jpg' , name: "Luna Silver" , description: "meri chut kaisi lag rahi hai janeman meri gaand maar lo na.", instock : true},
    ]



  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center gap-10 flex-wrap'>
        {data.map((elem, index) =>(
            <div  key={index} className="w-52 bg-zinc-100 rounded-md overflow-hidden " >
            <div className=' w-full h-60 bg-zinc-300 border-2 border-mangneta-300'>
               <img className='w-full h-full object-cover' src={elem.image} alt="" />
            </div>
            <div className='w-full  px-3 py-4'>
               <h2 className='font-semibold'>{elem.name}</h2>
               <p className='text-xs mt-3'>{elem.description}</p>
               <button className={`px-4 py-1 ${elem.instock ? 'bg-blue-500' : 'bg-pink-500'} rounded-md text-xs text-zinc-100 cursor-pointer`}>{elem.instock ? "Chod do"  : "Nahi Dungi" }</button>
            </div>

       </div>
        )
        )}
    </div>
  )
}

export default Card