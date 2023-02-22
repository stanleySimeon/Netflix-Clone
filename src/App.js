import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login';
import SignupPassword from './components/SignupPassword';
import Plan from './components/Plan';
import Stream from './components/Stream';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupPassword />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/stream" element={<Stream />} />
      </Routes>
    </Router>
  );
}

export default App;
