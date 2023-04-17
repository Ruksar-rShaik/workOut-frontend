import React, {useState, useEffect} from 'react'
import Walking from "../Img/walking.png"
import Running from '../Img/running.jpg'
import Jogging from "../Img/jogging.jfif"
import Swimming from '../Img/swimming.jfif'
import Zumba from '../Img/zumba.jfif'
import Yoga from "../Img/yoga.jfif"
import Aerobics from "../Img/aerobics.jpg"
import Dance from "../Img/dance.webp"
import Cycling from "../Img/cycling.jpg"
import Boxing from "../Img/boxing.jfif"
import Gym from "../Img/Gym.jfif"
import Pilates from "../Img/pilates.jpg"
import axios from 'axios'
import bckimg from "../Img/bckimage.jfif"
import Moment from 'react-moment';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



export default function Homepage() {


  const[workout,setWorkout]=useState("")
    const[timeDuration,settimeDuration]=useState("")
    const navigate = useNavigate();
    const [data,setData] = useState('')
    const [prop,setProp]=useState("")
    const token=localStorage.getItem("token")
    // const token=localStorage.getItem("token")
    // let [caloriesBurn,setCaloriesBurn]=useState("")
    // let [propsData, setPropsData]=useState("")
    useEffect(()=>{
      const fetchData =  ()=>{
          if(!token){
              navigate('/signin')
          }    
      }
      fetchData()
  })
   useEffect(()=>{
    
    axios.get('https://track-it2.onrender.com/getSingleUser',{
    headers:{
     "x-api-key":localStorage.getItem("token")
    }
  }
  ).then(res=>{ console.log(res);
     setData(res.data.data)}).catch(err=>console.log(err))
},[]
   )

   const handleReset = () => {
    settimeDuration('');
    setWorkout("")
  }
  

  function goToNextPage(){
  
    const state={
      prop:{workout,timeDuration}
      
    }
    console.log(state)
    if(!workout) alert("please select workout")
    if(!timeDuration) alert("please enter timeDuration")
    if (workout && timeDuration) {
      navigate("/nextpage",{state})
    } 
}


   const getImage = (workout) => {
    switch (workout) {

      case "Running":
        return Running;

      case "Swimming":
        return Swimming;

        case "Jogging":
        return Jogging;

        case "Walking":
        return Walking;
        
        case "Zumba":
        return Zumba;

        case "Yoga":
        return Yoga;

        case "Aerobics":
        return Aerobics

        case "Dance":
        return Dance;

        case "Cycling":
        return Cycling

        case "Gym":
        return Gym

        case "Pilates":
        return Pilates

        case "Boxing":
        return Boxing

        default:
      return "";
     
    }
  };
   
  
  return (
<div style={{ backgroundImage: `url(${bckimg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',backgroundPosition: 'center',height:"40rem"}}>
    <div className='row'>
      {data.length !== 0 ? (
        <div>
          {data.map((ssn) => (
            <div className='col-3 shadow p-3 my-2 border' style={{ backgroundColor: '#ADD8E6', borderRadius: '8px', boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.2)' }}>
              <div className='d-flex'>
                <div className='me-2'>
                  <img
                    src={getImage(ssn.workout)}
                    alt={ssn.workout}
                    style={{ height: '10rem', width: '10rem', objectFit: 'cover', borderRadius: '50%' }}
                  />
                </div>
                <div>
                  <h5 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    <Moment format='DD/MM/YYYY'>{ssn.date}</Moment>
                  </h5>
                  <h5 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>{ssn.workout}</h5>
                  <div>
                    <h5 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}> Time Duration: {ssn.timeDuration} minutes</h5>
                  </div>
                  <div>
                    <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Total Calories Burnt: {ssn.totalCaloriesBurn}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 style={{ fontWeight: 'bold', display: 'flex', justifyContent: 'start', color: '#555' }}>No Sessions Added</h1>
      )}
  
      <div style={{ position: 'fixed', top: '10rem', left: '20rem', zIndex: 100 }}>
        <form>
          <option></option>
          <select
            value={workout}
            onChange={(e) => setWorkout(e.target.value)}
            style={{ width: '25rem', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)', padding: '0.5rem', borderRadius: '8px', marginBottom: '1rem' }}
          >
            <option value=''>Choose an exercise</option>
            <option value='Walking'>Walking</option>
            <option value='Running'>Running</option>
            <option value='Jogging'>Jogging</option>
            <option value='Yoga'>Yoga</option>
            <option value='Zumba'>Zumba</option>
            <option value='Aerobics'>Aerobics</option>
            <option value='Swimming'>Swimming</option>
            <option value="Cycling">Cycling</option>
            <option value="Boxing">Boxing</option>
            <option value="Dance">Dance</option>
            <option value="Gym">Gym</option>
            <option value="Pilates">Pilates</option>
            
            
          </select>
          &nbsp;&nbsp;&nbsp;
          <input
            className='1'
            style={{ width: '12rem', marginRight: '1rem', padding: '0.5rem', borderRadius: '8px' }}
            type='text'
            name='timeDuration'
            id='timeDuration'
            value={timeDuration}
            placeholder='Enter time in minutes'
            onChange={(e) => {
              settimeDuration(e.target.value);
            }}
          />
          <br />
          <Button onClick={goToNextPage} className='m-2' type='submit' style={{ backgroundColor: '#007bff', borderColor: '#007bff', marginRight: '0.5rem' }}>
            Next
          </Button>
          <Button className="m-2" type="reset" onClick={handleReset} style={{ backgroundColor: "#dc3545", borderColor: "#dc3545" }}>Reset</Button>
          <br />
          {workout && (
          <img src={getImage(workout)} alt={workout} style={{ height: "30rem", width: "30rem" }}/>)}

          </form>
          </div>

            </div>
            </div>
          );
          }
            























// return (
  //   <>
  //   { data? <div >
  //     {data.map(ssn=><div className='col-2 shadow lg p-2 my-1 border'><h5><Moment format="DD/MM/YYYY">
  //               {ssn.createdAt}
  //           </Moment>
  //           </h5>
  //     <h3>{ssn.workout} </h3>
  //     <img src={getImage(ssn.workout)} alt={ssn.workout} />
  //     <div>Time Duration <h4>{ssn.timeDuration} minutes</h4></div>
  //     <div>Total calories burnt<h4>{ssn.totalCaloriesBurn}</h4></div></div>)}
    
  //   </div>:<h1>loading...</h1>}
  //   </>
    
  // )
