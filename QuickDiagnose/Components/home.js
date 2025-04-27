import styled from 'styled-components';
import backgroundImg from './assets/background.jpg';

export const HomeContainer = styled.div`
  display: flex;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
`;

export const Sidebar = styled.div`
  width: ${(props) => (props.open ? '200px' : '60px')};
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  transition: width 0.3s;
  padding: 20px 10px;
  overflow: hidden;
`;

export const SidebarToggle = styled.div`
  cursor: pointer;
  margin-bottom: 20px;
`;

export const MainContent = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  width: 200px;
  height: 150px;
  border-radius: 12px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
`;

export const NavigateButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;
