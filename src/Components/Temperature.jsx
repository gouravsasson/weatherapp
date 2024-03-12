import React from "react";
import {
  UilTemperature,
  UilWind,
  UilTear,
  UilSun,
  UilSunset,
  UilArrowUp,
  UilArrowDown,
} from "@iconscout/react-unicons";
import { fortamToLocalTime } from "../services/weatherService";
import { iconUrlFromCode } from "../services/weatherService";

function Temperature({
  weather: {
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <>
      <div className=" grid grid-cols-3 items-center justify-items-center">
        <img
          className="justify-self-start"
          src={iconUrlFromCode(icon)}
          alt=""
        />
        <p className=" text-white  text-5xl">{`${temp.toFixed()}°
`}</p>
        <div className="justify-self-end">
          <div className=" text-white flex">
            <UilTemperature className="mr-1" /> Real fell:{" "}
            <span className=" ml-1">{`${feels_like.toFixed()}°
`}</span>
          </div>
          <div className=" text-white flex">
            <UilTear className="mr-1" />
            Humidity: <span className=" ml-1">{`${humidity}%`}</span>
          </div>
          <div className=" text-white flex">
            <UilWind className="mr-1" /> Wind:{" "}
            <span className=" ml-1">{`${speed.toFixed()}km/h
`}</span>
          </div>
        </div>
      </div>

      <div className=" text-white  flex justify-around">
        <div className=" flex ">
          <UilSun /> Rise: <span>{fortamToLocalTime(sunrise,timezone, "hh:mm a")}</span>
        </div>
        <p>|</p>
        <div className=" flex">
          <UilSunset /> Set:<span>{fortamToLocalTime(sunset,timezone, "hh:mm a")}</span>
        </div>
        <p>|</p>
        <div className="flex">
          <UilArrowUp /> High: <span>{`${temp_max.toFixed()}°`}</span>
        </div>
        <p>|</p>
        <div className="flex">
          <UilArrowDown /> Low: <span>{`${temp_min.toFixed()}°`}</span>
        </div>
      </div>
    </>
  );
}

export default Temperature;
