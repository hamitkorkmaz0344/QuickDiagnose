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
} from './../Components/styles';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
import { Octicons, Ionicons } from '@expo/vector-icons';

const { darkLight } = Colors;

const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);
    
    return (
        <ImageBackground 
            source={require('./../assets/img/4770.jpg')} // Arka plan resmi
            style={styles.backgroundImage} // Resmi tam ekran yap
        >
            <StyledContainer style={styles.overlay}>
                <StatusBar style="dark" />
                <InnerContainer>
                    <PageLogo resizeMode="cover" source={require('./../assets/img/Logo.webp')} />
                    <PageTitle>QuickDiagnose</PageTitle>
                    <SubTitle>Hasta Girişi</SubTitle>

                    <Formik
                        initialValues={{ email: '', password: '' }}
                        onSubmit={(values) => {
                            console.log(values);
                        }}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <StyledFormArea>
                                <MyTextInput
                                    label="Email Address"
                                    icon="mail"
                                    placeholder="hasta1234@gmail.com"
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
                                <StyledButton onPress={handleSubmit}>
                                    <ButtonText>Kayıt ol</ButtonText>
                                </StyledButton>
                            </StyledFormArea>
                        )}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        </ImageBackground>
    );
};

// **GÖZ İKONU İÇİN METİN ALANI**
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

// **STİL DOSYASI**
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: "cover", // Resmi tam ekran yap
        width: "100%",
        height: "100%",
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.5)", // Hafif karartma efekti (Opsiyonel)
        flex: 1,
    },
});

export default Login;
