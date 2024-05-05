import styled from '@emotion/styled';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem 0;
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.neutral['white']};
  max-width: 22rem;
  box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;

  > img {
    object-fit: contain;
  }

  > h1 {
    color: ${({ theme }) => theme.colors.primary['01']};
  }

  > p {
    text-align: center;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.25rem 2rem;
  }
`;

export const HireInsuranceStyles = {
  Card,
};
