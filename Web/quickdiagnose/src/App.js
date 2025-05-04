import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';
import Hospitals from './pages/Hospitals';
import TestResults from './pages/TestResults';
import PatientInfo from './pages/PatientInfo';
import Appointments from './pages/Appointments';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hospitals" element={<Hospitals />} />
        <Route path="/test-results" element={<TestResults />} />
        <Route path="/patient-info" element={<PatientInfo />} />
        <Route path="/appointments" element={<Appointments />} />
      </Routes>
    </Router>
  );
}

export default App;
