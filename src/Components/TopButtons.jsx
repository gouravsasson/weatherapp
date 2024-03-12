import React from 'react'

function TopButtons({setQuery}) {
   const cities = [
    {
        id : 1,
        title : 'Delhi',

    },
    {
        id : 2,
        title : 'Punjab,IN',

    },
    {
        id : 3,
        title : 'Mumbai',

    },
    {
        id : 4,
        title : 'Noida',

    }
    
   ]
  return (
    
      <>
      <div className=' flex justify-center space-x-10'>
        {cities.map((city)=> (

            <button  onClick={()=>setQuery({q: city.title})}  className=' text-white text-lg font-medium ' key={city.id}>{city.title}</button>
            
    ))}
        </div>
      
      
      </>  

    
  )
}
   
export default TopButtons