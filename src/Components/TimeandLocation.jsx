import React from 'react'
import { fortamToLocalTime } from '../services/weatherService'

function TimeandLocation({weather : {dt,timezone,name, country,details }}) {
  return (
    <>
    <div className=' text-white text-xl font-extralight text-center my-6'>{fortamToLocalTime(dt,timezone)}</div>
    <div className=' text-white text-3xl font-medium text-center my-3'>{`${name},${country}`}</div>
    <div className=' text-cyan-300 text-xl  font-extralight text-center my-6'>{details}</div>

    

    
    </>
  )
}

export default TimeandLocation