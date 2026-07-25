import React, { useState } from 'react';

function CheckBox() {
    const [skills, setSkills] = useState({
        html: false, 
        css: false,
        js: false,
        react: false
    })
    const handleSkills = (e) => {    
        console.log(e.target.name, e.target.checked);
        if (e.target.checked) {
           setSkills([...skills, e.target.name])
        }
        else {
            setSkills([...skills.filter(skill => skill !== e.target.name)])
        }
    }
    const handleChange = (e) => {
        setSkills({...skills, [e.target.name]: e.target.checked})
    
    if (e.target.checked) {
            setSkills({...skills, [e.target.name]: true})
        }    }
  return (
    <div>
      <h2>select your skills</h2>
        <input type="checkbox" onChange={handleChange} id="html" name="html" value="html" checked={skills.html} />
            <label htmlFor="html"> HTML</label><br/>
        <input type="checkbox" onChange={handleChange} id="css" name="css" value="css" checked={skills.css} />
            <label htmlFor="css"> CSS</label><br/>   
        <input type="checkbox" onChange={handleChange} id="js" name="js" value="js" checked={skills.js} />
            <label htmlFor="js"> JavaScript</label><br/>    
        <input type="checkbox" onChange={handleChange} id="react" name="react" value="react" checked={skills.react} />
            <label htmlFor="react"> React</label><br/>
    </div>
  );
}

export default CheckBox;