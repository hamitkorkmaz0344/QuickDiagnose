
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import Constants from 'expo-constants';
import styled from 'styled-components/native'



const StatusBarHeight = Constants.statusBarHeight;

// colors
export const Colors = {
    primary: '#ffffff',
    secondary: '#E5E7EB',
    tertiary: '#1F2937',
    darkLight: '#9CA3AF',
    brand: '#6D28D9',
    green: '#10B981',
    red: '#EF4444',
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
`;
 
export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    padding-top: 50px;
`;
export const PageLogo = styled.Image`
    width: 250px;
    height: 200px;
    border-radius: 20px; 
    margin-bottom: 10px;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: "White";
    font-family: 'poppins';
    margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};
`;

export const StyledFormArea = styled.View`
    width: 90%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top: 38px;
    position: absolute;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
background-color: #ADD8E6;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-vertical: 5px;
    height: 60px;
    align-content: center;
`;
export const ButtonText = styled.Text` 
    color: ${primary};
    font-size: 16px;
`;
export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
<<<<<<< HEAD
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent = styled.Text`
    color: ${brand};
    font-size: 15px;
`;

export const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.5)",
        flex: 1,
    },
    userTypeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
    },
    userTypeButton: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        height: 120,
        borderRadius: 15,
        backgroundColor: 'white',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    patientButton: {
        borderColor: brand,
        borderWidth: 2,
    },
    doctorButton: {
        borderColor: brand,
        borderWidth: 2,
    },
    userTypeText: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: brand,
    },
    backButton: {
        backgroundColor: "white",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,

    },
    backButtonText: {
        color: 'Black',
        fontSize: 18,
        fontWeight: '500',
    },

    signupButton: {
        backgroundColor: "white",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    signupButtonText: {
        color: "black",
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
    },
});

