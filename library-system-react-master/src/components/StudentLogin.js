import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "axios"
import { useNavigate } from "react-router-dom";
function StudentLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
 
    // Add code here to handle form submission
  const res = await axios.post("https://library-system-backend-master.vercel.app/student/login",{rollNo:username , password : password})

    // console.log(res.data.studentdata.name,'userdata');

    if (res.data.status === 201) {
      alert('login successfull');
      setUsername('');
      setPassword('')
      history('/dashboard',{state:{name:res.data.studentdata.name , rollNo : res.data.studentdata.rollNo}});
  }
  else{
    alert(res.data)
  }
  };

  return (
    <>
    <Navbar />
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Student Login</h1>
        <label htmlFor="username">Roll No:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
    </>
  );
}

export default StudentLogin;