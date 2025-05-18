import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHeartbeat, FaHistory, FaPills, FaHospital, FaCalendarAlt, FaVial, FaUser, FaTint, FaVenusMars, FaMapMarkerAlt, FaBirthdayCake, FaNotesMedical, FaCapsules, FaAllergies } from 'react-icons/fa';
import './Login.css';

const buttons = [
  {
    title: 'Hastalığım Ne?',
    path: '/hastaligim-ne',
    desc: 'Belirtilerinize göre olası hastalıkları öğrenin.',
    icon: <FaHeartbeat color="#d7263d" size={32} />,
    color: '#ffeaea'
  },
  {
    title: 'Geçmiş Hastalıklarım ve Alerjilerim',
    path: '/gecmis-hastaliklar',
    desc: 'Daha önce geçirdiğiniz hastalıklar ve alerjileriniz.',
    icon: <FaHistory color="#b71c1c" size={32} />,
    color: '#fff3e0'
  },
  {
    title: 'Kullandığım İlaçlar',
    path: '/ilaclar',
    desc: 'Şu anda kullandığınız ilaçların listesi.',
    icon: <FaPills color="#d7263d" size={32} />,
    color: '#e3f2fd'
  },
  {
    title: 'Hastaneler',
    path: '/hastaneler',
    desc: 'Size en yakın hastaneleri görüntüleyin.',
    icon: <FaHospital color="#b71c1c" size={32} />,
    color: '#e8f5e9'
  },
  {
    title: 'Randevu Al',
    path: '/randevu',
    desc: 'Doktor randevusu alın ve yönetin.',
    icon: <FaCalendarAlt color="#d7263d" size={32} />,
    color: '#fffde7'
  },
  {
    title: 'Tahlil Sonucumu Yorumla',
    path: '/tahlil-yorum',
    desc: 'Tahlil sonuçlarınızı analiz edin ve yorum alın.',
    icon: <FaVial color="#b71c1c" size={32} />,
    color: '#f3e5f5'
  }
];

const userInfo = [
  { icon: <FaUser />, label: 'Ad Soyad', value: 'Ahmet Yılmaz' },
  { icon: <FaBirthdayCake />, label: 'Yaş', value: '30' },
  { icon: <FaTint />, label: 'Kan Grubu', value: 'A+' },
  { icon: <FaVenusMars />, label: 'Cinsiyet', value: 'Erkek' },
  { icon: <FaMapMarkerAlt />, label: 'Memleket', value: 'Ankara' },
];

const chronicDiseases = ['Diyabet', 'Hipertansiyon'];
const activeDrugs = ['Metformin', 'Aspirin'];
const allergies = ['Penisilin', 'Fıstık'];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-layout">
      <aside className="sidebar">
        <div className="sidebar-title">Kişisel Bilgiler</div>
        <ul className="sidebar-list">
          {userInfo.map((item, i) => (
            <li className="sidebar-list-item" key={i}>
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{item.label}:</span>
              <span className="sidebar-value">{item.value}</span>
            </li>
          ))}
        </ul>
        <div className="sidebar-section">
          <div className="sidebar-section-title"><FaNotesMedical className="sidebar-section-icon" /> Kronik Hastalıklar</div>
          <ul className="sidebar-section-list">
            {chronicDiseases.length > 0 ? chronicDiseases.map((d, i) => (
              <li key={i}>{d}</li>
            )) : <li>Yok</li>}
          </ul>
        </div>
        <div className="sidebar-section">
          <div className="sidebar-section-title"><FaCapsules className="sidebar-section-icon" /> Aktif İlaçlar</div>
          <ul className="sidebar-section-list">
            {activeDrugs.length > 0 ? activeDrugs.map((d, i) => (
              <li key={i}>{d}</li>
            )) : <li>Yok</li>}
          </ul>
        </div>
        <div className="sidebar-section">
          <div className="sidebar-section-title"><FaAllergies className="sidebar-section-icon" /> Alerjiler</div>
          <ul className="sidebar-section-list">
            {allergies.length > 0 ? allergies.map((d, i) => (
              <li key={i}>{d}</li>
            )) : <li>Yok</li>}
          </ul>
        </div>
      </aside>
      <main className="home-gradient-bg home-main-area">
        <div className="home-main-container">
          <div className="home-welcome">
            <h1>Hoş Geldiniz!</h1>
            <p>Sağlık yolculuğunuzda size yardımcı olacak akıllı panel.</p>
          </div>
          <div className="home-card-grid">
            {buttons.map((btn, i) => (
              <div className="home-card" style={{ background: btn.color }} key={i} onClick={() => navigate(btn.path)}>
                <div className="home-card-icon">{btn.icon}</div>
                <div className="home-card-title">{btn.title}</div>
                <div className="home-card-desc">{btn.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home; 