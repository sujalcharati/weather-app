import axios from "axios";
import React from "react";
import{ useState } from 'react'

function Searchbar() {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);

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
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
        <div>
            <input
                className="text-center border border-black border-solid mb-4 rounded-md"
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
                className="bg-[#1da1f2] text-white rounded-md ml-2"
                onClick={calculatetemp}
                type="submit"
            >
                Get Weather
            </button>
        </div>
        <div className="text-center">{city}</div>
        {weatherData && weatherData.data && weatherData.data.current && (
            <div>
                <h3>Temp: {weatherData.data.current.temp_c}°C</h3>
            </div>
        )}
    </div>
);
}
export default Searchbar;
