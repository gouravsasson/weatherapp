import React, { Component } from "react";
import { iconUrlFromCode } from "../services/weatherService";

 function Forecast( {title , items}) {
   
    return (
      <>
        <div className="mt-6">
          <p className=" text-white font-medium uppercase">{title}</p>
        </div>
        <hr className=" my-2" />
        <div className=" flex flex-row items-center justify-between text-white">

        {items.map((item)=>(

           <div className=" flex flex-col items-center justify-center">
           <div className="m-0 p-0">{item.title}</div>
           <img
             className=" w-12"
             src={iconUrlFromCode(item.icon)}
             alt=""
           />
           <div className="">{`${item.temp.toFixed()}°`}</div>
           </div>
        
        ))}
          
          
        </div>
      </>
    );
  }


export default Forecast;
