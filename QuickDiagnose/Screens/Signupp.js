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
  ScrollView
} from 'react-native';
import { Octicons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const { darkLight } = Colors;

const Signupp = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/img/back.png')}
      style={styles.backgroundImage}
    >
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require('./../assets/img/logom.png')} />
          <PageTitle>QuickDiagnose</PageTitle>
          <SubTitle>Kayıt Ol</SubTitle>

          <Formik
            initialValues={{ name: '', surname: '', tc: '', email: '', password: '' }}
            onSubmit={(values) => {
              console.log("Kayıt başarılı!", values);
              // Firebase kayıt fonksiyonunu buraya ekleyebilirsin
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>

                <MyTextInput
                  label="İsim"
                  icon="person"
                  placeholder="Adınız"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />

                <MyTextInput
                  label="Soyisim"
                  icon="person"
                  placeholder="Soyadınız"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('surname')}
                  onBlur={handleBlur('surname')}
                  value={values.surname}
                />

                <MyTextInput
                  label="TC Kimlik No"
                  icon="number"
                  placeholder="12345678901"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('tc')}
                  onBlur={handleBlur('tc')}
                  value={values.tc}
                  keyboardType="numeric"
                />

                <MyTextInput
                  label="Email"
                  icon="mail"
                  placeholder="ornek@mail.com"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />

                <MyTextInput
                  label="Şifre"
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
                  <ButtonText>Kayıt Ol</ButtonText>
                </StyledButton>

                <Line />

                <StyledButton
                  style={styles.backButton}
                  onPress={() => navigation.goBack()}
                >
                  <Octicons name="arrow-left" size={16} color={"white"} style={{ marginRight: 5 }} />
                  <Text style={styles.backButtonText}>Geri</Text>
                </StyledButton>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </ScrollView>
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

export default Signupp;
