import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Formik } from 'formik';
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  Colors,
  StyledButton,
  ButtonText,
  MsgBox,
  Line,
  styles
} from './../Components/styles';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import { Octicons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { darkLight, brand, primary } = Colors;

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [userType, setUserType] = useState(null);
  const navigation = useNavigation(); // Navigasyon nesnesi

  if (!userType) {
    return (
      <ImageBackground
        source={require('../assets/img/back.png')}
        style={styles.backgroundImage}
      >
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require('./../assets/img/logom.png')} />
          <PageTitle>QuickDiagnose</PageTitle>
          <SubTitle>Giriş Yap</SubTitle>

          <StyledFormArea>
            <View style={styles.userTypeContainer}>
              <TouchableOpacity
                style={[styles.userTypeButton, styles.patientButton]}
                onPress={() => setUserType('patient')}
              >
                <Octicons name="person" size={30} color={brand} />
                <Text style={styles.userTypeText}>Hasta Girişi</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.userTypeButton, styles.doctorButton]}
                onPress={() => setUserType('doctor')}
              >
                <Octicons name="briefcase" size={30} color={brand} />
                <Text style={styles.userTypeText}>Doktor Girişi</Text>
              </TouchableOpacity>
            </View>
          </StyledFormArea>
        </InnerContainer>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/img/back.png')}
      style={styles.backgroundImage}
    >
      <StatusBar style="dark" />
      <InnerContainer>
        <PageLogo resizeMode="cover" source={require('./../assets/img/logom.png')} />
        <PageTitle>QuickDiagnose</PageTitle>
        <SubTitle>{userType === 'patient' ? 'Hasta Girişi' : 'Doktor Girişi'}</SubTitle>

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            console.log(values);
            navigation.navigate('Home'); // ← Yönlendirme buraya eklendi
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Email Address"
                icon="mail"
                placeholder={userType === 'patient' ? "hasta@example.com" : "doktor@example.com"}
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
              />

              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="********"
                placeholderTextColor={darkLight}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />

              <MsgBox>
                <Text>...</Text>
              </MsgBox>

              <StyledButton onPress={handleSubmit}>
                <ButtonText>Giriş yap</ButtonText>
              </StyledButton>
              <Line />

              <StyledButton
                style={styles.signupButton}
                onPress={() => navigation.navigate('Signupp')}
              >
                <Octicons name="person-add" size={24} color={primary} />
                <Text style={styles.signupButtonText}>Yeni Hesap Oluştur</Text>
              </StyledButton>

              <StyledButton
                style={styles.backButton}
                onPress={() => setUserType(null)}
              >
                <Octicons name="arrow-left" size={16} color={"white"} style={{ marginRight: 5 }} />
                <Text style={styles.backButtonText}>Geri</Text>
              </StyledButton>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </ImageBackground>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color="red" />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;
