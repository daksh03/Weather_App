import React, { useEffect, useState } from 'react'
import { useStateContext } from '../Context'
import Fog from '../assets/fog.jpeg'
import Rain from '../assets/rainy.jpeg'
import Clear from '../assets/clear.jpg'
import Cloud from '../assets/cloud.jpeg'
import Snow from '../assets/snow.jpg'
import Stormy from '../assets/thunder.jpeg'

const BackGroundlayout = () => {
   
const{weather}=useStateContext()
const[image,setImage]=useState('')
useEffect(()=>{
  if(weather.conditions){
    let imageString=weather.conditions
    if(imageString.toLowerCase().includes('clear')){
      setImage(Clear)
    }
    else if(imageString.toLowerCase().includes('cloud')){
      setImage(Cloud)
    }
    else if(imageString.toLowerCase().includes('rain')||imageString.toLowercase().includes('shower')){
      setImage(Rain)
    }
    else if(imageString.toLowerCase().includes('snow')){
      setImage(Snow)
    }
    else if(imageString.toLowerCase().includes('fog')){
      setImage(Fog)
    }
    else if(imageString.toLowerCase().includes('thunder')||imageString.toLowercase().includes('storm')){
      setImage(Stormy)
    }
  }
},[weather])
  return (
    <img src={image} alt="weather_image" className='h-screen w-full fixed left-0 top-0 -z-[10]'/>
  )
}

export default BackGroundlayout