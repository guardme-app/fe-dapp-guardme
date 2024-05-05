import styled from '@emotion/styled';

const Title = styled.h1`
  font-size: 2rem;
  color: #211339;
`;

const personalizedButton = {
  width: '100%',
  marginTop: '10px',
  height: '3rem',
};

const Divider = {
  margin: '2rem 0 1rem 0',
  position: 'relative',
  '::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    borderBottom: '1px solid',
    borderColor: '#222',
    zIndex: 1,
  },
  '::after': {
    content: '"Or"',
    position: 'relative',
    zIndex: 2,
    backgroundColor: 'background.paper',
    padding: '0 10px',
  },
};

export const LoginStyles = {
  Title,
  personalizedButton,
  Divider,
};
