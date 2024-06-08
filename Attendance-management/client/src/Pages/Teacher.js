import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Teacher() {
 
    const [name, setName] = useState('');
    const history = useNavigate(); 
    const addToList = () => {
      Axios.post('http://localhost:3031/insertTeacher', { name: name})
        .then((response) => {
          console.log('Teacher added successfully');
          // Update the student list with the new student
         
          // Reset the form inputs
          setName('');
          history("/Attendance");
        })
        .catch((error) => {
          console.error('Error adding teacher', error);
        });
    };
    return (
      <div className="App">
        <h1> Add Teacher</h1>
        <div className="StudentForm">
          <label>Teacher Name :</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={addToList}>Add</button>
        </div>
        
        </div>
    );
  }
  
  
  export default Teacher;
  