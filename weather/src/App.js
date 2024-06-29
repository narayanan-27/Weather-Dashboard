import React, { useState } from 'react';
import Weather from './Weather';
import WeatherDisplay from './WeatherDisplay';
import { getWeather } from './WeatherServices';
import logo from './logo.svg';
import './App.css';

function App() {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    try {
      const response = await getWeather(city);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather", error);
    }
  };

  return (
    <div className='app'>
    <div className='min-h-screen text-gray-900'>
    <div className='container mx-auto p-4'>
      <div className='mt-40'>
      <h1 className='text-4xl text-center font-bold my-4 text-gray-950 '>Weather Dashboard</h1>
      <Weather onSearch={handleSearch} />
      <WeatherDisplay weather={weather} />
      </div>
    </div>
    </div>
    </div>
  );
}

export default App;
