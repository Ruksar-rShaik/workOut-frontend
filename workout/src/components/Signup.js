// import React ,{useState,useEffect}from 'react';
// import "./Signup.css"
// import { Link ,useNavigate} from 'react-router-dom';
// import axios from "axios"
// // import Button from '@mui/material/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';


// export default function Signup() {
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [gender, setGender] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');

//   useEffect(() => {
//     if (localStorage.getItem('token')) {
//       navigate('/');
//     }
//   });

//   async function submitHandler(e) {
//     e.preventDefault();
//     await axios
//       .post('https://track-it2.onrender.com/signup', {
//         email,
//         password,
//         name,
//         phone,
//         gender,
//       })
//       .then((res) => {
//         alert('User Successfully Registered');
//         console.log(res.data.data);
//         navigate('/signIn');
//       })
//       .catch((err) => {
//         alert(err.response.data.message);
//         console.log(err);
//       });
//     console.log(email, password);
//   }

//   return (
//     <div className='signup'>
//       <div className='form-container'>
//         <div className='form'>
//           <h2>Sign up to Track your Workout</h2>
//           <form>
//             <div className='mb-3'>
//               <label htmlFor='name' className='form-label'>
//                 Full Name
//               </label>
//               <input
//                 type='text'
//                 className='form-control'
//                 id='name'
//                 name='name'
//                 value={name}
//                 onChange={(e) => {
//                   setName(e.target.value);
//                 }}
//               />
//             </div>
//             <div className='mb-3'>
//               <label htmlFor='gender' className='form-label'>
//                 Gender
//               </label>
//               <input
//                 type='text'
//                 className='form-control'
//                 id='gender'
//                 name='gender'
//                 value={gender}
//                 onChange={(e) => {
//                   setGender(e.target.value);
//                 }}
//               />
//             </div>
//             <div className='mb-3'>
//               <label htmlFor='email' className='form-label'>
//                 Email address
//               </label>
//               <input
//                 type='email'
//                 className='form-control'
//                 id='email'
//                 name='email'
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                 }}
//               />
//             </div>
//             <div className='mb-3'>
//               <label htmlFor='password' className='form-label'>
//                 Password
//               </label>
//               <input
//                 type='password'
//                 className='form-control'
//                 id='password'
//                 name='password'
//                 value={password}
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                 }}
//               />
//             </div>
           
//           <div>
//             <input type = "phone" name= "phone" id="phone"  value={phone} placeholder='phone' onChange={(e)=>{setPhone(e.target.value)}}/>
//           </div>
//           <button onClick={submitHandler}>Submit</button>
          
// </form>
//         </div>
//         <div className='form2'>
//             Already have an account ? 
//             <Link to ="/singIn">         
//               <span style={{color:"blue",cursor:"pointer"}}>Sign In</span>
//               </Link>
 
//         </div>
//         </div>
//     </div>
   

//   )
// }


// import React, { useState, useEffect } from 'react';
// //import './Signup.css';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faEnvelope, faLock, faKey } from '@fortawesome/free-solid-svg-icons';

// export default function Signup() {
//   const navigate = useNavigate();
//   const [name, setName] = useState('');
//   const [gender, setGender] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');

//   useEffect(() => {
//     if (localStorage.getItem('token')) {
//       navigate('/');
//     }
//   }, [navigate]);

//   async function submitHandler(e) {
//     e.preventDefault();
//     await axios
//       .post('https://track-it2.onrender.com/signup', {
//         email,
//         password,
//         name,
//         phone,
//         gender,
//       })
//       .then((res) => {
//         alert('User Successfully Registered');
//         console.log(res.data.data);
//         navigate('/signIn');
//       })
//       .catch((err) => {
//         alert(err.response.data.message);
//         console.log(err);
//       });
//     console.log(email, password);
//   }

