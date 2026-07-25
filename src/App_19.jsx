import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Users from './User19'
import Wrapper from './Wrapper'



function App() {
  return (
    <div>
      <h1>Props in React JS</h1>

      <Wrapper>
        <h2>This is wrapped content</h2>
        <p>Content inside the wrapper component.</p>
      </Wrapper>

      <Wrapper>
        <h2 style={{ color: "blue" }}>Another wrapped content</h2>
        <p>More content inside another wrapper component.</p>
      </Wrapper>

      <Wrapper>
        <h2>Nested Wrapper</h2>
        <Wrapper>
          <p>This is a nested wrapper content.</p>
        </Wrapper>
      </Wrapper>

      <Users name="John Doe" />
      <Users  />
    </div>
  )
}

export default App
