
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./Leadeboard.css"


const Leaderboard = () => {
  const [calories, setCalories] = useState([]);
  const [week, setWeek] = useState([])
  const [month, setMonth] = useState([])
  const [selectedOption, setSelectedOption] = useState('total');
  
  

  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/signIn")
      return
    }
    axios.get('https://track-it2.onrender.com/leaderBoard').then(res=>{
      console.log(res.data);
      setCalories(res.data.data)
    }).catch(err=>console.log(err))

  }, []);

  function handleOptionChange(changeEvent) {
    setSelectedOption(changeEvent.target.value);
  }

  useEffect(() => {
    if (selectedOption === 'weekly') {
      axios.get('https://track-it2.onrender.com/weeklyLeaderBoard').then(res=>{
        setWeek(res.data.data)
        console.log(res.data)
      }).catch(err=>{
        console.log(err)
      })
    } else if (selectedOption === 'monthly') {
      axios.get('https://track-it2.onrender.com/monthlyLeaderBoard').then(res=>{
        setMonth(res.data.data)
        console.log(res.data)
      }).catch(err=>{
        console.log(err)
      })
    }
  }, [selectedOption]);

  return (
    <>
      <form>
        <div >
        <label>
            <input type="radio" value="total" checked={selectedOption === 'total'} onChange={handleOptionChange} />
            Lifetime
          </label>
          <label>
            <input type="radio" value="weekly" checked={selectedOption === 'weekly'} onChange={handleOptionChange} />
            Weekly
          </label>
          <label>
            <input type="radio" value="monthly" checked={selectedOption === 'monthly'} onChange={handleOptionChange} />
            Monthly
          </label>
        </div>
      </form>

      {selectedOption === 'total' && (
        <table className="table">
          <thead>
            <tr>
              <th>Sl.No</th>
              <th>Name</th>
              <th>Total Calories Burned</th>
            </tr>
          </thead>
          <tbody>
            {calories ? calories.map((person,index) => (
              <tr key={person.name}>
                <td>{index+1}</td>
                <td>{person.name}</td>
                <td>{person.caloriesBurnTillNow}</td>
              </tr>
            )) : <tr><td>Loading...</td></tr>}
          </tbody>
        </table>
      )}

      {selectedOption === 'weekly' && (
        <table className="table">
          <thead>
            <tr>
            <th>Sl.No</th>
              <th>Name</th>
              <th>Calories Burned This Week</th>
            </tr>
          </thead>
          <tbody>
            {week ? week.map((person,index) => (
              <tr key={person.name}>
                <td>{index+1}</td>
                <td>{person.userName}</td>
                <td>{person.totalCaloriesBurned}</td>
              </tr>
            )) : <tr><td>Loading...</td></tr>}
          </tbody>
        </table>
      )}

      {selectedOption === 'monthly' && (
        <table className="table">
          <thead>
            <tr>
            <th>Sl.No</th>
              <th>Name</th>
              <th>Total Calories Burned This Month</th>
            </tr>
          </thead>
          <tbody>
            {month ? month.map((person,index) => (
              <tr key={person.name}>
                <td>{index+1}</td>
                <td>{person.name}</td>
                <td>{person.totalCaloriesBurned}</td>
              </tr>
               )) : <tr><td>Loading...</td></tr>}
               </tbody>
             </table>
           )}
           </>
  )
            }


            export default Leaderboard;





















            //   return (
// //     <>
// //     <button onClick={()=>handleWeekly()}>Weekly</button>
// //     <button  onClick={()=>handleMonthly()}>Monthly</button>
// //     <button >Total</button>
// //     {weekly &&
// //     (week?
// //       <div>{week.map(people=><div>
// //       <h3>{people.name}</h3>
// //       <h3>{people.caloriesBurnTillNow}</h3>
// //       </div>
// //       )}</div>:<h1>Loading...</h1>)
// // }
// // {monthly && (month?
// // <div>{month.map(people=><div>
// //   <h3>{people.name}</h3>
// //   <h3>{people.totalCaloriesBurned}</h3>
// // </div>
// // )}</div>:<h1>Loading...</h1>)
// // }
// //     {total &&
// //    ( calories?
// //       <div>{calories.map(people=><div>
// //       <h3>{people.name}</h3>
// //       <h3>{people.caloriesBurnTillNow}</h3>
// //       </div>
// //       )}</div>:<h1>Loading...</h1>)
// // }
// //       </>
// <>
//       <button className="button" onClick={() => handleWeekly()}>Weekly</button>
//       <button className="button" onClick={() => handleMonthly()}>Monthly</button>
      

//       {weekly && (
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Calories Burned This Week</th>
//             </tr>
//           </thead>
//           <tbody>
//             {week ? week.map((person) => (
//               <tr key={person.name}>
//                 <td>{person.name}</td>
//                 <td>{person.caloriesBurnTillNow}</td>
//               </tr>
//             )) : <tr><td>Loading...</td></tr>}
//           </tbody>
//         </table>
//       )}

//       {monthly && (
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Total Calories Burned This Month</th>
//             </tr>
//           </thead>
//           <tbody>
//             {month ? month.map((person) => (
//               <tr key={person.name}>
//                 <td>{person.name}</td>
//                 <td>{person.totalCaloriesBurned}</td>
//               </tr>
//             )) : <tr><td>Loading...</td></tr>}
//           </tbody>
//         </table>
//       )}

//       {total && (
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Total Calories Burned</th>
//             </tr>
//           </thead>
//           <tbody>
//             {calories ? calories.map((person) => (
//               <tr key={person.name}>
//                 <td>{person.name}</td>
//                 <td>{person.caloriesBurnTillNow}</td>
//               </tr>
//             )) : <tr><td>Loading...</td></tr>}
//           </tbody>
//         </table>
//       )}
//     </>
//   )
// };

// export default Leaderboard;
