import React, { useEffect, useState } from 'react'
import './app.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import { io } from "socket.io-client";

import { posts } from './data'

const App = () => {
    const [username, setUsername] = useState('')
    const [user, setUser] = useState('')
    const [socket, setSocket] = useState(null);

    useEffect(() => {
      setSocket(io("http://localhost:5000"));
    }, []);

    useEffect(() => {
      socket?.emit("newUser", user);
    }, [socket, user]);
    
    
  return (
    <div className="container">
      {user ? 
        (
          <>
            <Navbar/>
            {posts.map((post) => (
              <Card key={post.id} post={post}/>
            ))}
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