import React, { useState } from 'react';
import { useStateContext } from './Context';
import { BackGroundlayout, WeatherCard, MiniCard } from './Components';
import './App.css';
import search from './assets/images.png';

function App() {
  const [input, setInput] = useState("");
  const { weather, thisLocation, values, place, setPlace } = useStateContext();

  const submitCity = () => {
    setPlace(input);
    setInput("");
  };

  const mainStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: '2rem',
    gap: '2rem',
  };

  const weatherCardStyle = {
    flex: '1',
    maxWidth: '25rem',
  };

  const miniCardsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    flex: '1',
  };

  return (
    <div style={{ width: '100%', height: '100vh', padding: '2rem', color: 'white' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
        <h1 style={{ fontWeight: 'bold', fontSize: '2rem' }}>Weather App</h1>
        <div style={{ backgroundColor: 'white', width: '15rem', overflow: 'hidden', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', borderRadius: '0.5rem', display: 'flex', alignItems: 'center', padding: '0.5rem', gap: '0.5rem' }}>
          <img src={search} alt="search" style={{ width: '1.5rem', height: '1.5rem' }} />
          <input
            onKeyUp={(e) => { if (e.key === 'Enter') submitCity(); }}
            type="text"
            placeholder="Search City"
            style={{ outline: 'none', width: '100%', fontSize: '1rem', color: '#212121' }}
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>
      </nav>
      <BackGroundlayout />
      <main style={mainStyle}>
        <div style={weatherCardStyle}>
          <WeatherCard
            place={thisLocation}
            windspeed={weather.wspd}
            humidity={weather.humidity}
            temperature={weather.temp}
            heatIndex={weather.heatindex}
            iconString={weather.conditions}
            conditions={weather.conditions}
          />
        </div>
        <div style={miniCardsContainerStyle}>
          {values?.slice(1, 7).map(curr => (
            <MiniCard
              key={curr.datetime}
              time={curr.datetime}
              temp={curr.temp}
              iconString={curr.conditions}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
