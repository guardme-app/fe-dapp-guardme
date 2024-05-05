import styled from '@emotion/styled';
import { openSans } from '@/configs/styles/globalStyles';

const Container = styled.div`
  height: 100dvh;
  width: calc(100% -240px);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: ${openSans};
  gap: 3rem;
  color: ${({ theme }) => theme.colors.neutral['black']};
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #211339;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem 1rem;
  width: 100%;
  flex-wrap: wrap;
`;

export const HireInsuranceStyles = {
  Container,
  Title,
  Content,
};
