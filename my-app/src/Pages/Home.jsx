import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'


const Home = () => {
 const {token} = useContext(AuthContext);
  return (
    <div>
      <h1>Welcome to Home</h1>
      <h1>{token}</h1>
    </div>
  )
}

export default Home
