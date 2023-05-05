import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Recommend.css';

export default function Recommend() {
  const [targetCalories, setTargetCalories] = useState('');
  const [timeDuration, setTimeDuration] = useState('');
  const [workout, setWorkout] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(
        'https://track-it2.onrender.com/SugstWorkout',
        {
          timeDuration,
          targetCalories,
        },
        {
          headers: {
            'x-api-key': localStorage.getItem('token'),
          },
        }
      )
      .then((res) => {
        console.log(res.data);

        setWorkout(res.data.data.workout);
      })
      .catch((err) => console.log(err.response.data));
  }

  return (
    <div className="recommend-page">
      <div className="recommend-form-container">
        <form className="recommend-form">
          <input
            className="recommend-input"
            type="number"
            name="targetCalories"
            id="targetCalories"
            placeholder="Enter Target Calories"
            style={{width:"20rem"}}
            onChange={(e) => setTargetCalories(e.target.value)}
          />
          
          <input
            className="recommend-input"
            type="number"
            name="timeDuration"
            id="timeDuration"
            placeholder="Enter Time Duration in Minutes"
            style={{width:"20rem"}}
            onChange={(e) => setTimeDuration(e.target.value)}
          />
          <Button type="submit" onClick={handleSubmit} className="recommend-button">
            Submit
          </Button>
          <Button type="submit" onClick={() => navigate('/')} className="recommend-button">
            Go Back
          </Button>
        </form>
        {workout && (
          <h3 className="recommend-result">
            Best workout to burn {targetCalories} calories in {timeDuration} minutes is {workout}
          </h3>
        )}
      </div>
    </div>
  );
}
