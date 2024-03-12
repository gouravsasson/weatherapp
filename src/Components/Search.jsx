import React, { useState } from "react";
import {
  UilSearch,
  UilLocationPoint,
  UilCelsius,
  UilFahrenheit,
} from "@iconscout/react-unicons";

function Search( {setQuery,setUnits,units}) {
   
   const [city, setCity] = useState("")

   const handleSearchClick = () => {
    if (city !== '') setQuery ({q: city })
   }

   const handleLocationClick = () => {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position)=>{
        let lat = position.coords.latitude
        let lon = position.coords.longitude

        setQuery({
          lat,lon,
        })
      })

    }
   }

   const handleCelsiusClick=()=>{

    setUnits("metric")

   }

   const handleFahrenheitClick=()=>{

    setUnits("imperial")

   }

  return (
    <>
      <div className=" flex justify-center space-x-10 py-5">
        <div className=" flex flex-row w-3/4 items-center justify-center space-x-4 ">
          <input

            value={city}
            onChange={(e)  => setCity(e.currentTarget.value)}
            type="text"
            placeholder="search for city....."
            className=" text-xl font-light p-2 w-full shadow-xl focus:outline-none  capitalize placeholder:lowercase"

          />

          <UilSearch
            size={25}
            className=" text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearchClick}
          />
          <UilLocationPoint

          onClick={handleLocationClick}
            size={25}
            className=" text-white cursor-pointer transition ease-out hover:scale-125"
          />
        </div>
        <div className=" flex flex-row w-1/4 items-center justify-center">
          <button
          onClick={handleCelsiusClick}
            name="matric"
            className=" text-white text-light transition ease-out hover:scale-125"
          >
            {" "}
            <UilCelsius />
          </button>
          <p className=" text-xl text-white mx-1">|</p>
          <button
          onClick={handleFahrenheitClick}
            name="matric"
            className=" text-white text-light transition ease-out hover:scale-125"
          >
            {" "}
            <UilFahrenheit />
          </button>
        </div>
      </div>
    </>
  );
}

export default Search;
