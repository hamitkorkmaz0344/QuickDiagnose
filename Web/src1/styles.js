export const PatientList = styled.div`
  max-height: 600px;
  overflow-y: auto;
  margin-top: 20px;
`;

export const PatientItem = styled.div`
  padding: 15px;
  border-bottom: 1px solid ${secondary};
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${props => props.selected ? secondary : primary};

  &:hover {
    background-color: ${secondary};
  }
`;

export const PatientInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  strong {
    color: ${tertiary};
    font-size: 1.1em;
  }

  span {
    color: ${darkLight};
    font-size: 0.9em;
  }
`;

export const PatientDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px 0;

  ul {
    margin: 5px 0;
    padding-left: 20px;
  }

  li {
    color: ${darkLight};
    margin: 3px 0;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background-color: ${primary};
  border: 1px solid ${secondary};
  border-radius: 8px;
  padding: 8px 15px;
  margin: 15px 0;

  svg {
    color: ${darkLight};
    margin-right: 10px;
  }

  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 1em;
    color: ${tertiary};

    &::placeholder {
      color: ${darkLight};
    }
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

  span {
    color: ${tertiary};
    font-size: 1.1em;
    font-weight: 500;
  }
`;

export const AppointmentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
`;

export const AppointmentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${primary};
  border-radius: 8px;
  border: 1px solid ${secondary};

  strong {
    color: ${tertiary};
    display: block;
    margin-bottom: 5px;
  }

  div {
    color: ${darkLight};
    font-size: 0.9em;
  }
`;

export const StatusBadge = styled.span`
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8em;
  font-weight: 500;
  background-color: ${props => props.color}20;
  color: ${props => props.color};
`; 