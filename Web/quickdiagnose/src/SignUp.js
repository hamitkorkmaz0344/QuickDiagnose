import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
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
  BackButton
} from './styles';
import { FaUser, FaLock, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import logo from './img/Logo.webp';

const SignUp = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <Container>
      <LeftPanel>
        <Logo src={logo} alt="QuickDiagnose Logo" />
        <Title>QuickDiagnose</Title>
        <SubTitle>Yeni Hesap Oluştur</SubTitle>

        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', password: '', confirmPassword: '' }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <FormArea onSubmit={handleSubmit}>
              <TextInput
                label="Ad"
                icon={<FaUser />}
                placeholder="Adınız"
                onChange={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                value={values.firstName}
                type="text"
              />
              <TextInput
                label="Soyad"
                icon={<FaUser />}
                placeholder="Soyadınız"
                onChange={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                value={values.lastName}
                type="text"
              />
              <TextInput
                label="E-posta"
                icon={<FaEnvelope />}
                placeholder="ornek@email.com"
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                type="email"
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
              <TextInput
                label="Şifre Tekrar"
                icon={<FaLock />}
                placeholder="********"
                onChange={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                type={hidePassword ? 'password' : 'text'}
                isPassword
                togglePassword={() => setHidePassword(!hidePassword)}
                hidePassword={hidePassword}
              />
              <MsgBox>...</MsgBox>
              <Button type="submit">Kayıt Ol</Button>
              <Line />
              <Link to="/" style={{ textDecoration: 'none', width: '100%' }}>
                <BackButton type="button">
                  <FaArrowLeft /> Giriş Sayfasına Dön
                </BackButton>
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

export default SignUp; 