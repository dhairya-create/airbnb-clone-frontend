import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const IndexPage = () => {

  const [places,setPlaces] = useState([])

  useEffect(() => {
    axios.get('/data/places').then(response => {

      setPlaces([...response.data])

    } )
   
  },[])
  return (
    <div className='mt-8 gap-6 gap-y-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {places.length > 0 && places.map((item) => {
        return (
          <Link to={'/place/'+item._id}>
          <div className='bg-gray-500 mb-2 rounded-2xl flex hover:scale-105 transition-all duration-500'>
          {item.photos?.[0] && (
            <img className='rounded-2xl object-cover aspect-square' src={item.photos?.[0]} alt=''/>
          )}
          </div>
         
        
         <h2 className='font-bold'>{item.address}</h2>
         <h3 className='text-sm text-gray-500 '> {item.title}</h3>
         <div className='mt-1'>
         <span className='font-bold'> ${item.price}</span> per night 
         
         </div>
           
          </Link>
        )
      })}
    </div>
  )
}

export default IndexPage