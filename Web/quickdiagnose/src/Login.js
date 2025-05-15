import React, { useState } from 'react';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  LeftPanel,
  RightPanel,
  Logo,
  Title,
  SubTitle,
  FormArea,
  InputLabel,
  Input,
  IconLeft,
  IconRight,
  Button,
  MsgBox,
  Line,
  SignupButton
} from './styles';
import { FaUser, FaLock, FaUserPlus } from 'react-icons/fa';

import { loginDoctor, loginPatient } from './services/authServices';

import logo from './img/Logo.webp';

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [userType, setUserType] = useState('patient');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  return (
    <Container>
      <LeftPanel>
        <Logo src={logo} alt="QuickDiagnose Logo" />
        <Title>QuickDiagnose</Title>
        <SubTitle>Giriş Yap</SubTitle>

        <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
          <Button
            type="button"
            onClick={() => setUserType('patient')}
            style={{
              backgroundColor: userType === 'patient' ? '#007bff' : '#f0f0f0',
              color: userType === 'patient' ? 'white' : 'black'
            }}
          >
            Hasta
          </Button>
          <Button
            type="button"
            onClick={() => setUserType('doctor')}
            style={{
              backgroundColor: userType === 'doctor' ? '#007bff' : '#f0f0f0',
              color: userType === 'doctor' ? 'white' : 'black'
            }}
          >
            Doktor
          </Button>
        </div>

        <Formik
          initialValues={{ tc: '', password: '' }}
          onSubmit={async (values) => {
            try {
              setError('');

              const credentials = {
                tc: values.tc,
                password: values.password
              };

              const response = userType === 'doctor'
                ? await loginDoctor(credentials)
                : await loginPatient(credentials);

                if (response && response.message === 'Giriş başarılı') {
                  localStorage.setItem('user', JSON.stringify(response.doctor || response.patient));
                  localStorage.setItem('userType', userType);
                  navigate('/home');
                } else {
                  setError(response?.message || 'Giriş başarısız. Kimlik bilgilerinizi kontrol edin.');
                }
                
            } catch (error) {
              setError('Sunucu hatası. Lütfen tekrar deneyin.');
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <FormArea onSubmit={handleSubmit}>
              <TextInput
                label="T.C. Kimlik No"
                icon={<FaUser />}
                placeholder="TC kimlik numarası"
                onChange={handleChange('tc')}
                onBlur={handleBlur('tc')}
                value={values.tc}
                type="text"
              />
              <TextInput
                label="Şifre"
                icon={<FaLock />}
                placeholder="********"
                onChange={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                type={hidePassword ? 'password' : 'text'}
                isPassword
                togglePassword={() => setHidePassword(!hidePassword)}
                hidePassword={hidePassword}
              />
              {error && <MsgBox style={{ color: 'red' }}>{error}</MsgBox>}
              <Button type="submit">Giriş Yap</Button>
              <Line />
              <Link to="/signup" style={{ textDecoration: 'none', width: '100%' }}>
                <SignupButton type="button">
                  <FaUserPlus /> Yeni Hesap Oluştur
                </SignupButton>
              </Link>
            </FormArea>
          )}
        </Formik>
      </LeftPanel>

      <RightPanel>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>QuickDiagnose</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
            Sağlık hizmetlerinize hızlı ve güvenli erişim
          </p>
          <div style={{ fontSize: '1rem', lineHeight: '1.6' }}>
            <p>✓ Kolay randevu sistemi</p>
            <p>✓ Güvenli hasta verileri</p>
            <p>✓ Hızlı teşhis desteği</p>
          </div>
        </div>
      </RightPanel>
    </Container>
  );
};

const TextInput = ({ label, icon, isPassword, togglePassword, hidePassword, ...props }) => (
  <div style={{ position: 'relative', marginBottom: '20px' }}>
    <InputLabel>{label}</InputLabel>
    <IconLeft>{icon}</IconLeft>
    <Input {...props} />
    {isPassword && (
      <IconRight onClick={togglePassword}>
        {hidePassword ? '🙈' : '👁️'}
      </IconRight>
    )}
  </div>
);

export default Login;
