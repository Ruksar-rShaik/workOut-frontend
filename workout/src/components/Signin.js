import React, { useState, useEffect } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAppState } from '../Store/app.state';
import { Button } from "react-bootstrap";


export default function Signup() {
  const setToken =useAppState((state)=> state.setToken);
  const Navigate=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    //const[token,seToken]=useState("")
useEffect(()=>{
  if(localStorage.getItem("token")){
    Navigate("/home")
  }
})

async function submitHandler(e){
  e.preventDefault();
  await axios.post("https://track-it2.onrender.com/login",{
    email,password
    
  }).then((res)=>{
    console.log(res.data)
    setToken(res.data.token)
    
    
    localStorage.setItem("token",res.data.token)
    //alert("sucessful")
    Navigate("/home")
  }).catch((err)=>{
    console.log(err.response.data)
    alert(err.response.data.message)
  })
}
  return (
    <div className="d-flex align-items-center min-vh-88">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="card-header">
                <h3 className="text-center font-weight-light my-4">
                  Login
                </h3>
              </div>
              <div className="card-body">
                <form onSubmit={submitHandler}>
                 
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      id="password"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-12">
                    <Button className="btn btn-primary w-100" style={{ backgroundColor: "blue" }} onClick={submitHandler}>Submit</Button>

                    </div>
                  </div>
                </form>
              </div>
              <div className="form2 bg-light p-3 mt-3">
                <p className="mb-0">Dont have an account?</p>
                <Link to="/signUp" className="btn btn-link">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}







//+++++++
// import React,{ useState } from 'react';
// import "./Signin.css";
// import { Link,useNavigate } from 'react-router-dom';
// import axios from 'axios'
// import { useAppState } from '../Store/app.state';

// export default function SignIn() {
  
//   const Navigate = useNavigate()

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")

//   const setToken = useAppState((state)=> state.setToken)
  
//   const userLogin = async () => {
//     if(email === "" && password === ""){
//       window.alert("Please enter Email and Password")
//       return
//     }
//     if(email === ""){
//       window.alert("Please enter Email")
//       return
//     }
//     if(password === ""){
//       window.alert("Please enter Password")
//       return
//     }

//     const data = await axios.post("http://localhost:3001/login",{
//       email,
//       password
//     })
//     if (data.data.status === true){
//       setToken(data.data.token)
//       localStorage.setItem("token",data.data.token)
//       Navigate("/rooms")
//     }else{
//       window.alert(data.data.message)
//     }
//   }

//   return (
//     <div className='signIn'>
//         <div>
//             <div className='logInForm'>
//             <div>
//             <input type = "email" name= "email" id="email" value={email} placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
//             </div>
//             <div>
//             <input type = "password" name= "password" id="password" value={password} placeholder='Password' onChange={(e)=> {setPassword(e.target.value)}}/>
//             </div>
//             <button type="button" className="btn btn-primary" onClick={userLogin}>Sign In</button>
//             </div>
//             <div className='loginForm2'>
//                 Want to Join Us ?
//                 <Link to = "/signUP"><span  style={{color :"blue",cur:"pointer"}}> SignUp</span> </Link>
//              </div>
//         </div>
      
//     </div>
//   )
// }
