import styled from 'styled-components';

export const Colors = {
  primary: '#ffffff',
  secondary: '#E5E7EB',
  tertiary: '#1F2937',
  darkLight: '#9CA3AF',
  brand: '#6D28D9',
  green: '#10B981',
  red: '#EF4444',
};

const { primary, secondary, tertiary, darkLight, brand } = Colors;

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${primary};
  padding: 25px;
  padding-top: 40px;
  display: flex;
  min-height: 100vh;
`;


// Sol panel: form, logo, başlıklar burada yer alacak
export const LeftPanel = styled.div`
  flex: 1;
  background-color: ${primary};
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Sağ panel: arka plan görseli ya da tanıtım içerikleri
export const RightPanel = styled.div`
  flex: 1;
  background: url('./img/5764.jpg') no-repeat center center;
  background-size: cover;

  @media (max-width: 768px) {
    display: none; /* Mobilde gizleyebiliriz */
  }
`;

export const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

export const Logo = styled.img`
  width: 250px;
  height: 200px;
  border-radius: 20px;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: #000;
  margin-bottom: 10px;
`;

export const SubTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};
`;

export const FormArea = styled.form`
  width: 90%;
  max-width: 400px;
`;

export const InputLabel = styled.label`
  color: ${tertiary};
  font-size: 13px;
  display: block;
  text-align: left;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  background-color: ${secondary};
  padding: 15px 55px 15px 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-bottom: 10px;
  color: ${tertiary};
  border: none;
  outline: none;
  box-sizing: border-box;
`;

export const IconLeft = styled.div`
  position: absolute;
  left: 15px;
  top: 38px;
  z-index: 1;
`;

export const IconRight = styled.div`
  position: absolute;
  right: 15px;
  top: 38px;
  z-index: 1;
  cursor: pointer;
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #add8e6;
  color: ${primary};
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  margin: 5px 0;
  cursor: pointer;
`;

export const MsgBox = styled.p`
  text-align: center;
  font-size: 13px;
  color: ${tertiary};
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin: 10px 0;
`;

export const SignupButton = styled(Button)`
  background-color: ${brand};
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }
`;

export const BackButton = styled(Button)`
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }
`;

export const UserTypeContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

export const UserTypeButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 120px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 2px solid ${brand};
  cursor: pointer;
`;

export const UserTypeText = styled.p`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: ${brand};
`;
