import styled from 'styled-components';

export const Colors = {
  primary: '#ffffff',
  secondary: '#FFE5E5',
  tertiary: '#2C3E50',
  darkLight: '#95A5A6',
  brand: '#E74C3C',
  green: '#2ECC71',
  red: '#E74C3C',
  background: '#FFF5F5',
  accent: '#FF6B6B',
};

const { primary, secondary, tertiary, darkLight, brand, background, accent } = Colors;

export const Container = styled.div`
  min-height: 100vh;
  background: ${background};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 40px;
  }
`;


// Sol panel: form, logo, başlıklar burada yer alacak
export const LeftPanel = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: ${primary};
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(231, 76, 60, 0.1);
  margin-bottom: 20px;
  border: 1px solid ${secondary};

  @media (min-width: 768px) {
    margin-right: 20px;
    margin-bottom: 0;
  }
`;

// Sağ panel: arka plan görseli ya da tanıtım içerikleri
export const RightPanel = styled.div`
  width: 100%;
  max-width: 500px;
  background: linear-gradient(135deg, ${brand}, ${accent});
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(231, 76, 60, 0.2);

  @media (max-width: 767px) {
    display: none;
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
  width: 180px;
  height: 150px;
  border-radius: 15px;
  margin-bottom: 20px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(231, 76, 60, 0.1);
`;

export const Title = styled.h1`
  font-size: 28px;
  text-align: center;
  font-weight: 700;
  color: ${brand};
  margin-bottom: 10px;
  letter-spacing: 0.5px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const SubTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 25px;
  letter-spacing: 0.5px;
  font-weight: 500;
  color: ${darkLight};
`;

export const FormArea = styled.form`
  width: 100%;
  max-width: 400px;
`;

export const InputLabel = styled.label`
  color: ${tertiary};
  font-size: 14px;
  display: block;
  text-align: left;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  background-color: ${secondary};
  padding: 14px 50px;
  border-radius: 12px;
  font-size: 15px;
  height: 50px;
  margin-bottom: 15px;
  color: ${tertiary};
  border: 2px solid transparent;
  outline: none;
  box-sizing: border-box;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${brand};
    background-color: ${primary};
    box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
  }

  &::placeholder {
    color: ${darkLight};
  }
`;

export const IconLeft = styled.div`
  position: absolute;
  left: 15px;
  top: 35px;
  z-index: 1;
  color: ${brand};
`;

export const IconRight = styled.div`
  position: absolute;
  right: 15px;
  top: 35px;
  z-index: 1;
  cursor: pointer;
  color: ${brand};
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, ${brand}, ${accent});
  color: ${primary};
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  margin: 8px 0;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(231, 76, 60, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(231, 76, 60, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    margin-right: 8px;
  }
`;

export const MsgBox = styled.p`
  text-align: center;
  font-size: 14px;
  color: ${tertiary};
  margin: 15px 0;
`;

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background: linear-gradient(to right, transparent, ${secondary}, transparent);
  margin: 20px 0;
`;

export const SignupButton = styled(Button)`
  margin-top: 15px;
`;

export const BackButton = styled(Button)`
  background: ${secondary};
  color: ${brand};
  margin-top: 10px;
  box-shadow: none;

  &:hover {
    background: ${brand};
    color: ${primary};
  }
`;

export const UserTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0;
  gap: 15px;
`;

export const UserTypeButton = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 12px;
  background-color: ${primary};
  box-shadow: 0 4px 6px rgba(231, 76, 60, 0.1);
  border: 2px solid ${secondary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${brand};
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(231, 76, 60, 0.2);
  }

  svg {
    font-size: 24px;
    margin-bottom: 10px;
    color: ${brand};
  }
`;

export const UserTypeText = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: ${tertiary};
  margin: 0;
`;

// Home sayfası stilleri
export const Header = styled.header`
  background-color: ${primary};
  padding: 6px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(231, 76, 60, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  min-height: 36px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${tertiary};
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${secondary};
    color: ${brand};
  }

  svg {
    font-size: 18px;
  }
`;

export const Content = styled.main`
  margin-top: 80px;
  padding: 20px;
  min-height: calc(100vh - 80px);
  background-color: ${background};
`;

export const WelcomeText = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: ${primary};
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(231, 76, 60, 0.1);
  text-align: center;

  h1 {
    color: ${brand};
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    color: ${tertiary};
    font-size: 18px;
    margin-bottom: 30px;
    line-height: 1.6;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background-color: ${secondary};
  color: ${brand};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${brand};
    color: ${primary};
  }

  svg {
    font-size: 18px;
  }
`;

export const HospitalList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const HospitalItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const HospitalInfo = styled.div`
  flex: 1;

  h3 {
    margin: 0 0 10px 0;
    color: #2C3E50;
    font-size: 1.2rem;
  }

  p {
    margin: 5px 0;
    color: #7F8C8D;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .specialty-tag {
    display: inline-block;
    background: #E8F4F8;
    color: #3498DB;
    padding: 4px 8px;
    border-radius: 4px;
    margin-right: 8px;
    margin-top: 8px;
    font-size: 0.9rem;
  }
`;

export const HospitalContact = styled.div`
  display: flex;
  gap: 10px;

  button {
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 500;
    transition: background-color 0.2s;

    &:first-child {
      background-color: #3498DB;
      color: white;

      &:hover {
        background-color: #2980B9;
      }
    }

    &:last-child {
      background-color: #ECF0F1;
      color: #2C3E50;

      &:hover {
        background-color: #BDC3C7;
      }
    }
  }
`;

export const TestList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const TestItem = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const TestInfo = styled.div`
  margin-bottom: 15px;

  h3 {
    margin: 0 0 10px 0;
    color: #2C3E50;
    font-size: 1.2rem;
  }

  p {
    margin: 5px 0;
    color: #7F8C8D;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const TestDetails = styled.div`
  background: #F8F9FA;
  border-radius: 8px;
  padding: 15px;
  margin-top: 15px;

  h4 {
    margin: 0 0 10px 0;
    color: #2C3E50;
    font-size: 1rem;
  }

  .result-item {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
    border-bottom: 1px solid #ECF0F1;

    &:last-child {
      border-bottom: none;
    }

    .result-label {
      color: #7F8C8D;
      font-weight: 500;
    }

    .result-value {
      color: #2C3E50;
      font-weight: 600;
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(44, 62, 80, 0.08);
  padding: 32px 24px;
  margin: 0 auto 24px auto;
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #E74C3C;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const AppointmentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const AppointmentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const StatusBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1rem;
  background-color: ${({ status }) =>
    status === 'Onaylandı' ? '#E8F8F5' : status === 'Beklemede' ? '#FEF9E7' : '#FDEDEC'};
  color: ${({ status }) =>
    status === 'Onaylandı' ? '#2ECC71' : status === 'Beklemede' ? '#F1C40F' : '#E74C3C'};
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.1rem;
  color: #2C3E50;
  background: #F8F9FA;
  border-radius: 8px;
  padding: 12px 18px;
  margin-bottom: 12px;
`;
