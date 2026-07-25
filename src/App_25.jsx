import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import CheckBox from './CheckBox'
import RadioButton from './RadioButton'
import Array from './Array'
import Arrays from './Arrays'
import Clock from './Clock'
import ArrayNested from './ArrayNested'

function App() {

  return (
    <div className="App">
      {/* <CheckBox /> 
      <RadioButton />
      <Array />
      <Arrayss */}
      <Clock />
      <ArrayNested />
    </div>
  )
}

export default App
