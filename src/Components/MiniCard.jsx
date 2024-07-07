import React, { useEffect, useState } from 'react';
import Sun from '../assets/icons/sun.png';
import Cloud from '../assets/icons/cloud.png';
import Fog from '../assets/icons/fog.png';
import Rain from '../assets/icons/rainy.png';
import Storm from '../assets/icons/stormy.png';
import Snow from '../assets/icons/snow.jpg';
import Wind from '../assets/icons/wind.png';
import '../index.css';

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState();

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(Cloud);
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(Rain);
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(Sun);
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(Storm);
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(Fog);
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(Snow);
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(Wind);
      }
    }
  }, [iconString]);

  // Convert Fahrenheit to Celsius
  const tempCelsius = ((temp - 32) * 5) / 9;

  return (
    <div className="glassCard w-[10rem] h-[10rem] p-4 flex flex-col">
      <p className="text-center">
        {new Date(time).toLocaleTimeString('en', { weekday: 'long' }).split(" ")[0]}
      </p>
      <hr />
      <div className="w-full flex justify-center items-center flex-1">
        <img src={icon} alt="weather_icon" className="w-[4rem] h-[4rem]" />
      </div>
      <p className="text-center font-bold">{tempCelsius.toFixed(1)}&deg;C</p>
    </div>
  );
};

export default MiniCard;
