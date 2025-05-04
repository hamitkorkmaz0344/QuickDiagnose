import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Header,
  Logo,
  Nav,
  NavItem,
  Content,
  WelcomeText,
  Button,
  LogoutButton
} from './styles';
import { FaHome, FaUser, FaCalendar, FaSignOutAlt } from 'react-icons/fa';
import logo from './img/Logo.webp';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Çıkış işlemleri burada yapılacak
    navigate('/');
  };

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="QuickDiagnose Logo" />
        <Nav>
          <NavItem>
            <FaHome /> Ana Sayfa
          </NavItem>
          <NavItem>
            <FaUser /> Profil
          </NavItem>
          <NavItem>
            <FaCalendar /> Randevular
          </NavItem>
        </Nav>
        <LogoutButton onClick={handleLogout}>
          <FaSignOutAlt /> Çıkış Yap
        </LogoutButton>
      </Header>
      <Content>
        <WelcomeText>
          <h1>Hoş Geldiniz!</h1>
          <p>QuickDiagnose'a hoş geldiniz. Sağlık hizmetlerinize hızlı ve güvenli erişim sağlayın.</p>
          <Button onClick={() => navigate('/patient-info')}>Hasta Bilgileri</Button>
          <Button onClick={() => navigate('/appointments')}>Randevu Sorgulama</Button>
          <Button onClick={() => navigate('/hospitals')}>Hastaneler</Button>
          <Button onClick={() => navigate('/test-results')}>Tahlil Sonuçları</Button>
        </WelcomeText>
      </Content>
    </Container>
  );
};

export default Home; 