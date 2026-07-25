import React, { useState } from "react";

function radioButton() {
    const [gender, setGender] = useState("female");
    const [city, setCity] = useState("mumbai");
  return (
    <div className="radio-button">
      <input type="radio" onChange={(e) => setGender(e.target.value)} id="male" name="Gender" value="male" checked={gender === "male"} />
      <label htmlFor="male">Male</label>
      <input type="radio" onChange={(e) => setGender(e.target.value)} id="female" name="Gender" value="female" checked={gender === "female"} />
      <label htmlFor="female">Female</label>
      <input type="radio" onChange={(e) => setGender(e.target.value)} id="other" name="Gender" value="other" checked={gender === "other"} />
      <label htmlFor="other">Other</label>
      <br />
      <h2>selected gender : {gender}</h2>
      <br /> <br /> <br />
      <h2>select your city</h2>
       <select onChange={(e) => setCity(e.target.value)} defaultValue="mumbai">
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="kolkata">Kolkata</option>
            <option value="chennai">Chennai</option>
       </select>
       <h2>selected city : {city}</h2>
    </div>
  );
}


export default radioButton;