import React, { useState, useEffect } from 'react';
import Main from './Pages/Main';
//import Signin from './Pages/Signin';
import AdminLogin from './Pages/AdminLogin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Attendance from './Pages/Attendance';
import Teacher from './Pages/Teacher';

function App() {
  return (
  <BrowserRouter>
  <Routes>
      <Route path="/">
      <Route index element={<Main />} />
      <Route path="AdminLogin" element={<AdminLogin />} />
      <Route path="Attendance" element={<Attendance />} />
      <Route path="Teacher" element={<Teacher />} />
      <Route path="Attendance" element={<Attendance />} />
      
    </Route>
  </Routes>
  </BrowserRouter>
  )
  }
export default App;
