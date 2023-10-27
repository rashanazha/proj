import React, { useState } from 'react';
import './Registration.css';
import axios from 'axios';

function Registration() {
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const handleUsername =(e) =>{
    setUsername(e.target.value)
  }
  const handlePassword =(e) =>{
    setPassword(e.target.value)
  }
  const submit = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:5000/api/registration",{username:username,password:password})
    .then((response) => {
      console.log(response.data.message);
    })
    .catch((err) => {
      console.log(err)
    })
  };
  return (
  <div>
  <h1>Register</h1>
  <form onSubmit={submit}>
  <input type='text' onChange={handleUsername}/>
  <input type='password' onChange={handlePassword}/>
  <button type='submit'>Submit</button>
  </form>
  </div>
  );
}

export default Registration;