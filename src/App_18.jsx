import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Users from './Users'
import College from './College'
import Student from './Student'


function App() {
  let name = 'Manjeet Kumar';

  let userObj = {
    name: 'Manjeet Kumar',
    age: 25,
    email: 'manjeet@example.com'
  }

  let userObj1 = {
    name: 'Shivansh Sarthak',
    age: 25,
    email: 'shivansh@example.com'
  }

  let collegeNames = ['ABC College', 'XYZ University', 'PQR Institute'];

  const [student, setStudent] = useState('Manjeet Kumar');

  return (
    <div>
      <h1>Vite + React</h1>
      {/* <h2>Hi {name} </h2> */}
      {/* <Users user = {userObj} />
      <Users user = {userObj1} />
      <College collegeNames = {collegeNames} /> */}

      {student && <Student name={student} />}
      <button onClick={() => setStudent('Shivansh')}>Remove Student</button>
    </div>
  )
                                                                                                                                                                                               
}

export default App
