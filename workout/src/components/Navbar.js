
import React, {useEffect,useState} from 'react';
import "./Navbar.css"
import { useAppState } from '../Store/app.state';
import {Link,useNavigate} from "react-router-dom"

export default function Navbar() {
  const Navigate=useNavigate()
  const token=useAppState(state=>state.token)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  function handleLogout() {
    if (localStorage.getItem('token') !== null) {
      localStorage.removeItem('token');
      Navigate("/signup")
      setIsLoggedIn(false);
    }
  }

  return (
    <div className='navbar'>
        
      <ul className ="nav-menu">
        {
          isLoggedIn?
          <li>
            <Link to="/">
          <button style={{ marginRight: '10px'}}>Home</button>
        </Link>
        <Link to="/leaderBoard">
          <button style={{ marginRight: '10px'}}>LeaderBoard</button>
        </Link>
        
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </li>
          :
          <li>
       
        <Link to ="/SignUp">
        <button style={{ marginRight: '10px'}}>SignUp</button>
        </Link>
        <Link to ="/SignIn">
        <button style={{ marginRight: '10px'}}>SignIn</button>
        </Link>
          </li>
}
      </ul>
        
    </div>
  )
}

