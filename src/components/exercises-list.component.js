import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ExercisesList = () => {

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/exercises/')
      .then(res => {
        setExercises(res.data);
        console.log(exercises);
      }).catch(err => {
        console.log('Error: ' + err)
      })
  },[])

  const deleteExercise = (id) => {
    axios.delete(`http://localhost:5000/${id}`)
    .then(res => console.log(res.data))

    setExercises(exercises.filter(exercise => exercise._id !== id))
  }

  return <div>You are on the Exercises List component!</div>
}

export default ExercisesList;