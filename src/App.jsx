import { useState } from 'react'

import './App.css'

function App() {
  const [input, setInput] = useState('');

  return (
    <div>
      <Searchbar input={input} setInput={setInput} />
    </div>
  )
}
function Searchbar({input,setInput}){

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div>

      <input 
        className="text-center border-black border-solid mb-4"
        type="text"
        placeholder="Enter the location, country"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className='bg-[#1da1f2] text-white rounded-sm'
       onClick={calculatetemp}>search</button>
      </div>
      <div className="text-center">
        {input}
        <h3> india</h3>
        {/* <h3> { degree}</h3> */}

      </div>
    </div>
  )
}

 export default App