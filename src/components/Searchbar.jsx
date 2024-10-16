import axios from "axios";
import React from "react";
import{ useState } from 'react'

const api_key = "23dc27e2cd36408ca75130328240708";
function Searchbar({ city, setCity }) {
  const [city, setCity] = useState("");

  async function calculatetemp() {
    const res = await axios.get(
      "http://api.weatherapi.com/v1/current.json?key={api_key}&q=&aqi=yes"
    );
    return res.json();
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>
        <input
          className="text-center border-black border-solid mb-4"
          type="text"
          placeholder="Enter the city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="bg-[#1da1f2] text-white rounded-sm"
          onClick={calculatetemp}
          type="submit"
        >
          get weather
        </button>
      </div>
      <div className="text-center">{city}</div>
    </div>
  );
}
export default Searchbar;