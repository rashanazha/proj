import React, { useState } from 'react';
import axios from 'axios';


function Login() {
    
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[errorMessage, setErrorMessage] = useState("");
   

    const handleUsername = (e) =>{
        setUsername(e.target.value);
    };
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    };
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/login", { username, password });
        // console.log(response.data.message); // Process the response data as needed
//        localStorage.setItem('token' , response.data.user.id);
        setErrorMessage(response.data.message);
    } catch (error) {
        setErrorMessage(error.response.data.message);
      //  setLogin(false);
    }
    };
  return (
    <div>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input type="text"
          onChange={handleUsername}
          /><br/>
          <label> Password </label>
          <input type="text"
          onChange={handlePassword}
          /><br/>
          <button type="submit">Submit</button>
          {errorMessage ? (<p>You've logged in</p>):(<p>You're logged out</p>)}
         
    </form>
    </div>
  );
}

export default Login;