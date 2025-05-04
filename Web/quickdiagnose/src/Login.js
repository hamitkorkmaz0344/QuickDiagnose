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
  SignupButton,
  BackButton
} from './styles';
import { FaUser, FaLock, FaEnvelope, FaArrowLeft, FaUserPlus, FaBriefcase } from 'react-icons/fa';

import logo from './img/Logo.webp';

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  const FormContent = (
    <>
      <Logo src={logo} alt="QuickDiagnose Logo" />
      <Title>QuickDiagnose</Title>
      <SubTitle>{userType === 'patient' ? 'Hasta Girişi' : 'Doktor Girişi'}</SubTitle>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
          navigate('/home');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <FormArea onSubmit={handleSubmit}>
            <TextInput
              label="Email Address"
              icon={<FaEnvelope />}
              placeholder={userType === 'patient' ? 'hasta@example.com' : 'doktor@example.com'}
              onChange={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              type="email"
            />
            <TextInput
              label="Password"
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
            <MsgBox>...</MsgBox>
            <Button type="submit">Giriş Yap</Button>
            <Line />
            <Link to="/signup" style={{ textDecoration: 'none', width: '100%' }}>
              <SignupButton type="button">
                <FaUserPlus /> Yeni Hesap Oluştur
              </SignupButton>
            </Link>
            <BackButton type="button" onClick={() => setUserType(null)}>
              <FaArrowLeft /> Geri
            </BackButton>
          </FormArea>
        )}
      </Formik>
    </>
  );

  return (
    <Container>
      <LeftPanel>
        {!userType ? (
          <>
            <Logo src={logo} alt="QuickDiagnose Logo" />
            <SubTitle>Giriş Yap</SubTitle>
            <FormArea>
              <Button onClick={() => setUserType('patient')}>
                <FaUser /> Hasta Girişi
              </Button>
              <Button onClick={() => setUserType('doctor')}>
                <FaBriefcase /> Doktor Girişi
              </Button>
            </FormArea>
          </>
        ) : (
          FormContent
        )}
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
