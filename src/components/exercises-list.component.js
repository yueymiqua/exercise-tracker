import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = props => {
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.data.substring(0,10)}</td>
    <td>
      <Link to={`/edit/${props.exercise._id}`}>edit</Link> | <a href="#" onClick={() => { props.deleteExercise(props._id)}}>delete</a>
    </td>
  </tr>
}

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
    axios.delete(`http://localhost:5000/exercises/${id}`)
    .then(res => console.log(res.data))

    setExercises(exercises.filter(exercise => exercise._id !== id))
  }

  const exerciseList = () => {
    return exercises.map(currentExercise => {
      return <Exercise exercise={currentExercise} deleteExercise={() => deleteExercise()} key={currentExercise._id} />
    })
  }

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exerciseList}
        </tbody>
      </table>
    </div>
  )
}

export default ExercisesList;