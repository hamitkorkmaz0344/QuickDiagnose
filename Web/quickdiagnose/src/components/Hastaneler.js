import React, { useState } from 'react';
import { FaMapMarkerAlt, FaHospital, FaStar, FaUserMd } from 'react-icons/fa';
import './Login.css';

const hospitals = [
  // Elazığ
  {
    city: 'Elazığ',
    name: 'Fethi Sekin Şehir Hastanesi',
    address: 'Zafran Mah. Elazığ',
    maps: 'https://www.google.com/maps/search/?api=1&query=Fethi+Sekin+Şehir+Hastanesi+Elazığ',
    rating: 4.7,
    departments: [
      { name: 'Kardiyoloji', doctors: ['Dr. Ahmet Yılmaz', 'Dr. Ayşe Demir'] },
      { name: 'Dahiliye', doctors: ['Dr. Mehmet Kaya', 'Dr. Zeynep Çelik'] },
      { name: 'Ortopedi', doctors: ['Dr. Ali Güneş'] },
    ]
  },
  {
    city: 'Elazığ',
    name: 'Elazığ Eğitim ve Araştırma Hastanesi',
    address: 'Kırklar Mah. Elazığ',
    maps: 'https://www.google.com/maps/search/?api=1&query=Elazığ+Eğitim+ve+Araştırma+Hastanesi',
    rating: 4.3,
    departments: [
      { name: 'Göz Hastalıkları', doctors: ['Dr. Selim Aksoy'] },
      { name: 'Nöroloji', doctors: ['Dr. Fatma Yıldız', 'Dr. Murat Şahin'] },
    ]
  },
  {
    city: 'Elazığ',
    name: 'Elazığ Ruh ve Sinir Hastalıkları Hastanesi',
    address: 'Rızaiye Mah. Elazığ',
    maps: 'https://www.google.com/maps/search/?api=1&query=Elazığ+Ruh+ve+Sinir+Hastalıkları+Hastanesi',
    rating: 4.1,
    departments: [
      { name: 'Psikiyatri', doctors: ['Dr. Cemre Kılıç'] },
    ]
  },
  {
    city: 'Elazığ',
    name: 'Elazığ Ağız ve Diş Sağlığı Merkezi',
    address: 'Kültür Mah. Elazığ',
    maps: 'https://www.google.com/maps/search/?api=1&query=Elazığ+Ağız+ve+Diş+Sağlığı+Merkezi',
    rating: 4.5,
    departments: [
      { name: 'Diş Hekimliği', doctors: ['Dr. Burak Aslan', 'Dr. Elif Koç'] },
    ]
  },
  // Malatya
  {
    city: 'Malatya',
    name: 'Malatya Eğitim ve Araştırma Hastanesi',
    address: 'Beydağı Mah. Malatya',
    maps: 'https://www.google.com/maps/search/?api=1&query=Malatya+Eğitim+ve+Araştırma+Hastanesi',
    rating: 4.6,
    departments: [
      { name: 'Kardiyoloji', doctors: ['Dr. Hakan Polat'] },
      { name: 'Dahiliye', doctors: ['Dr. Sibel Yılmaz'] },
    ]
  },
  {
    city: 'Malatya',
    name: 'Turgut Özal Tıp Merkezi',
    address: 'İnönü Üniversitesi Kampüsü Malatya',
    maps: 'https://www.google.com/maps/search/?api=1&query=Turgut+Özal+Tıp+Merkezi+Malatya',
    rating: 4.8,
    departments: [
      { name: 'Onkoloji', doctors: ['Dr. Ece Gül', 'Dr. Barış Korkmaz'] },
      { name: 'Nefroloji', doctors: ['Dr. Derya Akın'] },
    ]
  },
  {
    city: 'Malatya',
    name: 'Malatya Devlet Hastanesi',
    address: 'Cevatpaşa Mah. Malatya',
    maps: 'https://www.google.com/maps/search/?api=1&query=Malatya+Devlet+Hastanesi',
    rating: 4.2,
    departments: [
      { name: 'Genel Cerrahi', doctors: ['Dr. Fikret Demir'] },
    ]
  },
  {
    city: 'Malatya',
    name: 'Malatya Ağız ve Diş Sağlığı Merkezi',
    address: 'Fırat Mah. Malatya',
    maps: 'https://www.google.com/maps/search/?api=1&query=Malatya+Ağız+ve+Diş+Sağlığı+Merkezi',
    rating: 4.4,
    departments: [
      { name: 'Diş Hekimliği', doctors: ['Dr. Gökhan Yıldız'] },
    ]
  },
];

const Hastaneler = () => {
  const [selectedHospital, setSelectedHospital] = useState(null);

  return (
    <div className="hospitals-split-layout">
      <div className="hospitals-left">
        <h2 className="hospitals-title"><FaHospital style={{marginRight:8}}/>Elazığ & Malatya Hastaneleri</h2>
        <div className="hospitals-list">
          {hospitals.map((h, i) => (
            <div className="hospital-card" key={i}>
              <div className="hospital-info">
                <div className="hospital-name">{h.name}</div>
                <div className="hospital-address"><FaMapMarkerAlt style={{marginRight:4}}/>{h.address} <span className="hospital-city">({h.city})</span></div>
                <a className="hospital-maps-btn" href={h.maps} target="_blank" rel="noopener noreferrer">Konuma Git</a>
              </div>
              <div className="hospital-rating">
                <FaStar className="star-icon" />
                <span>{h.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hospitals-right">
        <h3 className="hospitals-list-title">Hastaneler ve Doktorlar</h3>
        <div className="hospitals-names-list">
          {hospitals.map((h, i) => (
            <div className="hospital-name-row" key={i}>
              <span className="hospital-name-right">{h.name}</span>
              <button className="see-doctors-btn" onClick={() => setSelectedHospital(h)}>
                Doktorları Gör
              </button>
            </div>
          ))}
        </div>
        {selectedHospital && (
          <div className="doctors-modal">
            <div className="doctors-modal-content">
              <h4>{selectedHospital.name} - Bölümler ve Doktorlar</h4>
              {selectedHospital.departments.map((dep, idx) => (
                <div key={idx} className="department-block">
                  <div className="department-name">{dep.name}</div>
                  <ul className="doctors-list">
                    {dep.doctors.map((doc, dIdx) => (
                      <li key={dIdx}><FaUserMd className="doctor-icon" /> {doc}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <button className="close-modal-btn" onClick={() => setSelectedHospital(null)}>Kapat</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hastaneler; 