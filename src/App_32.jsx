import { useEffect } from "react"

function App() {

const cardStyle = {
  border : '1px solid #cccccc3b',
  backgroundColor: 'lightblue',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}

  return (
<>
<h1 style={{ color: 'red' } }>Hello, React!</h1>

<div style ={{display : 'flex', flexwrap : 'wrap', gap : '20px', justifyContent : 'center'}}>
  <div style={cardStyle}>
    <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Placeholder" />
    <h2>Card Title 1</h2>
    <p>This is a description for card 1.</p>
  </div>
  </div>
</>  )
}

export default App
