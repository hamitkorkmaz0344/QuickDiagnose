import React, { useState, useEffect } from 'react';
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
  PatientList,
  PatientItem,
  PatientInfo,
  PatientDetails,
  BackButton,
  SearchBar,
  InfoItem,
  Button
} from '../styles';
import { FaUser, FaArrowLeft, FaSearch, FaHospital, FaFileMedical } from 'react-icons/fa';
import logo from '../img/Logo.webp';

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Örnek hasta verileri (API'den gelecek)
  useEffect(() => {
    // Burada API'den hasta listesi çekilecek
    const dummyPatients = [
      {
        id: 1,
        name: 'Ahmet',
        surname: 'Yılmaz',
        tcKimlikNo: '12345678901',
        lastVisit: '2024-03-15',
        healthInfo: {
          height: 175,
          weight: 70,
          age: 30,
          gender: 'male',
          surgeries: ['Apandisit ameliyatı'],
          allergies: ['Penisilin'],
          chronicDiseases: ['Hipertansiyon'],
          medications: ['Tansiyon ilacı']
        }
      },
      // Diğer hastalar...
    ];
    setPatients(dummyPatients);
  }, []);

  const filteredPatients = patients.filter(patient => 
    patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    patient.tcKimlikNo.includes(searchTerm)
  );

  const handlePatientSelect = (patient) => {
    setSelectedPatient(patient);
  };

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="QuickDiagnose Logo" />
        <Nav>
          <NavItem onClick={() => navigate('/home')}>
            <FaHospital /> Hastaneler
          </NavItem>
          <NavItem onClick={() => navigate('/test-results')}>
            <FaFileMedical /> Test Sonuçları
          </NavItem>
        </Nav>
      </Header>

      <Content>
        <Card style={{ width: '30%', marginRight: '20px' }}>
          <CardTitle>
            <FaUser /> Hasta Listesi
          </CardTitle>
          <SearchBar>
            <FaSearch />
            <input
              type="text"
              placeholder="Hasta Ara (Ad, Soyad veya TC No)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchBar>
          <PatientList>
            {filteredPatients.map(patient => (
              <PatientItem
                key={patient.id}
                onClick={() => handlePatientSelect(patient)}
                selected={selectedPatient?.id === patient.id}
              >
                <PatientInfo>
                  <strong>{patient.name} {patient.surname}</strong>
                  <span>TC: {patient.tcKimlikNo}</span>
                  <span>Son Ziyaret: {patient.lastVisit}</span>
                </PatientInfo>
              </PatientItem>
            ))}
          </PatientList>
        </Card>

        {selectedPatient && (
          <Card style={{ width: '70%' }}>
            <CardTitle>
              <FaUser /> Hasta Detayları
            </CardTitle>
            <PatientDetails>
              <InfoItem>
                <strong>Ad Soyad:</strong> {selectedPatient.name} {selectedPatient.surname}
              </InfoItem>
              <InfoItem>
                <strong>TC Kimlik No:</strong> {selectedPatient.tcKimlikNo}
              </InfoItem>
              <InfoItem>
                <strong>Boy:</strong> {selectedPatient.healthInfo.height} cm
              </InfoItem>
              <InfoItem>
                <strong>Kilo:</strong> {selectedPatient.healthInfo.weight} kg
              </InfoItem>
              <InfoItem>
                <strong>Yaş:</strong> {selectedPatient.healthInfo.age}
              </InfoItem>
              <InfoItem>
                <strong>Cinsiyet:</strong> {selectedPatient.healthInfo.gender === 'male' ? 'Erkek' : 'Kadın'}
              </InfoItem>
              <InfoItem>
                <strong>Ameliyatlar:</strong>
                <ul>
                  {selectedPatient.healthInfo.surgeries.map((surgery, index) => (
                    <li key={index}>{surgery}</li>
                  ))}
                </ul>
              </InfoItem>
              <InfoItem>
                <strong>Alerjiler:</strong>
                <ul>
                  {selectedPatient.healthInfo.allergies.map((allergy, index) => (
                    <li key={index}>{allergy}</li>
                  ))}
                </ul>
              </InfoItem>
              <InfoItem>
                <strong>Kronik Hastalıklar:</strong>
                <ul>
                  {selectedPatient.healthInfo.chronicDiseases.map((disease, index) => (
                    <li key={index}>{disease}</li>
                  ))}
                </ul>
              </InfoItem>
              <InfoItem>
                <strong>Kullanılan İlaçlar:</strong>
                <ul>
                  {selectedPatient.healthInfo.medications.map((medication, index) => (
                    <li key={index}>{medication}</li>
                  ))}
                </ul>
              </InfoItem>
            </PatientDetails>
            <Button onClick={() => navigate(`/patient-info/${selectedPatient.id}`)}>
              Hasta Bilgilerini Düzenle
            </Button>
          </Card>
        )}
      </Content>
    </Container>
  );
};

export default DoctorDashboard; 