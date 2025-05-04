import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  Nav,
  NavItem,
  Content,
  Card,
  CardTitle,
  HospitalList,
  HospitalItem,
  HospitalInfo,
  HospitalContact,
  BackButton
} from '../styles';
import { FaHospital, FaArrowLeft, FaPhone, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import logo from '../img/Logo.webp';

const Hospitals = () => {
  const navigate = useNavigate();

  const hospitals = [
    {
      id: 1,
      name: 'Acıbadem Hastanesi',
      address: 'Atatürk Mah. 123. Sokak No:45, Kadıköy/İstanbul',
      phone: '0216 123 45 67',
      rating: 4.8,
      specialties: ['Kardiyoloji', 'Nöroloji', 'Ortopedi']
    },
    {
      id: 2,
      name: 'Memorial Hastanesi',
      address: 'Levent Mah. 456. Sokak No:78, Beşiktaş/İstanbul',
      phone: '0212 987 65 43',
      rating: 4.7,
      specialties: ['Onkoloji', 'Dahiliye', 'Göz Hastalıkları']
    },
    {
      id: 3,
      name: 'Medical Park Hastanesi',
      address: 'Bahçelievler Mah. 789. Sokak No:12, Bakırköy/İstanbul',
      phone: '0212 456 78 90',
      rating: 4.6,
      specialties: ['Pediatri', 'Kadın Hastalıkları', 'Genel Cerrahi']
    }
  ];

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="QuickDiagnose Logo" />
        <Nav>
          <NavItem onClick={() => navigate('/home')}>
            <FaArrowLeft /> Ana Sayfa
          </NavItem>
        </Nav>
      </Header>
      <Content>
        <Card>
          <CardTitle>
            <FaHospital /> Hastaneler
          </CardTitle>
          <HospitalList>
            {hospitals.map((hospital) => (
              <HospitalItem key={hospital.id}>
                <HospitalInfo>
                  <h3>{hospital.name}</h3>
                  <p>
                    <FaMapMarkerAlt /> {hospital.address}
                  </p>
                  <p>
                    <FaPhone /> {hospital.phone}
                  </p>
                  <div>
                    <FaStar style={{ color: '#F1C40F' }} /> {hospital.rating}
                  </div>
                  <div>
                    {hospital.specialties.map((specialty, index) => (
                      <span key={index} className="specialty-tag">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </HospitalInfo>
                <HospitalContact>
                  <button>Randevu Al</button>
                  <button>Detaylı Bilgi</button>
                </HospitalContact>
              </HospitalItem>
            ))}
          </HospitalList>
        </Card>
      </Content>
    </Container>
  );
};

export default Hospitals; 