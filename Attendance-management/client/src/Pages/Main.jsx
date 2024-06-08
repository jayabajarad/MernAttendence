import React from 'react';
import { Link } from 'react-router-dom';
import Attend from './Attend.jpg';
import './home.css';

const Main = () => {
    return (
        <div className="home-container">
            <img src={Attend} alt="Attendance" />
            <div className='midd'>
                <h1 className="he">Attendance Management System</h1>
                <Link to="/AdminLogin" className="button">Admin Login</Link>
                <p className='button-text'>Please login Here</p>
            </div>
      
        </div>
    );
}

export default Main;