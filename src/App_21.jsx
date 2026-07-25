import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  return (
    <div>
      <h1>Props in React JS</h1>
      <h2>Controlled Components</h2>
        <form action="" method="get">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name'/> 
          <br/>
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
          <br/>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email'   />
          <br />
          <button type='submit'>Submit</button>
          <button type='reset' onClick={() => {
            setName("")
            setPassword("")
            setEmail("")
          }}>Reset</button>
          <h3>Name: {name}</h3>
          <h3>Password: {password}</h3>
          <h3>Email: {email}</h3>
        </form>
      </div>
  )
}

export default App
