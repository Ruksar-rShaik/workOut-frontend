import React ,{useState}from 'react';
import "./Signup.css"
import { Link ,useNavigate} from 'react-router-dom';
import axios from "axios"
// import Button from '@mui/material/Button';

export default function SingUP() {
  const Navigate=useNavigate()
  const [name,setName]= useState("");
  const [gender,setGender]=useState("");
  const [email,setEmail]=useState(""); 
  const [password,setPassword]=useState("");
  const [phone,setPhone]=useState("");

  async function submitHandler(e){
    e.preventDefault();
    await axios.post('https://track-it2.onrender.com/signup', {
          email, password,name,phone,gender
          
      }).then((res) => {
          alert("User Successfully Registered")
        console.log(res.data.data);
        Navigate("/signIn")
      }).catch((err) => {
          alert(err.response.data.message)
          console.log(err);
      });
console.log(email, password);
  }
    
  return (
    <div className="singUp">
        <div className='form-container'>
            <div className='form'>
          <p >
            Sign up to Track your Workout
          </p>
          <div>
            <input type = "text" name= "name" id="name"  value={name}    placeholder='Full name'  onChange={(e)=>{setName(e.target.value)}}/>
          </div>

          <div>
            <input type = "text" name= "gender" id="gender" value={gender} placeholder='Gender'  onChange={(e)=>{setGender(e.target.value)}}/>
          </div>
          <div>
            <input type = "email" name= "email" id="email" value={email}  placeholder='Email'   onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div>
            <input type = "password" name= "password" id="password"  value={password} placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>
          <div>
            <input type = "phone" name= "phone" id="phone"  value={phone} placeholder='phone' onChange={(e)=>{setPhone(e.target.value)}}/>
          </div>
          <button onClick={submitHandler}>Submit</button>
          

        </div>
        <div className='form2'>
            Already have an account ? 
            <Link to ="/singIn">         
              <span style={{color:"blue",cursor:"pointer"}}>Sign In</span>
              </Link>
 
        </div>
        </div>
    </div>
  )
}