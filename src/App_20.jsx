import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
  const [val, setVal] = useState("")
  return (
    <div>
      <h1>Props in React JS</h1>

      <h1>Get Input field value</h1>
      <input type="text" value={val} placeholder='Enter your name' onChange={(e) => setVal(e.target.value)} />
      <h1>{val}</h1>
      <button onClick={() => setVal("")}>Submit</button>
      </div>
  )
}

export default App
