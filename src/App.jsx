import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Layout from './pages/Layout';
import Form from './pages/Form';
import Login from './pages/Login';
import ProfileUpload from './pages/ProfileUpload';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/layout" element={<Layout />} >
          <Route path="/layout/dashboard" element={<Dashboard />} />
          <Route path="/layout/add" element={<Form />} />
          <Route path="/layout/profileUpload" element={<ProfileUpload />} />
          <Route path="/layout/setting" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
