import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [tcNo, setTcNo] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('hasta'); // hasta veya doktor
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Burada daha sonra veritabanı bağlantısı yapılacak
    console.log('Giriş yapılıyor:', { tcNo, password, userType });
    navigate('/home');
  };

  return (
    <div className="login-page">
      <div className="login-left-panel">
        <div className="login-box">
          <div className="logo-container">
            <img src="/img/logom.png" alt="QuickDiagnose Logo" className="logo" />
          </div>
          <h2>QuickDiagnose</h2>
          <div className="user-type-select">
            <button
              className={userType === 'hasta' ? 'user-type-btn active' : 'user-type-btn'}
              onClick={() => setUserType('hasta')}
            >
              Hasta Girişi
            </button>
            <button
              className={userType === 'doktor' ? 'user-type-btn active' : 'user-type-btn'}
              onClick={() => setUserType('doktor')}
              disabled
            >
              Doktor Girişi
            </button>
          </div>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="text"
                placeholder="T.C. Kimlik No"
                value={tcNo}
                onChange={(e) => setTcNo(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Şifre"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Giriş Yap
            </button>
          </form>
          <p className="register-link">
            Hesabınız yok mu?{' '}
            <span onClick={() => navigate('/register')}>Kayıt Ol</span>
          </p>
        </div>
      </div>
      <div className="login-right-panel">
        <div className="info-content">
          <h1>QuickDiagnose'a Hoş Geldiniz</h1>
          <div className="info-section">
            <h3>Sağlığınız İçin Tek Adres</h3>
            <p>QuickDiagnose ile sağlık bilgilerinize hızlı ve güvenli bir şekilde erişin.</p>
          </div>
          <div className="info-section">
            <h3>Özellikler</h3>
            <ul>
              <li>Tahlil sonuçlarınızı görüntüleyin</li>
              <li>Radyoloji görüntülerinize erişin</li>
              <li>Hastalık geçmişinizi takip edin</li>
              <li>Doktor randevularınızı yönetin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login; 