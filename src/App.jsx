import { useState } from 'react'

import './App.css'

function App() {

  return (
   
      <div>
        <Searchbar/>
      {/* <Weatherdisplay/> */}
      </div>
   
  )
}
function Searchbar(){
  const [input,setInput] =useState('');
    return (
      <div className="flex justify-center items-center h-screen">
      <input 
        className="text-center border-black	border-solid"
        type="text"
        placeholder="Enter the location, country"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      </div>
    )
    
}
fu

function  Weatherdisplay(){
  const [address,setAddress] =useState('');
  return <div>
        {address}
        <h3>{country}</h3>
  </div>
}

export default App
