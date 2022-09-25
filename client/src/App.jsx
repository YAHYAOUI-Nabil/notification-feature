import React, { useState } from 'react'
import './app.css'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
    const [username, setUsername] = useState('')
    const [user, setUser] = useState('')
    console.log(user)
  return (
    <div className="container">
      {user ? 
        (
          <>
            <Navbar/>
            <Card/>
            <span className="username">{user}</span>
          </>
        ) 
        : 
        (
          <div className="login">
            <input 
                type="text" 
                placeholder="username"
                onChange={(e)=>setUsername(e.target.value)}/>
            <button onClick={()=>setUser(username)}>Login</button>
          </div>
        )}
    </div>
  )
}

export default App