import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './admin.css';
const AdminLogin =()=>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const history = useNavigate();
    
    const getAccess=()=>{
        if(email==="admin@gmail.com" && password==="admin"){
            window.alert("Login Successful");
            history("/Attendance");
            
        }
        
        else{
            window.alert("You don't have this access");
        }
    }
    return(
        <>
        <h1 className="head">Admin Login</h1>
        <hr />

        <form method="GET">
        <div className="form-group text-center jumbotron mx-5">
        
        <div >
                <label htmlFor="email">
                Email ID:
                </label>
                <input type="email" name="email" id="email" autoComplete="off" 
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Your email ID here" className='mx-2'></input>
              </div>
              
              <br />
              <div className="form-group">
                <label htmlFor="password">
                Password: 
                </label>
                <input type="password" name="password" id="password" autoComplete="off" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Enter your password" className='mx-1'></input>
              </div>
<br />
             <div className="text">
             <button type='button' onClick={getAccess}>Login</button>
              </div>
              </div>
        </form>
        
        </>
    )
} 

export default AdminLogin;