
import React, {useEffect,useState} from 'react';
import "./Navbar.css"
import { useAppState } from '../Store/app.state';
import {Link,useNavigate} from "react-router-dom"
import { Button } from 'react-bootstrap';

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
      Navigate("/")
      setIsLoggedIn(false);
    }
  }

  return (
    <div className='navbar'>
  <ul className="nav-menu">
    {isLoggedIn ?
      <li>
        <Link to="/home">
          <Button className="nav-button" style={{backgroundColor:"#19edca"}}>Home</Button>
        </Link> &nbsp;
        <Link to="/leaderBoard">
          <Button className="nav-button" style={{backgroundColor:"#19edca"}}>LeaderBoard</Button>
        </Link> &nbsp;
        <button className="nav-button logout-btn" onClick={handleLogout}>Logout</button>
      </li>
      :
      <li>
        {/* <Link to="/SignUp">
          <button className="nav-button">SignUp</button>
        </Link>
        <Link to="/SignIn">
          <button className="nav-button">SignIn</button>
        </Link> */}
      </li>
    }
  </ul>
</div>
  )
}

