import styled from '@emotion/styled';
import { openSans } from '@/configs/styles/globalStyles';

const Container = styled.div`
  height: 100dvh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${openSans};
  gap: 0 0.5rem;
  color: ${({ theme }) => theme.colors.neutral['black']};

  > a {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.secondary['red']};
    font-weight: 700;
    text-decoration: underline;
  }
`;

export const Section1Styles = {
  Container,
};
