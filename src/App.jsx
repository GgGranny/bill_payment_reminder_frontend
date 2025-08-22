import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout';
import AddBills from './pages/Form';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/layout" element={<Layout />} >
          <Route path="/layout/dashboard" element={<Dashboard />} />
          <Route path="/layout/add" element={<AddBills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
