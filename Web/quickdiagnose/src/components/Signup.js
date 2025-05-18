import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Signup = () => {
  const [form, setForm] = useState({
    name: '',
    surname: '',
    birthYear: '',
    gender: '',
    city: '',
    tc: '',
    password: '',
    passwordRepeat: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada daha sonra veritabanı bağlantısı yapılacak
    if (form.password !== form.passwordRepeat) {
      alert('Şifreler eşleşmiyor!');
      return;
    }
    console.log('Kayıt verileri:', form);
  };

  return (
    <div className="login-page">
      <div className="login-left-panel">
        <div className="login-box">
          <div className="logo-container">
            <img src="/img/logom.png" alt="QuickDiagnose Logo" className="logo" />
          </div>
          <h2>Hasta Kayıt</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="İsim"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="surname"
                placeholder="Soyisim"
                value={form.surname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="number"
                name="birthYear"
                placeholder="Doğum Yılı"
                value={form.birthYear}
                onChange={handleChange}
                min="1900"
                max={new Date().getFullYear()}
                required
              />
            </div>
            <div className="input-group">
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                required
              >
                <option value="">Cinsiyet</option>
                <option value="Erkek">Erkek</option>
                <option value="Kadın">Kadın</option>
                <option value="Diğer">Diğer</option>
              </select>
            </div>
            <div className="input-group">
              <input
                type="text"
                name="city"
                placeholder="Memleket"
                value={form.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="tc"
                placeholder="T.C. Kimlik No"
                value={form.tc}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Şifre"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="passwordRepeat"
                placeholder="Şifre Tekrar"
                value={form.passwordRepeat}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="login-button">
              Kayıt Ol
            </button>
          </form>
          <p className="register-link">
            Zaten hesabınız var mı?{' '}
            <span onClick={() => navigate('/')}>Giriş Yap</span>
          </p>
        </div>
      </div>
      <div className="login-right-panel">
        <div className="info-content">
          <h1>Hasta Kayıt</h1>
          <div className="info-section">
            <h3>Hızlı ve Güvenli Kayıt</h3>
            <p>Bilgilerinizi eksiksiz doldurarak sisteme kolayca kayıt olabilirsiniz.</p>
          </div>
          <div className="info-section">
            <h3>Avantajlar</h3>
            <ul>
              <li>Kişisel sağlık verilerinizi yönetin</li>
              <li>Sonuç ve geçmişinizi takip edin</li>
              <li>Randevu ve doktor bilgilerine erişin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup; 