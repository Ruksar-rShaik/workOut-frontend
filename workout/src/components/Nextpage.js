import React, { useState } from "react"
import axios from "axios"
import { Button } from "react-bootstrap"
import {useNavigate,useLocation} from "react-router-dom"
import Img from "../Img/homeImg.jpeg"


export default function Nextpage(){
    const location=useLocation()
    console.log(location.state.prop)
    const token=localStorage.getItem("token")
    let [caloriesBurn,setCaloriesBurn]=useState("")
    const navigate=useNavigate()

    
    async function submitHandler(e){
        if(!token) navigate("/signIn")
     e.preventDefault();
     await axios.post("https://track-it2.onrender.com/session",{
        
       workout:location.state.prop.workout,timeDuration:location.state.prop.timeDuration
       
     },{
      headers:{
          "x-api-key":localStorage.getItem("token")
      }
   }).then((res)=>{console.log(res.data.data.totalCaloriesBurn)
    console.log(location.state.workout,location.state.timeDuration)
  setCaloriesBurn(res.data.data.totalCaloriesBurn)
    
  })
     .catch((err)=>{console.log(err)})
    }
    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
         {caloriesBurn?<h3 style={{color:"#8A2BE2","font-family": "Arial","margin-top": "8px"}}>CaloriesBurnt={caloriesBurn} <br/> </h3>:<Button type='submit' onClick={submitHandler}>Save</Button>} &nbsp;
         <Button type="submit" onClick={(e)=>navigate("/")}> GoBack</Button>
    
         <img style={{  margin: "-10px 0 0 0" ,marginTop: "-100px", alignSelf: 'flex-end', marginBottom: "-20px" } } src={Img} alt="Home"/>
                       
             <br/>
        </div>
    )    
}