import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const CreateExercise = () => {

  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(['test user']);
    setUsername('test user');
  },[])

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  }

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  }

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  }

  const onChangeDate = (newDate) => {
    setDate(newDate);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const exercise = {
      username: username,
      description: description,
      duration: duration,
      date: date
    }

    console.log(exercise);

    window.location = '/';
  }

  return (
    <div>
      <h3>Create New Exercise Form</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select ref="userInput" 
            required 
            className="form-control" 
            value={username} 
            onChange={(e) => onChangeUsername(e)}>
            {
              users.map((user) => {
                return <option key={user} value={user}>{user}</option>
              })
            }
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input type="text"
            required
            className="form-control"
            value={description}
            onChange={(e) => onChangeDescription(e)}  
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input type="number"
            required
            className="form-control"
            value={duration}
            onChange={(e) => onChangeDuration(e)}  
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <input type="date"
            className="form-control"
            onChange={(e) => onChangeDate(e)}
          />
        </div>
      </form>
    </div>
  )
}

export default CreateExercise;