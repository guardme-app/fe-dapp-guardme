import styled from '@emotion/styled';

const Title = styled.h1`
  font-size: 2rem;
  color: #211339;
  text-align: center;
  max-width: 25rem;
  margin: 1rem 0;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const personalizedButton = {
  marginTop: '10px',
  width: '100%',
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

const Back = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0 0.25rem;
  font-size: 1rem;
  font-weight: 700;
  margin: -0.25rem 0 0.25rem 0;
  color: ${({ theme }) => theme.colors.primary['01']};
  cursor: pointer;
`;

export const SignUpStyles = {
  Title,
  personalizedButton,
  Divider,
  Back,
};
