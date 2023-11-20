import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'


const Home = () => {
 const {token, isAuth, logout} = useContext(AuthContext);
  return (
    <div>
      <h1>Welcome to Home</h1>
      {isAuth === true ? (
        <div>
          <h1>{token}</h1>
          <button onClick={logout}>logout</button>
        </div>
      ):(
        ""
      )}
     
    </div>
  )
}

export default Home
