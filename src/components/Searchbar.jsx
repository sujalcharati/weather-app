import axios from "axios";
import React from "react";
import{ useState } from 'react'

function Searchbar() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [currentstatus,setCurrentstatus] =useState('')

    async function calculatetemp() {
      const api_key = "23dc27e2cd36408ca75130328240708";
      try {
        const res = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=yes`
        );
        setWeatherData(res);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching the weather data", error);
      }
    }
return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4 bg-cover bg-center bg-weather-pattern">
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <input
                className="text-center border border-gray-300 mb-4 p-2 rounded-md w-full"
                type="text"
                placeholder="Enter the city"
                value={city}
                onChange={(e) => {
                    setCity(e.target.value);
                    if (e.target.value === '') {
                        setWeatherData(null);
                    }
                  }}
            />
            <button
                className="bg-blue-500 text-white rounded-md px-4 py-2 w-full"
                onClick={calculatetemp}
                type="submit"
            >
                Get Weather
            </button>
        </div>
        <div className="text-center text-xl font-semibold">{city}</div>
        {weatherData && weatherData.data && weatherData.data.current && (
            <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
                <div className="flex flex-row justify-center items-center space-x-4">
                    <h3 className="text-2xl font-bold">Temp: {weatherData.data.current.temp_c}°C</h3>
                    <img src="https://www.weatherbit.io/static/img/icons/c01d.png" alt="cloud icon" className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold">Feels like: {weatherData.data.current.feelslike_c}°C</h3>
                <h3 className="text-2xl font-bold">Wind: {weatherData.data.current.wind_kph} Km/hr</h3>
           
            </div>
        )}
    </div>
);
}
export default Searchbar;
