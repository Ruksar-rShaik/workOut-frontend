import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

export default function Recommend() {

 const [targetCalories,setTargetCalories] = useState('')
 const [timeDuration,setTimeDuration] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    axios.post('https://track-it2.onrender.com/SugstWorkout',{
        timeDuration,targetCalories,
   },{ 
    headers:{
            "x-api-key":localStorage.getItem("token")
           }
    }).then((res)=>{
        console.log(res.data)
    })
    .catch((err)=>console.log(err.response.data))
  }
  return (

    <div className='m-5'> 
       <input className= 'w-25' type="text" name="targetCalories" id="targetCalories"  placeholder='targetCalories' onChange={(e)=>setTargetCalories(e.target.value)}/>
       <br/>
       <input className= 'w-25' type="text" name="timeDuration" id="timeDuration" placeholder='timeDuration' onChange={(e)=>setTimeDuration(e.target.value)}/>
<br/> <br/>
      <Button type="submit" onClick={handleSubmit}>Submit</Button>
    </div>
  )
}
