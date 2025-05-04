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
  TestList,
  TestItem,
  TestInfo,
  TestDetails,
  BackButton
} from '../styles';
import { FaFlask, FaArrowLeft, FaFileMedical, FaCalendarAlt, FaHospital } from 'react-icons/fa';
import logo from '../img/Logo.webp';

const TestResults = () => {
  const navigate = useNavigate();

  const testResults = [
    {
      id: 1,
      testName: 'Tam Kan Sayımı',
      date: '15 Mayıs 2024',
      hospital: 'Acıbadem Hastanesi',
      status: 'Tamamlandı',
      results: {
        'Hemoglobin': '14.2 g/dL',
        'Lökosit': '7.5 x10^9/L',
        'Trombosit': '250 x10^9/L'
      }
    },
    {
      id: 2,
      testName: 'Biyokimya Paneli',
      date: '10 Mayıs 2024',
      hospital: 'Memorial Hastanesi',
      status: 'Tamamlandı',
      results: {
        'Glukoz': '95 mg/dL',
        'Kreatinin': '0.8 mg/dL',
        'ALT': '25 U/L'
      }
    },
    {
      id: 3,
      testName: 'Hormon Testi',
      date: '5 Mayıs 2024',
      hospital: 'Medical Park Hastanesi',
      status: 'Beklemede',
      results: null
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Tamamlandı':
        return '#2ECC71';
      case 'Beklemede':
        return '#F1C40F';
      default:
        return '#7F8C8D';
    }
  };

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
            <FaFlask /> Tahlil Sonuçları
          </CardTitle>
          <TestList>
            {testResults.map((test) => (
              <TestItem key={test.id}>
                <TestInfo>
                  <h3>{test.testName}</h3>
                  <p>
                    <FaCalendarAlt /> {test.date}
                  </p>
                  <p>
                    <FaHospital /> {test.hospital}
                  </p>
                  <p style={{ color: getStatusColor(test.status) }}>
                    <FaFileMedical /> {test.status}
                  </p>
                </TestInfo>
                {test.results && (
                  <TestDetails>
                    <h4>Sonuçlar:</h4>
                    {Object.entries(test.results).map(([key, value]) => (
                      <div key={key} className="result-item">
                        <span className="result-label">{key}:</span>
                        <span className="result-value">{value}</span>
                      </div>
                    ))}
                  </TestDetails>
                )}
              </TestItem>
            ))}
          </TestList>
        </Card>
      </Content>
    </Container>
  );
};

export default TestResults; 