import React, { useEffect, useState } from 'react';
import { useDate } from '../Utils/useDate';
import Sun from '../assets/icons/sun.png';
import Cloud from '../assets/icons/cloud.png';
import Fog from '../assets/icons/fog.png';
import Rain from '../assets/icons/rainy.png';
import Storm from '../assets/icons/stormy.png';
import Snow from '../assets/icons/snow.jpg';
import Wind from '../assets/icons/wind.png';
import '../index.css';

// Function to convert Fahrenheit to Celsius
const fahrenheitToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};

const WeatherCard = ({
  temperature: tempInFahrenheit,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {
  const [icon, setIcon] = useState(Sun);
  const { time } = useDate();

  // Convert temperature to Celsius
  const temperature = fahrenheitToCelsius(tempInFahrenheit).toFixed(1);

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

  return (
    <div className='w-[22rem] min-w-[22rem] h-[30rem] glassCard p-4'>
      <div className='flex w-full justify-center items-center gap-4 mt-12 mb-4'>
        <img style={{width:120}} src={icon} alt="weather_icon" />
        <p className='font-bold text-3xl flex justify-center items-center'>{temperature}&deg;C</p>
      </div>
      <div className='font-bold text-xl'>
        {place}
      </div>
      <div className='w-full flex justify-between items-center mt-4'>
        <p className='flex-1 text-center p-2'>{new Date().toDateString()}</p>
        <p className='flex-1 text-center p-2'>{time}</p>
      </div>
      <div className='w-full flex justify-between items-center mt-4 gap-4'>
        <div className='flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg'>
          Wind Speed
          <span className='font-normal'>{windspeed}</span>
        </div>
        <div className='flex-1 text-center p-2 font-bold rounded-lg bg-green-600'>
          Humidity
          <span className='font-normal'>{humidity}</span>
        </div>
      </div>
      <div className='w-full p-3 mt-4 flex justify-between items-center'>
        <p className='font-semibold text-lg'>Heat Index</p>
        <span className='font-normal'>{heatIndex ? heatIndex : 'N/A'}</span>
      </div>
      <hr className='bg-slate-600' />
      <div className='w-full p-4 flex justify-center items-center text-3xl font-semibold'>
        {conditions}
      </div>
    </div>
  );
}

export default WeatherCard;
