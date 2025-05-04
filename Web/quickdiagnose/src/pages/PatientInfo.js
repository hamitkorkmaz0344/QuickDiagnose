import React, { useState } from 'react';
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
  InfoItem,
  BackButton,
  Button
} from '../styles';
import { FaUser, FaArrowLeft, FaEnvelope, FaPhone, FaMapMarkerAlt, FaIdCard } from 'react-icons/fa';
import logo from '../img/Logo.webp';

const PatientInfo = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(true);
  const [form, setForm] = useState({
    boy: '',
    kilo: '',
    yas: '',
    cinsiyet: '',
    ameliyatlar: '',
    alerjiler: '',
    kronik: '',
    ilaclar: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Şimdilik sadece konsola yazdır
    console.log('Hasta Bilgi Formu:', form);
    setShowForm(false);
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
        {showForm ? (
          <Card>
            <CardTitle>
              <FaUser /> İlk Bilgi Formu
            </CardTitle>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <InfoItem>
                Boy (cm):
                <input type="number" name="boy" value={form.boy} onChange={handleChange} required style={{marginLeft:8}} />
              </InfoItem>
              <InfoItem>
                Kilo (kg):
                <input type="number" name="kilo" value={form.kilo} onChange={handleChange} required style={{marginLeft:8}} />
              </InfoItem>
              <InfoItem>
                Yaş:
                <input type="number" name="yas" value={form.yas} onChange={handleChange} required style={{marginLeft:8}} />
              </InfoItem>
              <InfoItem>
                Cinsiyet:
                <select name="cinsiyet" value={form.cinsiyet} onChange={handleChange} required style={{marginLeft:8}}>
                  <option value="">Seçiniz</option>
                  <option value="Erkek">Erkek</option>
                  <option value="Kadın">Kadın</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </InfoItem>
              <InfoItem>
                Daha önce geçirilen ameliyatlar:
                <input type="text" name="ameliyatlar" value={form.ameliyatlar} onChange={handleChange} style={{marginLeft:8}} />
              </InfoItem>
              <InfoItem>
                Alerjiler:
                <input type="text" name="alerjiler" value={form.alerjiler} onChange={handleChange} style={{marginLeft:8}} />
              </InfoItem>
              <InfoItem>
                Kronik rahatsızlıklar:
                <input type="text" name="kronik" value={form.kronik} onChange={handleChange} style={{marginLeft:8}} />
              </InfoItem>
              <InfoItem>
                Kullanılan ilaçlar:
                <input type="text" name="ilaclar" value={form.ilaclar} onChange={handleChange} style={{marginLeft:8}} />
              </InfoItem>
              <Button type="submit">Kaydet</Button>
            </form>
          </Card>
        ) : (
          <Card>
            <CardTitle>
              <FaUser /> Hasta Bilgileri
            </CardTitle>
            <InfoItem>
              <FaUser /> Ad Soyad: Ahmet Yılmaz
            </InfoItem>
            <InfoItem>
              <FaIdCard /> TC Kimlik No: 12345678901
            </InfoItem>
            <InfoItem>
              <FaEnvelope /> E-posta: ahmet.yilmaz@example.com
            </InfoItem>
            <InfoItem>
              <FaPhone /> Telefon: 0555 123 45 67
            </InfoItem>
            <InfoItem>
              <FaMapMarkerAlt /> Adres: Örnek Mahallesi, 123. Sokak No:45, İstanbul
            </InfoItem>
          </Card>
        )}
      </Content>
    </Container>
  );
};

export default PatientInfo; 