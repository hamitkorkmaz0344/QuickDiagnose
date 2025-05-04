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
  AppointmentList,
  AppointmentItem,
  StatusBadge,
  BackButton
} from '../styles';
import { FaCalendar, FaArrowLeft, FaCheckCircle, FaClock, FaTimesCircle } from 'react-icons/fa';
import logo from '../img/Logo.webp';

const Appointments = () => {
  const navigate = useNavigate();

  const appointments = [
    {
      id: 1,
      doctor: 'Dr. Mehmet Yılmaz',
      date: '15 Mayıs 2024',
      time: '14:30',
      status: 'Onaylandı',
      type: 'Kontrol'
    },
    {
      id: 2,
      doctor: 'Dr. Ayşe Demir',
      date: '20 Mayıs 2024',
      time: '10:00',
      status: 'Beklemede',
      type: 'Muayene'
    },
    {
      id: 3,
      doctor: 'Dr. Ali Kaya',
      date: '25 Mayıs 2024',
      time: '11:15',
      status: 'İptal Edildi',
      type: 'Kontrol'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Onaylandı':
        return <FaCheckCircle style={{ color: '#2ECC71' }} />;
      case 'Beklemede':
        return <FaClock style={{ color: '#F1C40F' }} />;
      case 'İptal Edildi':
        return <FaTimesCircle style={{ color: '#E74C3C' }} />;
      default:
        return null;
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
            <FaCalendar /> Randevularım
          </CardTitle>
          <AppointmentList>
            {appointments.map((appointment) => (
              <AppointmentItem key={appointment.id}>
                <div>
                  <h3>{appointment.doctor}</h3>
                  <p>{appointment.type}</p>
                  <p>{appointment.date} - {appointment.time}</p>
                </div>
                <StatusBadge status={appointment.status}>
                  {getStatusIcon(appointment.status)}
                  {appointment.status}
                </StatusBadge>
              </AppointmentItem>
            ))}
          </AppointmentList>
        </Card>
      </Content>
    </Container>
  );
};

export default Appointments; 