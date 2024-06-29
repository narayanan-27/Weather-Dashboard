import React from 'react';

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="mt-8 p-6 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-700 text-center text-gray-900">
      <h2 className="text-3xl font-bold mb-2">{weather.name}</h2>
      <p className="text-xl capitalize">{weather.weather[0].description}</p>
      <p className="text-5xl font-semibold">{weather.main.temp}°C</p>
    </div>
  );
};

export default WeatherDisplay;
