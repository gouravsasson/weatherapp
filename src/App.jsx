
import React, { useEffect, useState } from 'react';
import TopButtons from './Components/TopButtons';
import Search from './Components/Search';
import TimeandLocation from './Components/TimeandLocation';
import Temperature from './Components/Temperature';
import Forecast from './Components/Forecast';

import getFormattedWeatherData from './services/weatherService';

function App() {

  const [query,setQuery] = useState({q: "dubai"})
  const [units , setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)


  useEffect (()=>{
    const fetchWeather = async() => {
      const data = await getFormattedWeatherData ( {...query , units}).then(data => {
        setWeather(data)
      })
      
    }
  
  fetchWeather()
  },[query,units])


  const formatBackground = ()=>{
    if(!weather)return 'from-cyan-700 to-blue-700'
    const threshold = units === 'metric'? 20 : 60
    if(weather.temp <= threshold) return 'from-cyan-700 to-blue-700'

    return 'from-yellow-700 to-orange-700'
  }
   
  

  return (
    <>
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery ={setQuery} />
      <Search setQuery = {setQuery} units={units} setUnits={setUnits} />

      {weather && (

        <>
        <TimeandLocation weather={weather}/>
      <Temperature weather={weather}/>
      <Forecast title="hourly forecast" items={weather.hourly} />
      <Forecast title="daily forecast" items={weather.daily} />
      </>
      )}
      
    </div>
    </>
  )
}

export default App