//   return (
//     <div className="signup">
//       <div className="form-container">
//         <div className="form">
//           <h2>Sign up to Track your Workout</h2>
//           <form onSubmit={submitHandler}>
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">
//                 Full Name
//               </label>
//               <div className="d-flex flex-row align-items-center mb-4">
//                 <FontAwesomeIcon icon={faUser} className="fa-lg me-3 fa-fw" />
//                 <div className="form-outline flex-fill mb-0">
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     className="form-control"
//                     value={name}
//                     onChange={(e) => {
//                       setName(e.target.value);
//                     }}
//                     placeholder="Enter your name"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="gender" className="form-label">
//                 Gender
//               </label>
//               <div className="d-flex flex-row align-items-center mb-4">
//                 <div className="form-check form-check-inline">
//                   <input
//                     className="form-check-input"
//                     type="radio"
//                     name="gender"
//                     id="male"
//                     value="male"
//                     checked={gender === 'male'}
//                     onChange={(e) => setGender(e.target.value)}
//                   />
//                   <label className="form-check-label" htmlFor="male">
//                     Male
//                   </label>
//                 </div>
//                 <div className="form-check form-check-inline">
//                   <input
//                     className="form-check-input"
//                     type="radio"
//                     name="gender"
//                     id="female"
//                     value="female"
//                     checked={gender === 'female'}
//                     onChange={(e) => setGender(e.target.value)}
//                   />
//                   <label className="form-check-label" htmlFor="female">
//                     Female
//                   </label>
//                 </div>
//               </div>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">
//                 Email
//               </label>
//               <div className="d-flex flex-row align-items-center mb-4">
//                 <FontAwesomeIcon
//                   icon={faEnvelope}
//                   className="fa-lg me-3 fa-fw"
//                 />
//                 <div className="form-outline flex-fill mb-0">
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     className="form-control"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Enter your email"
//                     required
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">
//                 Password
//               </label>
//               <div className="d-flex flex-row align-items-center mb-4">
//                 <FontAwesomeIcon icon={faLock} className="fa-lg me-3 fa-fw" />
//                 <div className="form-outline flex-fill mb-0">
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     className="form-control"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Enter your password"
//                     required
//                   />
//                 </div>
//                 </div>
//                 </div>
//       {/* <div className="mb-3"> */}
//         {/* <label htmlFor="confirmPassword" className="form-label">
//           Confirm Password
//         </label>
//         <div className="d-flex flex-row align-items-center mb-4">
//           <FontAwesomeIcon icon={faLock} className="fa-lg me-3 fa-fw" />
//           <div className="form-outline flex-fill mb-0">
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               className="form-control"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               placeholder="Confirm your password"
//               required
//             />
//           </div>
//         </div>
//                   </div> */}
//       <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
//         <button type="submit" className="btn btn-primary btn-lg">
//           Sign up
//         </button>
//       </div>
//     </form>
//     <p className="text-center">
//       Already have an account? <a href="/login">Login here</a>
//     </p>
//   </div>
// </div>
// </div>
// );
// }

//=========================================
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import { faUser, faEnvelope, faLock, faKey } from "@fortawesome/free-solid-svg-icons";
import TextField from '@mui/material/TextField';
import { Button } from "react-bootstrap";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {

    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, [navigate]);

  async function submitHandler(e) {
    console.log(e.target.value)
    e.preventDefault();
    await axios
      .post("https://track-it2.onrender.com/signup", {
        email,
        password,
        name,
        phone,
        gender,
      })
      .then((res) => {
        alert("User Successfully Registered");
        console.log(res.data.data);
        navigate("/signIn");
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err);
      });
    console.log(email, password,gender);
  }

  return (
    <section className="vh-80" style={{ backgroundColor: "#eee" }}>
      <div className="container h-80">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-5 col-xl-9">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-5 col-lg- col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <form className="mx-1 mx-md-1" onSubmit={submitHandler}>

<div className="d-flex flex-row align-items-center mb-0">
  <i className="fas fa-envelope fa-lg me-1 fa-fw"></i>
  <div className="form-outline flex-fill mb-0">
    <TextField
      margin="normal"
      required
      fullWidth
      id="name"
      label="Your Name"
      name="name"
      autoComplete="name"
      autoFocus
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  </div>
</div>
                     
                      
                      <div className="d-flex flex-row align-items-center mb-0">
  <i className="fas fa-envelope fa-lg me-1 fa-fw"></i>
  <div className="form-outline flex-fill mb-0">
    <TextField
      margin="normal"
      required
      fullWidth
      id="email"
      label="Email Address"
      name="email"
      autoComplete="email"
      autoFocus
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </div>
</div>

                   <div className="d-flex flex-row align-items-center mb-0">
  <i className="fas fa-envelope fa-lg me-1 fa-fw"></i>
  <div className="form-outline flex-fill mb-0">
    <TextField
      margin="normal"
      required
      fullWidth
      id="password"
      label="password"
      name="password"
      type="password"
      autoComplete="password"
      autoFocus
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  </div>
</div>


<div className="d-flex flex-row align-items-center mb-0">
  <i className="fas fa-envelope fa-lg me-1 fa-fw"></i>
  <div className="form-outline flex-fill mb-0">
    <TextField
      margin="normal"
      required
      fullWidth
      id="phone"
      label="phone"
      name="phone"
      autoComplete="phone"
      autoFocus
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
    />
  </div>
</div>

                  <div className="d-flex flex-row align-items-center mb-2">
                    <i className="fas fa-venus-mars fa-lg me-1 fa-fw"></i>
                    <div className="form-outline flex-fill mb-0">
                      <select className="form-select" aria-label="Gender select example"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select your gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <label className="form-label" htmlFor="form3Example6c"></label>
                    </div>
                  </div>


                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <Button type="submit" className="btn btn-primary btn-lg"style={{ backgroundColor: "blue" }}>Register</Button>
                  </div>
                </form>
                <div className="form2 bg-light p-3 mt-3">
                <p className="mb-0">Already have an account?</p>
                <Link to="/signIn" className="btn btn-link">
                  Sign In
                </Link>
              </div>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-0">
                <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-registration/draw1.png" className="img-fluid" alt="Sample" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
);
}

export default Signup;