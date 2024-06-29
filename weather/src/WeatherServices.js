import axios from 'axios';

const API_KEY = 'cd9cc744207b8591ac969e6c1db6c63a';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeather = (city) => {
  return axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units: 'metric',
    },
  });
};
