import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import HastaligimNe from './components/HastaligimNe';
import Hastaneler from './components/Hastaneler';
import './App.css';

const Placeholder = ({ title }) => (
  <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#f8f8fa' }}>
    <div style={{ background: '#fff', padding: '2rem 3rem', borderRadius: '16px', boxShadow: '0 4px 32px rgba(183, 28, 28, 0.10)' }}>
      <h2 style={{ color: '#b71c1c', fontWeight: 700 }}>{title}</h2>
      <p style={{ color: '#333', marginTop: '1rem' }}>Bu sayfanın içeriği yakında eklenecek.</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/hastaligim-ne" element={<HastaligimNe />} />
        <Route path="/gecmis-hastaliklar" element={<Placeholder title="Geçmiş Hastalıklarım ve Alerjilerim" />} />
        <Route path="/ilaclar" element={<Placeholder title="Kullandığım İlaçlar" />} />
        <Route path="/hastaneler" element={<Hastaneler />} />
        <Route path="/randevu" element={<Placeholder title="Randevu Al" />} />
        <Route path="/tahlil-yorum" element={<Placeholder title="Tahlil Sonucumu Yorumla" />} />
      </Routes>
    </Router>
  );
}

export default App;
