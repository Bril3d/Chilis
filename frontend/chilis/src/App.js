import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/dashboard/Login';
import CreateUser from './pages/dashboard/CreateUser';
import DashboardLayout from './pages/dashboard/Layout/DashboardLayout';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="create" element={<CreateUser />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 
