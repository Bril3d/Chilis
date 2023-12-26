import React from 'react';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/dashboard/Login';
import AddFood from './pages/dashboard/AddFood.js';
import DashboardLayout from './pages/dashboard/Layout/DashboardLayout';
import DashboardView from './pages/dashboard/DashboardView';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="create" element={<AddFood />} />
          <Route path="view" element={<DashboardView />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 
