import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import AdminLogin from './Pages/AdminLogin';
import Main from './Pages/Main';
import Teacher from './Pages/Teacher';
import Attendance from './Pages/Attendance';
export default function Layout() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" Component={Main}>
    <Route index Component={Main} />
    <Route path="AdminLogin" Component={AdminLogin} />
    <Route path="Attendance" element={<Attendance />} />
    <Route path="Teacher" element={<Teacher />} />
    <Route path="Attendance" element={<Attendance />} />
  </Route>
</Routes>
</BrowserRouter>
);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
