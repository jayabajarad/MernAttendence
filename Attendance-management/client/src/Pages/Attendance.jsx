import React, { useState, useEffect } from 'react';
import './Attendence.css';
import Axios from 'axios';
import StudentList from './StudentList';
import { useNavigate } from 'react-router-dom';
function Attendance() {
 
    const [name, setName] = useState('');
    const [rollnumber, setRollnumber] = useState(0);
    const [studentList, setStudentList] = useState([]);
    const [attendanceData, setAttendanceData] = useState({});
    const [teachers, setTeachers] = useState([]);
    const [selectedTeacher, setSelectedTeacher]  = useState('');
    const [startDate,setstartDate]=useState(new Date());
    const [endDate,setendDate]=useState(new Date());
    
    useEffect(() => {
      // Fetch teachers data from backend when component mounts
      const fetchTeachers = async () => {
        try {
          const response = await Axios.get('http://localhost:3031/teachers'); // Assuming your API endpoint is '/teachers'
          setTeachers(response.data);
        } catch (error) {
          console.error('Error fetching teachers:', error);
        }
      };
  
      fetchTeachers();
    }, []);
  
  
    useEffect(() => {
      Axios.get('http://localhost:3031/read')
        .then((response) => {
          setStudentList(response.data);
        })
        .catch((error) => {
          console.error('Error fetching student list:', error);
        });
    }, []);
  
    const addToList = () => {
      Axios.post('http://localhost:3031/insert', { name: name, rollnumber: rollnumber })
        .then((response) => {
          console.log('Student added successfully');
          // Update the student list with the new student
          setStudentList((prevList) => [...prevList, response.data]);
          // Reset the form inputs
          setName('');
          setRollnumber(0);
        })
        .catch((error) => {
          console.error('Error adding student:', error);
        });
    };
  
    const handleAttendanceChange = (studentId, attendance) => {
      setAttendanceData((prevData) => ({
        ...prevData,
        [studentId]: attendance,
      }));
    };
  
    const handleUpdateAttendance = () => {
      const attendanceArray = Object.entries(attendanceData).map(([studentId, attendance]) => ({
        studentId,
        attendance,
      }));
  
      Axios.post('http://localhost:3031/attendance', { attendanceData: attendanceArray })
        .then(() => {
          console.log('Attendance recorded successfully');
        })
        .catch((error) => {
          console.error('Error recording attendance:', error);
        });
    };
  
    const handleDownloadAttendance = () => {
      Axios.get(`http://localhost:3031/download?startDate=${startDate}&endDate=${endDate}`, { startDate: startDate, endDate: endDate, responseType: 'blob' })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'attendance.csv');
          document.body.appendChild(link);
          link.click();
          link.remove();
          setstartDate(new Date());
          setendDate(new Date());
        })
        .catch((error) => {
          console.error('Error downloading attendance data:', error);
        });
    };
    
    const history = useNavigate();
    const goToTeacher=()=>{
          history("/Teacher");
  }
  
    return (
      <div className="App">
        <h1> BASIC ATTENDANCE MANAGEMENT APPLICATION</h1>
        <div className="StudentForm">
          <label>Name :</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <label>Roll Number :</label>
          <input type="number" value={rollnumber} onChange={(e) => setRollnumber(e.target.value)} />
          <button onClick={addToList}>Add Student</button>
        </div>
        <div>
        <button onClick={goToTeacher}>Add Teacher</button>
        <label>Choose a Teacher:</label>
        <select value={selectedTeacher} onChange={(e) => setSelectedTeacher(e.target.value)}>
        <option value="">Select a teacher</option>
        {teachers.map((teacher) => (
          <option key={teacher._id} value={teacher._id}>
            {teacher.name}
          </option>
        ))}
      </select>
      <p>Selected Teacher:{selectedTeacher}</p>
        </div>
        <StudentList
          studentList={studentList}
          attendanceData={attendanceData}
          handleAttendanceChange={handleAttendanceChange}
        />
        <div className="ButtonContainer">
          <button className="UpdateButton" onClick={handleUpdateAttendance}>
            Update
          </button>
          <div className="row">
          <div className="col">
          <label className='form-label'>Start Date</label>
          <input className="form-control" type="date" value={startDate} onChange={(e) => setstartDate(e.target.value)}/>
          </div>
          <div className='col'>
            <label className='form-label'>End Date</label>
          <input className='form-control' type="date" value={endDate} onChange={(e) => setendDate(e.target.value)}/>
          </div>
          <button className="DownloadButton" onClick={handleDownloadAttendance}>
            Download Attendance
          </button>
        </div>
        </div>
      </div>
    );
  }
  
  
  export default Attendance;
  