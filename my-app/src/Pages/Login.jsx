import React, { useContext } from 'react'
import { useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router-dom';

const Login = () => {
const [email, setEmail] = useState("eve.holt@reqres.in");
const [password, setPassword] = useState("cityslicka");
const {login,isAuth} = useContext(AuthContext);
if(isAuth){
  return <Navigate to="/"/>
}

const handleLogin = async () =>{
  try {
    const userDetails = {
      email,
      password
    };
    const res = await fetch(`https://reqres.in/api/login`,{
      method: 'POST',
      headers:{
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(userDetails)
    });
    const jsonData = await res.json()
     login(jsonData.token)
  } catch (error) {
    console.log(error)
  }
}
console.log( password)
  return (
    <div>
      <h1>Login page</h1>
      <input
      type='text'
      placeholder='Enter Email'
      value={email}
      onChange={(e) =>{
        setEmail(e.target.value)
      }}
       />
       <input
        type='password'
        placeholder='Enter password'
        value = {password}
        onChange={(e) =>{
          setPassword(e.target.value)
        }}
       />
       <button  onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
