import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

// Create a context for the state
const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState('Bijnor');
  const [thisLocation, setLocation] = useState('');

  // Fetch weather data from the API
  const fetchWeather = async () => {
    const options = {
      method: 'GET',
      url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
      params: {
        aggregateHours: 24,
        location: place,
        contentType: 'json',
        unitgroup: 'metric',
        shortColumnNames: 0,
      },
      headers: {
        'X-RapidApi-Key': import.meta.env.VITE_API_KEY,
        'X-RapidApi-Host': 'visual-crossing-weather.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      const thisData = Object.values(response.data.locations)[0];
      setLocation(thisData.address);
      setValues(thisData.values);
      setWeather(thisData.values[0]);
    } catch (error) {
      console.error(error);
      // If the API throws an error
      alert('This place does not exist');
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <StateContext.Provider value={{ weather, setPlace, values, thisLocation }}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to use the state context
export const useStateContext = () => useContext(StateContext);
